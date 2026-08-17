import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const THEMES = {
  Pixzen: { accent: 0xc8a56a, secondary: 0x7a8aa0, buildings: 9, mood: 0.0 },
  Wander: { accent: 0xd49a55, secondary: 0x6d9da5, buildings: 7, mood: 1.2 },
  Agentify: { accent: 0x66d8ff, secondary: 0x6686c8, buildings: 8, mood: 2.1 },
  Future: { accent: 0x7b65ff, secondary: 0x18c7c4, buildings: 10, mood: 3.0 },
  Genova: { accent: 0x6ca9d7, secondary: 0x8dc3b5, buildings: 8, mood: 4.0 },
}

function makeBuilding({ width, height, depth, x, z, color, glass = false, rotation = 0 }) {
  const group = new THREE.Group()
  group.position.set(x, height / 2, z)
  group.rotation.y = rotation

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(width, height, depth),
    new THREE.MeshStandardMaterial({
      color,
      roughness: glass ? 0.18 : 0.62,
      metalness: glass ? 0.42 : 0.12,
      transparent: glass,
      opacity: glass ? 0.78 : 1,
    }),
  )
  group.add(body)

  const cap = new THREE.Mesh(
    new THREE.BoxGeometry(width * 0.92, Math.max(0.035, height * 0.025), depth * 0.92),
    new THREE.MeshStandardMaterial({ color: 0xf4eee2, roughness: 0.4, metalness: 0.1 }),
  )
  cap.position.y = height / 2
  group.add(cap)

  const windowMaterial = new THREE.MeshStandardMaterial({
    color: glass ? 0xbfeaff : 0x1d3146,
    emissive: glass ? 0x1b6f8d : 0x0b1320,
    emissiveIntensity: glass ? 1.3 : 0.28,
    roughness: 0.25,
    metalness: 0.55,
  })

  const rows = Math.max(3, Math.floor(height / 0.55))
  const columns = Math.max(1, Math.floor(width / 0.38))
  const gapX = width / (columns + 1)
  const gapY = height / (rows + 1)
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < columns; col += 1) {
      if ((row + col) % 3 === 0 && !glass) continue
      const pane = new THREE.Mesh(new THREE.BoxGeometry(Math.min(0.16, gapX * 0.5), Math.min(0.22, gapY * 0.36), 0.018), windowMaterial)
      pane.position.set(-width / 2 + gapX * (col + 1), -height / 2 + gapY * (row + 1), depth / 2 + 0.012)
      group.add(pane)
    }
  }

  return group
}

export default function ProjectVisual({ title = '', image = '' }) {
  const canvasRef = useRef(null)
  const hostRef = useRef(null)
  const number = ({ Pixzen: '01', Wander: '02', Agentify: '03', Future: '04', Genova: '05' }[title]) || '01'

  useEffect(() => {
    const canvas = canvasRef.current
    const host = hostRef.current
    if (!canvas || !host) return undefined

    const theme = THEMES[title] || THEMES.Pixzen
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x111821, 0.045)

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100)
    camera.position.set(7.2, 5.8, 8.4)
    camera.lookAt(0, 1.8, 0)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.7))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05

    scene.add(new THREE.HemisphereLight(0xf7f3e8, 0x0c1017, 1.35))
    const key = new THREE.DirectionalLight(theme.accent, 4.0)
    key.position.set(4, 9, 5)
    scene.add(key)
    const rim = new THREE.PointLight(theme.secondary, 18, 18, 2)
    rim.position.set(-4, 3.5, -2)
    scene.add(rim)

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(8, 64),
      new THREE.MeshStandardMaterial({ color: 0x141a22, roughness: 0.78, metalness: 0.12 }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.04
    scene.add(floor)

    const grid = new THREE.GridHelper(15, 30, theme.accent, 0x34404f)
    grid.position.y = 0.015
    grid.material.transparent = true
    grid.material.opacity = 0.2
    scene.add(grid)

    const city = new THREE.Group()
    const seed = Math.abs(title.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0))
    for (let i = 0; i < theme.buildings; i += 1) {
      const angle = (i / theme.buildings) * Math.PI * 2 + theme.mood
      const radius = 1.3 + ((seed + i * 17) % 7) * 0.28
      const height = 1.1 + ((seed + i * 23) % 9) * 0.33
      const width = 0.5 + ((seed + i * 11) % 5) * 0.12
      const depth = 0.5 + ((seed + i * 7) % 4) * 0.12
      const building = makeBuilding({
        width,
        height,
        depth,
        x: Math.cos(angle) * radius,
        z: Math.sin(angle) * radius,
        color: i % 2 ? theme.secondary : 0x536171,
        glass: i % 3 === 0,
        rotation: -angle + 0.35,
      })
      building.userData.baseY = building.position.y
      building.userData.float = 0.25 + (i % 4) * 0.07
      building.userData.phase = i * 0.7
      city.add(building)
    }

    const signature = makeBuilding({
      width: title === 'Future' ? 1.35 : 1.05,
      height: title === 'Genova' ? 4.7 : 4.2,
      depth: title === 'Future' ? 1.35 : 1.05,
      x: 0,
      z: 0,
      color: theme.accent,
      glass: true,
      rotation: 0.35,
    })
    city.add(signature)
    scene.add(city)

    const halo = new THREE.Mesh(
      new THREE.TorusGeometry(2.25, 0.018, 8, 96),
      new THREE.MeshBasicMaterial({ color: theme.accent, transparent: true, opacity: 0.62 }),
    )
    halo.rotation.x = Math.PI / 2.25
    halo.position.y = 2.6
    scene.add(halo)

    const halo2 = halo.clone()
    halo2.scale.setScalar(1.45)
    halo2.material = halo.material.clone()
    halo2.material.opacity = 0.24
    halo2.rotation.x = Math.PI / 2.8
    halo2.rotation.z = 0.8
    halo2.position.y = 1.4
    scene.add(halo2)

    const resize = () => {
      const width = Math.max(1, host.clientWidth)
      const height = Math.max(1, host.clientHeight)
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }
    resize()

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    const start = performance.now()
    const animate = (now) => {
      const t = (now - start) * 0.001
      city.rotation.y = t * 0.055
      signature.rotation.y = Math.sin(t * 0.45) * 0.12
      halo.rotation.z = t * 0.22
      halo2.rotation.z = -t * 0.15
      rim.position.x = Math.cos(t * 0.55 + theme.mood) * 5
      rim.position.z = Math.sin(t * 0.55 + theme.mood) * 5
      city.children.forEach((building, index) => {
        if (building === signature) return
        building.position.y = building.userData.baseY + Math.sin(t * 0.65 + building.userData.phase) * building.userData.float * 0.03
        building.rotation.z = Math.sin(t * 0.45 + index) * 0.006
      })
      renderer.render(scene, camera)
      if (!reduced) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    const observer = new ResizeObserver(resize)
    observer.observe(host)

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      renderer.dispose()
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose()
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material]
          materials.forEach((material) => material.dispose())
        }
      })
    }
  }, [title])

  return (
    <div
      ref={hostRef}
      className="project-visual project-3d-visual"
      aria-label={`${title} 3D architecture visual`}
      role="img"
      style={{ '--project-image': `url(${image})` }}
    >
      <div className="project-3d-photo" aria-hidden="true" />
      <canvas ref={canvasRef} className="project-3d-canvas" aria-hidden="true" />
      <div className="project-3d-vignette" aria-hidden="true" />
      <div className="project-3d-scan" aria-hidden="true" />
      <div className="project-3d-label"><span>3D ARCHITECTURE STUDY</span><b>{number}</b></div>
      <div className="project-3d-caption">{title} / spatial visualization</div>
    </div>
  )
}
