export default function ProjectVisual({ tone='sand', title='' }){
  return <div className={`project-visual ${tone}`} aria-label={`${title} architectural placeholder visual`} role="img">
    <span className="gridline v1"/><span className="gridline v2"/><span className="gridline h1"/><span className="gridline h2"/>
    <div className="mass mass-a"/><div className="mass mass-b"/><div className="mass mass-c"/>
    <div className="sun-slice"/><div className="caption-line">replaceable project visual</div>
  </div>
}
