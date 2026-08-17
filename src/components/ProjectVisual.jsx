export default function ProjectVisual({ image, title='' }){
  return (
    <div className="project-visual" aria-label={`${title} project photograph`} role="img" style={{ position: 'relative', overflow: 'hidden' }}>
      {image ? (
        <img
          src={image}
          alt={`${title} architectural project`}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
        />
      ) : null}
      <div className="project-visual-overlay" aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(12,17,40,0.04) 25%, rgba(12,17,40,0.82) 100%)', pointerEvents: 'none' }} />
    </div>
  )
}
