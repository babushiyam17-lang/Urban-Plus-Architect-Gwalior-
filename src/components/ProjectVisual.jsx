export default function ProjectVisual({ image, title='' }){
  return (
    <div className="project-visual" aria-label={`${title} project photograph`} role="img">
      {image ? (
        <img
          src={image}
          alt={`${title} architectural project`}
          loading="lazy"
          decoding="async"
        />
      ) : null}
      <div className="project-visual-overlay" aria-hidden="true" />
    </div>
  )
}
