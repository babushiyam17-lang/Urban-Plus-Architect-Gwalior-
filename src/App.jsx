import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ArchitecturalScene from './components/ArchitecturalScene'
import ProjectVisual from './components/ProjectVisual'
import { projects, services } from './data/projects'
import './styles.css'

gsap.registerPlugin(ScrollTrigger)

function Icon({ name }) {
  const paths = {
    arrow: 'M7 17 17 7M9 7h8v8',
    message: 'M21 12a8.5 8.5 0 0 1-12.8 7.3L3 21l1.7-5.1A8.5 8.5 0 1 1 21 12Z',
    close: 'M6 6l12 12M18 6 6 18',
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d={paths[name]} /></svg>
}

export default function App() {
  const rootRef = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeService, setActiveService] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const context = gsap.context(() => {
      gsap.from('.reveal-title span', { yPercent: 70, opacity: 0, duration: 1.45, ease: 'power2.out', stagger: 0.11, force3D: true })
      gsap.from('.hero .fade', { y: 14, opacity: 0, duration: 1.15, delay: 0.42, stagger: 0.1, ease: 'power2.out', force3D: true })

      gsap.utils.toArray('.reveal').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: { trigger: element, start: 'top 86%', once: true, fastScrollEnd: true },
          y: 24, opacity: 0, duration: 1.05, ease: 'power2.out', force3D: true,
        })
      })

      gsap.utils.toArray('.project-card').forEach((card) => {
        const visual = card.querySelector('.project-visual')
        if (!visual) return
        gsap.to(visual, {
          scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.35, invalidateOnRefresh: true },
          yPercent: -4, ease: 'none', force3D: true,
        })
      })

      gsap.to('.process-line', {
        scrollTrigger: { trigger: '.process', start: 'top 72%', end: 'bottom 70%', scrub: 1.5, invalidateOnRefresh: true },
        scaleY: 1, transformOrigin: 'top', ease: 'none',
      })

      const refresh = () => ScrollTrigger.refresh()
      window.addEventListener('load', refresh, { once: true })
      setTimeout(refresh, 250)
    }, rootRef)

    return () => context.revert()
  }, [])

  useEffect(() => {
    if (!selectedProject) return undefined
    const onKeyDown = (event) => event.key === 'Escape' && setSelectedProject(null)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedProject])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main ref={rootRef}>
      <section className="hero" id="top" aria-labelledby="hero-title">
        <ArchitecturalScene />
        <nav aria-label="Primary navigation">
          <a className="brand" href="#top">Urban Plus Architect</a>
          <a href="#projects">Work</a>
          <a href="#services">Services</a>
          <a href="#ai">AI Studio</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-copy">
          <p className="eyebrow fade">Gwalior / India — Architecture Studio</p>
          <h1 id="hero-title" className="reveal-title"><span>Spaces</span><span>that move</span><span>people.</span></h1>
          <p className="hero-text fade">Architecture, interiors and 3D visualization shaped with proportion, restraint and a close reading of how people live.</p>
          <a className="button fade" href="#projects">Explore our work <Icon name="arrow" /></a>
        </div>
        <div className="scroll fade">Scroll</div>
      </section>

      <section className="intro section" aria-labelledby="intro-title">
        <p className="section-kicker reveal">Studio Philosophy</p>
        <h2 id="intro-title" className="reveal">We design for how life feels.</h2>
        <p className="lead reveal">Urban Plus Architect approaches each brief through context, proportion, light, material and human experience. We look for the quiet decisions that make a space feel inevitable: a shaded threshold, a wall that catches morning light, a room scaled for conversation, a material that grows warmer with time.</p>
      </section>

      <section className="projects section" id="projects" aria-labelledby="projects-title">
        <div className="section-head reveal">
          <p className="section-kicker">Selected Projects</p>
          <h2 id="projects-title">The original five project visuals, restored.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <button className="project-card reveal" key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectVisual {...project} />
              <span className="project-meta">{project.category} · {project.meta}</span>
              <strong>{project.title}</strong>
              <p>{project.summary}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="services section" id="services" aria-labelledby="services-title">
        <p className="section-kicker reveal">Services</p>
        <h2 id="services-title" className="visually-hidden">Services</h2>
        <div className="service-list reveal">
          {services.map(([title, description], index) => (
            <button key={title} className={activeService === index ? 'active' : ''} onClick={() => setActiveService(index)} onMouseEnter={() => setActiveService(index)} aria-expanded={activeService === index}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="ai-studio section" id="ai" aria-labelledby="ai-title">
        <div className="ai-copy reveal">
          <p className="section-kicker">Artificial Intelligence</p>
          <h2 id="ai-title">AI-assisted architecture, without losing the human eye.</h2>
          <p className="lead">Use AI to explore massing, façade directions, material palettes, lighting moods and early visual concepts faster — while final design decisions stay grounded in site, structure and real human needs.</p>
          <a className="button" href="#contact">Discuss an AI concept <Icon name="arrow" /></a>
        </div>
        <div className="ai-cards reveal" aria-label="AI capabilities">
          <article><span>01</span><strong>Concept Generation</strong><p>Rapid visual directions for early design exploration.</p></article>
          <article><span>02</span><strong>Material & Mood</strong><p>Compare finishes, light, atmosphere and façade language.</p></article>
          <article><span>03</span><strong>3D Visualization</strong><p>Turn selected concepts into polished presentation imagery.</p></article>
        </div>
      </section>

      <section className="philosophy" aria-label="Design statement">
        <h2 className="reveal">Good architecture does not shout.<br />It stays with you.</h2>
      </section>

      <section className="process section" aria-labelledby="process-title">
        <p className="section-kicker reveal">Process</p>
        <h2 id="process-title" className="visually-hidden">Design process</h2>
        <div className="process-line" aria-hidden="true" />
        {['Discover', 'Develop', 'Visualize', 'Deliver'].map((step, index) => (
          <article className="step reveal" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{step}</h3>
            <p>{['Listen, map the context and define the emotional intent of the space.', 'Shape plans, volumes and material direction with clear design logic.', 'Use 3D views and atmosphere studies to refine decisions before execution.', 'Coordinate details into a calm, buildable and enduring final experience.'][index]}</p>
          </article>
        ))}
      </section>

      <section className="contact section" id="contact" aria-labelledby="contact-title">
        <div className="reveal">
          <p className="section-kicker">Project Enquiry</p>
          <h2 id="contact-title">Tell us what you want to build.</h2>
          <p className="placeholder">Share your project basics and we can start the conversation around architecture, interiors, 3D visualization or an AI-assisted concept.</p>
          <a className="whatsapp" href="https://wa.me/910000000000"><Icon name="message" /> WhatsApp</a>
        </div>
        <form className="reveal" onSubmit={handleSubmit}>
          {['Name', 'Email', 'Phone', 'Project type', 'Budget range'].map((field) => (
            <label key={field}>{field}<input required={field !== 'Budget range'} type={field === 'Email' ? 'email' : 'text'} placeholder={field} /></label>
          ))}
          <label>Message<textarea placeholder="Tell us about the site, scope and timeline." /></label>
          <button className="button" type="submit">{submitted ? 'Enquiry ready ✓' : 'Send enquiry'}</button>
          {submitted && <p className="form-success" role="status">Thanks — your enquiry is captured on this page. Connect the form to your preferred email or CRM to receive submissions.</p>}
        </form>
      </section>

      <footer>
        <strong>Urban Plus Architect</strong>
        <span>Gwalior, India</span>
        <span>Architecture / Interiors / Spatial Design / AI Visualization</span>
        <span>Instagram · Email · Phone</span>
      </footer>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close project"><Icon name="close" /></button>
        <ProjectVisual {...project} />
        <div>
          <p className="section-kicker">{project.category} · {project.meta}</p>
          <h2 id="modal-title">{project.title}</h2>
          <p>{project.details}</p>
        </div>
      </section>
    </div>
  )
}
