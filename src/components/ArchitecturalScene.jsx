import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const slabs = [
  { position: [0, 0, 0], scale: [4.3, 0.13, 1.9], color: '#cfc3af' },
  { position: [-0.55, 0.58, 0.06], scale: [3.45, 0.13, 1.5], color: '#9b9387' },
  { position: [0.4, 1.13, -0.08], scale: [2.75, 0.13, 1.22], color: '#ded7cb' },
  { position: [-0.16, 1.72, 0.12], scale: [2.0, 0.13, 0.95], color: '#b9ad99' },
  { position: [-1.52, 0.83, 0.18], scale: [0.13, 1.55, 1.24], color: '#7d776c' },
  { position: [1.38, 0.68, -0.1], scale: [0.13, 1.44, 1.58], color: '#d8d0c3' },
  { position: [0.58, 1.5, 0.05], scale: [0.13, 1.12, 0.92], color: '#4f4a43' },
]

export default function ArchitecturalScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 720px), (pointer: coarse)').matches
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#efebe3')

    const camera = new THREE.PerspectiveCamera(38, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 1.15, isMobile ? 6.45 : 5.25)

    const renderer = new THREE.WebGLRenderer({ antialias: !isMobile, alpha: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.35 : 1.8))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.shadowMap.enabled = !isMobile
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)

    scene.add(new THREE.HemisphereLight('#ffffff', '#d4c6b0', 1.25))
    const keyLight = new THREE.DirectionalLight('#fff6e9', 2.9)
    keyLight.position.set(3.2, 5.2, 4.4)
    keyLight.castShadow = !isMobile
    keyLight.shadow.mapSize.set(1024, 1024)
    scene.add(keyLight)

    const group = new THREE.Group()
    group.position.y = -0.62
    scene.add(group)

    slabs.forEach(({ position, scale, color }) => {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(...scale),
        new THREE.MeshStandardMaterial({ color, roughness: 0.68, metalness: 0.045 }),
      )
      mesh.position.set(...position)
      mesh.castShadow = !isMobile
      mesh.receiveShadow = true
      group.add(mesh)
    })

    const frame = new THREE.Mesh(
      new THREE.TorusGeometry(1.48, 0.035, 8, 4),
      new THREE.MeshStandardMaterial({ color: '#4b453d', roughness: 0.55, metalness: 0.25 }),
    )
    frame.position.set(0, 0.72, -0.76)
    frame.rotation.z = Math.PI / 4
    group.add(frame)

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(8, 8), new THREE.ShadowMaterial({ opacity: 0.22 }))
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -0.76
    floor.receiveShadow = true
    scene.add(floor)

    const pointer = { x: 0, y: 0 }
    const onPointerMove = (event) => {
      const point = event.touches?.[0] ?? event
      pointer.x = (point.clientX / window.innerWidth - 0.5) * 2
      pointer.y = -(point.clientY / window.innerHeight - 0.5) * 2
    }
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('touchmove', onPointerMove, { passive: true })
    window.addEventListener('resize', onResize)

    let rafId = 0
    const clock = new THREE.Clock()
    const render = () => {
      const time = clock.getElapsedTime()
      const scrollProgress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1.4)

      if (!prefersReducedMotion) {
        group.rotation.y += (pointer.x * 0.16 + Math.sin(time * 0.22) * 0.055 - group.rotation.y) * 0.045
        group.rotation.x += (-pointer.y * 0.075 + Math.sin(time * 0.17) * 0.024 - group.rotation.x) * 0.04
        group.position.y = -0.62 + Math.sin(time * 0.34) * 0.035
      }

      camera.position.y = 1.15 + scrollProgress * 0.28
      camera.position.z = isMobile ? 6.45 : 5.25 - scrollProgress * 0.14
      camera.lookAt(0, 0.78, 0)
      renderer.render(scene, camera)
      rafId = window.requestAnimationFrame(render)
    }

    render()

    return () => {
      window.cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('touchmove', onPointerMove)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      scene.traverse((object) => {
        object.geometry?.dispose?.()
        if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose?.())
        else object.material?.dispose?.()
      })
      mount.replaceChildren()
    }
  }, [])

  return <div className="scene-wrap" ref={mountRef} aria-hidden="true" />
}
