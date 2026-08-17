import { useEffect, useRef } from 'react'

const THEMES = {
  Pixzen: { accent: '#c59a55', secondary: '#d8d0c1', grid: '#7f8b96' },
  Wander: { accent: '#d59b57', secondary: '#9bc1c5', grid: '#6c8587' },
  Agentify: { accent: '#61c9e8', secondary: '#b8d6e5', grid: '#6685a0' },
  Future: { accent: '#8d7cff', secondary: '#25d1c9', grid: '#5e5a77' },
  Genova: { accent: '#76acd0', secondary: '#b7d8cc', grid: '#71869b' },
}

export default function ProjectVisual({ title = '', image = '' }) {
  const hostRef = useRef(null)
  const number = ({ Pixzen: '01', Wander: '02', Agentify: '03', Future: '04', Genova: '05' }[title]) || '01'
  const theme = THEMES[title] || THEMES.Pixzen

  useEffect(() => {
    const host = hostRef.current
    if (!host) return undefined
    let raf = 0
    const start = performance.now()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animate = (now) => {
      const t = (now - start) / 1000
      host.style.setProperty('--float-x', `${Math.sin(t * 0.55) * 7}px`)
      host.style.setProperty('--float-y', `${Math.cos(t * 0.7) * 5}px`)
      host.style.setProperty('--tilt', `${Math.sin(t * 0.35) * 1.4}deg`)
      if (!reduced) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div
      ref={hostRef}
      className="project-visual project-3d-visual"
      aria-label={`${title} 3D architecture visual`}
      role="img"
      style={{ '--project-image': `url(${image})`, '--accent': theme.accent, '--secondary': theme.secondary, '--grid': theme.grid }}
    >
      <div className="project-3d-photo" aria-hidden="true" />
      <div className="project-3d-depth" aria-hidden="true">
        <div className="depth-plane plane-back" />
        <div className="depth-plane plane-mid" />
        <div className="depth-building building-a" />
        <div className="depth-building building-b" />
        <div className="depth-building building-c" />
        <div className="depth-building building-tower" />
      </div>
      <div className="project-3d-grid" aria-hidden="true" />
      <div className="project-3d-vignette" aria-hidden="true" />
      <div className="project-3d-scan" aria-hidden="true" />
      <div className="project-3d-label"><span>3D ARCHITECTURE STUDY</span><b>{number}</b></div>
      <div className="project-3d-caption">{title} / spatial visualization</div>
    </div>
  )
}
