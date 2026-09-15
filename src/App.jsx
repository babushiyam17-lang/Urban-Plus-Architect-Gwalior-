import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'Courtyard House', type: 'Residential', year: '2026', location: 'Gwalior', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85' },
  { title: 'The Glass Residence', type: 'Residential', year: '2026', location: 'Bhopal', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85' },
  { title: 'Monument House', type: 'Architecture', year: '2025', location: 'Indore', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85' },
  { title: 'Urban Villa', type: 'Interiors', year: '2025', location: 'Gwalior', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85' },
]

const services = ['Architecture', 'Interior Design', '3D Visualization', 'Renovation & Consultation']

function Arrow() { return <span className="arrow">↗</span> }

function HeroScene() {
  return <div className="scene" aria-hidden="true">
    <div className="scene-glow" />
    <div className="building building-back"><i/><i/><i/><i/><i/><i/></div>
    <div className="building building-main"><i/><i/><i/><i/><i/><i/><i/><i/></div>
    <div className="ground-grid" />
    <div className="scene-label">UP / 01 — SPATIAL STUDY</div>
  </div>
}

export default function App() {
  const [menu, setMenu] = useState(false)
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-kicker, .hero-copy h1 .line, .hero-copy > p, .hero-copy .hero-actions', { y: 55, opacity: 0, duration: 1.1, stagger: .12, ease: 'power3.out' })
      gsap.from('.hero-stat', { y: 30, opacity: 0, duration: .8, stagger: .12, delay: .8, ease: 'power2.out' })
      gsap.utils.toArray('.reveal').forEach((el) => gsap.from(el, { scrollTrigger: { trigger: el, start: 'top 88%', once: true }, y: 42, opacity: 0, duration: 1, ease: 'power3.out' }))
      gsap.utils.toArray('.project-image').forEach((el) => gsap.fromTo(el, { scale: 1.12 }, { scale: 1, scrollTrigger: { trigger: el, start: 'top 90%', end: 'bottom 10%', scrub: 1.4 } }))
      gsap.to('.scene', { yPercent: 8, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
    })
    return () => ctx.revert()
  }, [])

  const categories = ['All', 'Residential', 'Architecture', 'Interiors']
  const visible = filter === 'All' ? projects : projects.filter(p => p.type === filter)

  return <div className="site">
    <header className="nav">
      <a className="logo" href="#top" onClick={() => setMenu(false)}><span>URBAN</span><b>PLUS</b><small>ARCHITECT</small></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#work" onClick={() => setMenu(false)}>Work</a>
        <a href="#studio" onClick={() => setMenu(false)}>Studio</a>
        <a href="#services" onClick={() => setMenu(false)}>Services</a>
        <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Start a project <Arrow/></a>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><span/><span/></button>
    </header>

    <main id="top">
      <section className="hero">
        <HeroScene />
        <div className="hero-copy">
          <div className="hero-kicker">Gwalior / India <span>—</span> Architecture & Spatial Design</div>
          <h1><span className="line">Spaces</span><span className="line">with a</span><span className="line outline">point of view.</span></h1>
          <p>We create architecture and interiors that balance form, light, material and the way people actually live.</p>
          <div className="hero-actions"><a className="button" href="#work">Explore selected work <Arrow/></a><span>Scroll to explore ↓</span></div>
        </div>
        <div className="hero-bottom">
          <div className="hero-stat"><strong>12+</strong><span>Projects<br/>designed</span></div>
          <div className="hero-stat"><strong>04</strong><span>Design<br/>disciplines</span></div>
          <div className="hero-stat hero-note"><span>Architecture should feel<br/><em>inevitable, not excessive.</em></span></div>
        </div>
      </section>

      <section className="intro section" id="studio">
        <div className="section-index">01 / Studio</div>
        <div className="intro-content reveal"><p className="eyebrow">THE URBAN PLUS APPROACH</p><h2>We design for<br/><em>how life feels.</em></h2><p className="lead">Every project starts with a simple question: what should this space make you feel? From a private residence to a commercial interior, we use proportion, natural light, material and movement to build an answer.</p><a className="text-link" href="#contact">Talk to the studio <Arrow/></a></div>
      </section>

      <section className="work section" id="work">
        <div className="work-head reveal"><div><div className="section-index">02 / Selected work</div><h2>Built ideas.<br/><em>Real spaces.</em></h2></div><p>Selected residential, architectural and interior work developed by Urban Plus.</p></div>
        <div className="filters reveal">{categories.map(c => <button className={filter === c ? 'active' : ''} key={c} onClick={() => setFilter(c)}>{c}</button>)}</div>
        <div className="projects">{visible.map((p, i) => <article className={'project reveal p' + i} key={p.title} onClick={() => setSelected(p)}><div className="project-image"><img src={p.image} alt={p.title}/><span className="project-number">0{i+1}</span><span className="project-open">View project <Arrow/></span></div><div className="project-meta"><div><span>{p.type}</span><h3>{p.title}</h3></div><div><span>{p.location}</span><span>{p.year}</span></div></div></article>)}</div>
      </section>

      <section className="manifesto"><div className="manifesto-shape"/><p className="eyebrow reveal">A DESIGN PRINCIPLE</p><h2 className="reveal">Good architecture<br/>doesn't shout.<br/><em>It stays with you.</em></h2><span className="manifesto-mark">UP</span></section>

      <section className="services section" id="services">
        <div className="section-index reveal">03 / What we do</div><div className="services-layout"><div className="reveal"><h2>From first line<br/>to final <em>light.</em></h2><p className="lead">A focused design studio for architecture, interiors, visualisation and thoughtful transformations.</p></div><div className="service-list">{services.map((s, i) => <div className="service reveal" key={s}><span>0{i+1}</span><h3>{s}</h3><Arrow/></div>)}</div></div>
      </section>

      <section className="process section"><div className="section-index reveal">04 / Process</div><div className="process-grid"><h2 className="reveal">A clear process.<br/><em>Better decisions.</em></h2>{['Discover','Develop','Visualize','Deliver'].map((x,i)=><article className="step reveal" key={x}><span>0{i+1}</span><h3>{x}</h3><p>{['Understand the site, brief, lifestyle and ambition.','Shape plans, volumes, materials and spatial logic.','Test atmosphere, light and detail before execution.','Coordinate the final design into a buildable reality.'][i]}</p></article>)}</div></section>

      <section className="contact" id="contact"><div className="contact-top"><div className="section-index">05 / Start a project</div><span>Gwalior · Madhya Pradesh · India</span></div><div className="contact-main"><div><p className="eyebrow">LET'S BUILD SOMETHING MEANINGFUL</p><h2>Have a space<br/>in <em>mind?</em></h2></div><div><p className="lead">Tell us about your site, project or idea. We'll start with a conversation — no complicated brief required.</p><a className="contact-button" href="https://wa.me/917000000000">WhatsApp the studio <Arrow/></a><a className="email-link" href="mailto:hello@urbanplusarchitects.com">hello@urbanplusarchitects.com</a></div></div></section>
    </main>

    <footer><div className="footer-logo">URBAN<br/><b>PLUS</b><small>ARCHITECT</small></div><div><span>Gwalior, India</span><span>Architecture / Interiors / Visualization</span></div><div className="footer-right"><a href="#top">Back to top ↑</a><span>© 2026 Urban Plus Architect</span></div></footer>

    {selected && <div className="modal-bg" onClick={() => setSelected(null)}><div className="modal" onClick={e => e.stopPropagation()}><button onClick={() => setSelected(null)}>×</button><img src={selected.image} alt={selected.title}/><div><span>{selected.type} · {selected.year}</span><h2>{selected.title}</h2><p>A contemporary Urban Plus study focused on proportion, natural light, material warmth and a strong connection between inside and outside.</p><a className="button" href="#contact" onClick={() => setSelected(null)}>Discuss a similar project <Arrow/></a></div></div></div>}
  </div>
}
