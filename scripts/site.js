const root = document.getElementById('root');

const projects = [
  ['The Courtyard House','Residential Architecture','Gwalior / 2026','sand','A calm inward-looking residence organized around shadow, planted edges, and filtered daylight.'],
  ['Monumental Residence','Luxury Residence','Madhya Pradesh / 2025','charcoal','A grounded family home with carved volumes, deep verandahs, and a restrained material palette.'],
  ['Casa 27','Interior Design','Gwalior / 2025','clay','Warm interiors shaped through tactile surfaces, built-in furniture, and precise ambient light.'],
  ['Light & Stone','3D Visualization','India / 2026','stone','Atmospheric visualizations that make scale, shadow, and material decisions legible before construction.']
];

const services = [
  ['Architecture','Site-responsive homes and spatial concepts developed from climate, proportion, and everyday rituals.'],
  ['Interior Design','Material-led interiors with custom details, calm palettes, lighting strategy, and lived-in refinement.'],
  ['3D Visualization','Cinematic images and walkthrough-ready compositions for confident design decisions and presentations.'],
  ['Consultation','Early-stage guidance for plots, renovations, space planning, feasibility, and design direction.']
];

root.innerHTML = `
<main>
  <section class="hero" id="top">
    <div class="scene-wrap" id="scene" aria-hidden="true">
      <div class="orbit orbit-a"></div><div class="orbit orbit-b"></div>
      <div class="building building-a"></div><div class="building building-b"></div><div class="building building-c"></div>
      <div class="light-beam"></div>
    </div>
    <nav aria-label="Primary navigation">
      <a class="brand" href="#top">Urban Plus Architect</a>
      <a href="#projects">Work</a><a href="#services">Services</a><a href="#contact">Contact</a>
    </nav>
    <div class="hero-copy reveal">
      <p class="eyebrow">Gwalior / India — Architecture Studio</p>
      <h1><span>Spaces</span><span>that move</span><span>people.</span></h1>
      <p class="hero-text">Architecture, interiors and 3D visualization shaped with proportion, restraint and a close reading of how people live.</p>
      <a class="button" href="#projects">Explore our work <span>↗</span></a>
    </div>
    <div class="scroll">Scroll ↓</div>
  </section>

  <section class="intro section">
    <p class="section-kicker reveal">Studio Philosophy</p>
    <h2 class="reveal">We design for how life feels.</h2>
    <p class="lead reveal">Urban Plus Architect approaches each brief through context, proportion, light, material and human experience. We look for the quiet decisions that make a space feel inevitable.</p>
  </section>

  <section class="projects section" id="projects">
    <div class="section-head reveal"><p class="section-kicker">Selected Projects</p><h2>Editorial studies in space, light and material.</h2></div>
    <div class="project-grid" id="project-grid"></div>
  </section>

  <section class="services section" id="services">
    <p class="section-kicker reveal">Services</p>
    <div class="service-list reveal" id="services-list"></div>
  </section>

  <section class="philosophy"><h2 class="reveal">Good architecture does not shout.<br>It stays with you.</h2></section>

  <section class="process section">
    <p class="section-kicker reveal">Process</p>
    <div class="step reveal"><span>01</span><h3>Discover</h3><p>Listen, map the context and define the emotional intent of the space.</p></div>
    <div class="step reveal"><span>02</span><h3>Develop</h3><p>Shape plans, volumes and material direction with clear design logic.</p></div>
    <div class="step reveal"><span>03</span><h3>Visualize</h3><p>Use 3D views and atmosphere studies to refine decisions before execution.</p></div>
    <div class="step reveal"><span>04</span><h3>Deliver</h3><p>Coordinate details into a calm, buildable and enduring final experience.</p></div>
  </section>

  <section class="contact section" id="contact">
    <div class="reveal"><p class="section-kicker">Enquiry</p><h2>Have a space in mind?</h2><p class="placeholder">Tell us about your project, site, scope and timeline. We will get back to you.</p><a class="whatsapp" href="#contact">Start an enquiry ↗</a></div>
    <form class="reveal" id="enquiry-form">
      <label>Name<input required placeholder="Name"></label><label>Email<input required type="email" placeholder="Email"></label>
      <label>Phone<input required placeholder="Phone"></label><label>Project type<input required placeholder="Project type"></label>
      <label>Budget range<input placeholder="Budget range"></label><label>Message<textarea placeholder="Tell us about the site, scope and timeline."></textarea></label>
      <button class="button" type="submit">Send enquiry</button><p id="form-status" class="form-status" aria-live="polite"></p>
    </form>
  </section>

  <footer><strong>Urban Plus Architect</strong><span>Gwalior, India</span><span>Architecture / Interiors / Spatial Design</span><span>Premium spaces, thoughtfully designed.</span></footer>
</main>`;

const visual = type => `<div class="project-visual ${type}"><span class="gridline v1"></span><span class="gridline v2"></span><span class="gridline h1"></span><span class="gridline h2"></span><div class="mass mass-a"></div><div class="mass mass-b"></div><div class="mass mass-c"></div><div class="sun-slice"></div><div class="caption-line">Urban Plus / study</div></div>`;

document.getElementById('project-grid').innerHTML = projects.map((p, i) => `<button class="project-card reveal" data-project="${i}">${visual(p[3])}<span class="project-meta">${p[1]} · ${p[2]}</span><strong>${p[0]}</strong><p>${p[4]}</p></button>`).join('');

document.getElementById('services-list').innerHTML = services.map((s, i) => `<button class="${i === 0 ? 'active' : ''}" aria-expanded="${i === 0}"><span>0${i + 1}</span><strong>${s[0]}</strong><p>${s[1]}</p></button>`).join('');
document.querySelectorAll('.service-list button').forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.service-list button').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-expanded','false'); });
  btn.classList.add('active'); btn.setAttribute('aria-expanded','true');
}));

document.querySelectorAll('.project-card').forEach(card => card.addEventListener('click', () => {
  const p = projects[Number(card.dataset.project)];
  const backdrop = document.createElement('div'); backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><button class="close" aria-label="Close">Close ×</button>${visual(p[3])}<div><p class="section-kicker">${p[1]} · ${p[2]}</p><h2>${p[0]}</h2><p>${p[4]}</p></div></div>`;
  document.body.appendChild(backdrop);
  backdrop.querySelector('.close').onclick = () => backdrop.remove();
  backdrop.onclick = e => { if (e.target === backdrop) backdrop.remove(); };
}));

document.getElementById('enquiry-form').addEventListener('submit', e => { e.preventDefault(); document.getElementById('form-status').textContent = 'Thanks — your enquiry is ready to send. Please connect your preferred email or WhatsApp before launch.'; });

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduced) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  window.addEventListener('pointermove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    document.documentElement.style.setProperty('--mx', `${x}`);
    document.documentElement.style.setProperty('--my', `${y}`);
  }, { passive: true });
}
