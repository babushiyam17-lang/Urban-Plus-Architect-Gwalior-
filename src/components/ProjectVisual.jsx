const palettes = {
  'The Courtyard House': { accent: '#c8a45b', glow: '#f2d79a', sky: '#e9e5db', ground: '#8f8a7d' },
  'Monumental Residence': { accent: '#7a8c98', glow: '#d9e7ee', sky: '#dce6e9', ground: '#5d6668' },
  'Casa 27': { accent: '#b8754a', glow: '#f0c39d', sky: '#eee3d5', ground: '#756557' },
  'Light & Stone': { accent: '#7c93b8', glow: '#cce1ff', sky: '#dce8f0', ground: '#59636e' },
  'Urban Residence': { accent: '#5e7d72', glow: '#b9e2d3', sky: '#dfe8e1', ground: '#52645b' },
}

function Windows({ rows = 8, cols = 4 }) {
  return (
    <div className="building-windows" aria-hidden="true">
      {Array.from({ length: rows * cols }, (_, index) => <i key={index} />)}
    </div>
  )
}

export default function ProjectVisual({ title = '' }) {
  const palette = palettes[title] || palettes['The Courtyard House']
  const variant = Math.max(1, Object.keys(palettes).indexOf(title) + 1)

  return (
    <div
      className={`project-visual architectural-visual architectural-variant-${variant}`}
      aria-label={`${title} animated architectural visualization`}
      role="img"
      style={{
        '--accent': palette.accent,
        '--glow': palette.glow,
        '--sky': palette.sky,
        '--ground': palette.ground,
      }}
    >
      <style>{`
        .architectural-visual{position:relative!important;isolation:isolate;background:linear-gradient(180deg,var(--sky) 0%,#c9d0cf 48%,#8f9690 100%);overflow:hidden!important}
        .architectural-visual:before{content:"";position:absolute;inset:0;z-index:0;background:radial-gradient(circle at 52% 30%,rgba(255,255,255,.9),transparent 26%),linear-gradient(180deg,rgba(255,255,255,.3),transparent 55%,rgba(15,23,30,.46));}
        .architectural-visual:after{content:"";position:absolute;left:-10%;right:-10%;bottom:-34%;height:62%;z-index:1;background:radial-gradient(ellipse at center,rgba(255,255,255,.2),transparent 54%),linear-gradient(180deg,transparent,var(--ground));filter:blur(2px);}
        .architecture-grid{position:absolute;left:-12%;right:-12%;bottom:3%;height:30%;z-index:2;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px);background-size:42px 22px;transform:perspective(500px) rotateX(63deg);transform-origin:bottom;animation:gridDrift 9s ease-in-out infinite;}
        .building-scene{position:absolute;inset:0;z-index:3;perspective:900px;transform-style:preserve-3d;animation:architectureFloat 8s ease-in-out infinite;}
        .building-cluster{position:absolute;left:50%;bottom:8%;width:78%;height:78%;transform:translateX(-50%) rotateX(7deg) rotateY(-8deg);transform-style:preserve-3d;}
        .tower{position:absolute;bottom:0;transform-style:preserve-3d;box-shadow:0 28px 45px rgba(12,18,22,.2);}
        .tower-front{position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.72),rgba(255,255,255,.12)),linear-gradient(90deg,var(--accent),#46515a);backface-visibility:hidden;}
        .tower-side{position:absolute;top:0;right:0;width:28%;height:100%;transform-origin:left center;transform:rotateY(90deg);background:linear-gradient(180deg,rgba(255,255,255,.2),rgba(0,0,0,.3)),var(--ground);}
        .tower-roof{position:absolute;left:-3%;top:-9px;width:106%;height:10px;background:var(--glow);box-shadow:0 0 22px rgba(255,255,255,.3);}
        .building-windows{position:absolute;inset:9% 9% 6% 9%;display:grid;grid-template-columns:repeat(4,1fr);grid-auto-rows:1fr;gap:7px;opacity:.8;transform:translateZ(2px);}
        .building-windows i{display:block;border-radius:1px;background:linear-gradient(180deg,var(--glow),rgba(255,255,255,.28));box-shadow:0 0 8px rgba(255,255,255,.16);animation:windowPulse 4.2s ease-in-out infinite;}
        .building-windows i:nth-child(3n){animation-delay:.7s}.building-windows i:nth-child(5n){animation-delay:1.4s}.building-windows i:nth-child(7n){animation-delay:2.1s}
        .tower-a{left:4%;width:27%;height:55%;transform:translateZ(-40px) rotateY(4deg)}
        .tower-b{left:31%;width:37%;height:82%;transform:translateZ(35px)}
        .tower-c{right:2%;width:25%;height:64%;transform:translateZ(-15px) rotateY(-4deg)}
        .tower-d{left:20%;bottom:-2%;width:21%;height:40%;transform:translateZ(75px);opacity:.96}
        .tower-e{right:18%;bottom:-1%;width:19%;height:35%;transform:translateZ(55px);opacity:.9}
        .roof-garden{position:absolute;left:17%;bottom:34%;width:23%;height:4px;background:var(--glow);box-shadow:0 0 18px var(--glow);transform:translateZ(95px) rotateZ(-4deg);animation:lightDrift 7s ease-in-out infinite;}
        .orb{position:absolute;width:90px;height:90px;right:13%;top:18%;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,var(--glow) 18%,transparent 65%);filter:blur(.3px);opacity:.7;animation:orbFloat 6s ease-in-out infinite;}
        .light-sweep{position:absolute;z-index:4;top:-20%;left:-25%;width:30%;height:150%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),transparent);filter:blur(9px);transform:rotate(17deg);animation:sweep 7.5s ease-in-out infinite;pointer-events:none;}
        .architectural-label{position:absolute;left:24px;top:22px;z-index:5;color:rgba(20,28,31,.66);font-size:10px;font-weight:800;letter-spacing:.24em;text-transform:uppercase;}
        .architectural-number{position:absolute;right:24px;top:20px;z-index:5;color:rgba(20,28,31,.45);font-size:12px;letter-spacing:.18em;font-weight:700;}
        .architectural-visual .project-visual-overlay{display:none!important}
        @keyframes architectureFloat{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-7px) scale(1.012)}}
        @keyframes windowPulse{0%,100%{opacity:.48}50%{opacity:1}}
        @keyframes orbFloat{0%,100%{transform:translate3d(0,0,0) scale(.92);opacity:.5}50%{transform:translate3d(-20px,13px,30px) scale(1.08);opacity:.82}}
        @keyframes lightDrift{0%,100%{transform:translateZ(95px) translateX(0) rotateZ(-4deg)}50%{transform:translateZ(115px) translateX(18px) rotateZ(-2deg)}}
        @keyframes gridDrift{0%,100%{transform:perspective(500px) rotateX(63deg) translateY(0)}50%{transform:perspective(500px) rotateX(63deg) translateY(10px)}}
        @keyframes sweep{0%{transform:translateX(-10%) rotate(17deg);opacity:0}18%{opacity:.8}55%{opacity:.35}100%{transform:translateX(430%) rotate(17deg);opacity:0}}
        .architectural-variant-2 .tower-b{height:70%;width:30%}.architectural-variant-2 .tower-a{height:45%}.architectural-variant-2 .tower-c{height:78%}
        .architectural-variant-3 .tower-b{height:62%;width:42%}.architectural-variant-3 .tower-d{height:50%}.architectural-variant-3 .tower-e{height:44%}
        .architectural-variant-4 .tower-b{height:90%;width:28%}.architectural-variant-4 .tower-a{height:72%}.architectural-variant-4 .tower-c{height:48%}
        .architectural-variant-5 .tower-b{height:74%;width:34%}.architectural-variant-5 .tower-a{height:62%}.architectural-variant-5 .tower-c{height:57%}
        @media (prefers-reduced-motion:reduce){.building-scene,.building-windows i,.orb,.roof-garden,.architecture-grid,.light-sweep{animation:none!important}}
      `}</style>
      <div className="architectural-label">URBAN PLUS / ARCHITECTURE</div>
      <div className="architectural-number">0{variant}</div>
      <div className="light-sweep" aria-hidden="true" />
      <div className="architecture-grid" aria-hidden="true" />
      <div className="building-scene">
        <div className="orb" />
        <div className="building-cluster">
          {['tower-a', 'tower-b', 'tower-c', 'tower-d', 'tower-e'].map((name, index) => (
            <div className={`tower ${name}`} key={name}>
              <div className="tower-front"><Windows rows={index === 1 ? 10 : 7} cols={4} /></div>
              <div className="tower-side" />
              <div className="tower-roof" />
            </div>
          ))}
          <div className="roof-garden" />
        </div>
      </div>
    </div>
  )
}
