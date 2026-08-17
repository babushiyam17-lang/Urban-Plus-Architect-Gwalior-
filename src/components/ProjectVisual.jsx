export default function ProjectVisual({ title = '', image = '' }) {
  const number = ({ Pixzen: '01', Wander: '02', Agentify: '03', Future: '04', Genova: '05' }[title]) || '01'

  return (
    <div
      className="project-visual restored-project-visual"
      aria-label={`${title} project visual`}
      role="img"
    >
      <img
        className="restored-project-image"
        src={image}
        alt={`${title} project preview`}
        loading="lazy"
        decoding="async"
      />
      <div className="restored-project-shade" aria-hidden="true" />
      <div className="restored-project-glow" aria-hidden="true" />
      <div className="restored-project-sweep" aria-hidden="true" />
      <div className="restored-project-topline">
        <span>{title.toUpperCase()}</span>
        <span>{number}</span>
      </div>
      <div className="restored-project-frame" aria-hidden="true" />
      <style>{`
        .restored-project-visual{position:relative!important;isolation:isolate;overflow:hidden!important;background:#e9e6de!important;min-height:100%;}
        .restored-project-image{position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:cover;object-position:center;z-index:0;transform:scale(1.035);transition:transform 1.2s cubic-bezier(.25,1,.5,1),filter 1.2s ease;}
        .project-card:hover .restored-project-image,.restored-project-visual:hover .restored-project-image{transform:scale(1.085);}
        .restored-project-shade{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(8,12,20,.02) 20%,rgba(8,12,20,.08) 42%,rgba(8,12,20,.7) 100%);pointer-events:none;}
        .restored-project-glow{position:absolute;width:48%;height:55%;left:25%;top:10%;z-index:2;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 68%);filter:blur(28px);mix-blend-mode:screen;animation:restoredGlow 8s ease-in-out infinite;pointer-events:none;}
        .restored-project-sweep{position:absolute;z-index:3;top:-25%;left:-45%;width:28%;height:150%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);filter:blur(8px);transform:rotate(16deg);animation:restoredSweep 8s ease-in-out infinite;pointer-events:none;}
        .restored-project-topline{position:absolute;left:24px;right:24px;top:22px;z-index:5;display:flex;justify-content:space-between;align-items:center;color:rgba(255,255,255,.9);font-size:10px;font-weight:800;letter-spacing:.22em;text-shadow:0 2px 12px rgba(0,0,0,.35);pointer-events:none;}
        .restored-project-frame{position:absolute;inset:14px;border:1px solid rgba(255,255,255,.18);border-radius:24px;z-index:5;pointer-events:none;opacity:.65;}
        @keyframes restoredGlow{0%,100%{transform:translate3d(-5%,0,0) scale(.9);opacity:.35}50%{transform:translate3d(8%,7%,0) scale(1.15);opacity:.7}}
        @keyframes restoredSweep{0%{transform:translateX(0) rotate(16deg);opacity:0}18%{opacity:.55}55%{opacity:.2}100%{transform:translateX(470%) rotate(16deg);opacity:0}}
        @media (prefers-reduced-motion:reduce){.restored-project-image,.restored-project-glow,.restored-project-sweep{animation:none!important;transition:none!important}}
      `}</style>
    </div>
  )
}
