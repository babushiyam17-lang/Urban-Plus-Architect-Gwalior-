const root = document.getElementById('root');

const projects = [
  { name: 'Courtyard House', category: 'Residential', year: '2026', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=88', text: 'A calm contemporary residence organized around light, landscape and a private courtyard.' },
  { name: 'Monumental Residence', category: 'Luxury Residence', year: '2025', image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=88', text: 'Strong volumes, deep openings and a restrained palette create a timeless family home.' },
  { name: 'Casa 27', category: 'Interior Design', year: '2025', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=88', text: 'Warm timber, stone and layered light shape an interior designed for everyday rituals.' },
  { name: 'Light & Stone', category: '3D Visualization', year: '2026', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2000&q=88', text: 'Atmospheric visualization where scale, shadow and material make design decisions tangible.' },
  { name: 'Urban Residence', category: 'Contemporary', year: '2026', image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=88', text: 'A precise composition balancing privacy, openness, landscape and natural light.' }
];

const services = [
  ['01', 'Architecture', 'Site-responsive homes, villas and commercial spaces shaped around climate, context and everyday life.'],
  ['02', 'Interior Design', 'Material-led interiors with custom details, lighting strategy and a calm, lasting visual language.'],
  ['03', '3D Visualization', 'Photorealistic architectural imagery and walkthrough-ready scenes that let you experience the design early.'],
  ['04', 'Planning & Consultation', 'Plot planning, feasibility, space planning and design direction from first idea to execution.']
];

const heroVideoUrl = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';

root.innerHTML = `
<div class="site-shell" id="top">
  <div class="loader" id="loader"><div class="loader-mark">U+</div><div class="loader-line"><span></span></div><p>URBAN PLUS / ARCHITECTURE</p></div>
  <header class="navbar-wrap">
    <nav class="navbar" aria-label="Primary navigation">
      <a class="brand" href="#top"><span class="brand-mark">U+</span><span>Urban Plus</span></a>
      <div class="nav-links" id="nav-links"><a href="#services">Services<span></span></a><a href="#work">Work<span></span></a><a href="#studio">Studio<span></span></a><a href="#contact">Contact<span></span></a></div>
      <a class="nav-cta" href="#contact">Start a project <b>↗</b></a>
      <button class="menu-toggle" id="menu-toggle" aria-label="Open navigation menu" aria-expanded="false"><i></i><i></i></button>
    </nav>
  </header>

  <main>
    <section class="hero3d" id="hero" aria-labelledby="hero-title">
      <video id="hero-background-video" class="hero-background-video" src="${heroVideoUrl}" autoplay muted loop playsinline preload="auto" aria-hidden="true"></video>
      <canvas id="architecture-canvas" aria-hidden="true"></canvas>
      <div class="hero-video-tint" aria-hidden="true"></div>
      <div class="hero-noise" aria-hidden="true"></div>
      <div class="hero-vignette" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-copy">
        <div class="eyebrow-row"><span class="eyebrow">Architecture / Interiors / Visualization</span><span class="hero-location">Gwalior · India</span></div>
        <h1 id="hero-title"><span>We shape</span><span class="outline-text">spaces that</span><span>stay with you.</span></h1>
        <p>Architecture with clarity, atmosphere and intent — designed around the way people actually live.</p>
        <div class="hero-actions"><a class="pill-button gold" href="#work">Explore selected work <b>↗</b></a><a class="quiet-link" href="#studio">Our approach <span>↓</span></a></div>
      </div>
      <div class="hero-side-note"><span>01</span><span>Interactive spatial study</span></div>
      <div class="hero-bottom"><span>Scroll to explore</span><i></i><span>Since 2012</span></div>
      <div class="hero-progress"><span></span></div>
    </section>

    <section class="manifesto section-pad" id="studio">
      <div class="manifesto-mark reveal">UP<span>01</span></div>
      <div class="manifesto-copy reveal"><span class="eyebrow">A different way to build</span><h2>Good architecture is felt <em>before</em> it is explained.</h2><p>Urban Plus Architect & Associates creates spaces that feel considered from the first step inside. We combine architectural discipline with a strong eye for light, proportion, material and detail.</p><a class="text-link" href="#contact">Tell us about your project <span>↗</span></a></div>
    </section>

    <section class="services section-pad" id="services">
      <div class="section-head reveal"><div><span class="eyebrow">Capabilities</span><h2>One studio.<br><em>Complete thinking.</em></h2></div><p>From first sketch to final visual, we keep the design language consistent — so every decision belongs to the same story.</p></div>
      <div class="service-stack" id="service-stack"></div>
    </section>

    <section class="work section-pad" id="work">
      <div class="section-head reveal"><div><span class="eyebrow">Selected projects</span><h2>Built ideas.</h2></div><p>Residential architecture, interiors and visual studies from our evolving portfolio.</p></div>
      <div class="project-list" id="project-list"></div>
    </section>

    <section class="statement">
      <div class="statement-bg"></div><div class="statement-copy reveal"><span class="eyebrow">The Urban Plus point of view</span><h2>Less noise.<br><span>More meaning.</span></h2><p>We believe premium design is not about adding more. It is about making every element earn its place.</p></div>
    </section>

    <section class="process section-pad">
      <div class="section-head reveal"><div><span class="eyebrow">The process</span><h2>From idea<br><em>to atmosphere.</em></h2></div></div>
      <div class="process-grid">
        <article class="process-card reveal"><span>01</span><h3>Discover</h3><p>We understand the site, brief, budget, lifestyle and the feeling the project needs to create.</p></article>
        <article class="process-card reveal"><span>02</span><h3>Develop</h3><p>Plans, massing, materials and details evolve through a clear sequence of design decisions.</p></article>
        <article class="process-card reveal"><span>03</span><h3>Visualize</h3><p>3D imagery and spatial studies make the future space tangible before construction begins.</p></article>
        <article class="process-card reveal"><span>04</span><h3>Deliver</h3><p>We translate the concept into coordinated drawings, details and a confident execution path.</p></article>
      </div>
    </section>

    <section class="contact section-pad" id="contact">
      <div class="contact-orbit" aria-hidden="true"></div><div class="contact-copy reveal"><span class="eyebrow">Start a conversation</span><h2>Have a space<br><em>in mind?</em></h2><p>Tell us what you are building. We will help you find the clearest way forward.</p><div class="contact-actions"><a class="pill-button gold" href="tel:+918770926307">Call 87709 26307 <b>↗</b></a><a class="text-link" href="mailto:urban.plusgwl@gmail.com">urban.plusgwl@gmail.com <span>↗</span></a></div></div><div class="contact-card reveal"><span>Studio</span><strong>A 81, Aditya Puram</strong><p>Near opposite to DD Nagar<br>Gwalior, Madhya Pradesh 474005</p><a href="https://www.google.com/maps/search/?api=1&query=A+81+Aditya+Puram+Gwalior+Madhya+Pradesh+474005" target="_blank" rel="noreferrer">Open in Maps ↗</a></div>
    </section>
  </main>

  <footer class="footer section-pad">
    <div class="footer-top"><a class="brand" href="#top"><span class="brand-mark">U+</span><span>Urban Plus</span></a><p>Architecture / Interiors / 3D Visualization</p></div>
    <div class="footer-grid"><div><span class="footer-label">Explore</span><a href="#services">Services</a><a href="#work">Work</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div><div><span class="footer-label">Connect</span><a href="tel:+918770926307">87709 26307</a><a href="mailto:urban.plusgwl@gmail.com">urban.plusgwl@gmail.com</a><span>Gwalior, India</span></div><div><span class="footer-label">Online</span><a href="https://www.instagram.com/urbanplusarchitect/" target="_blank" rel="noreferrer">Instagram</a><a href="https://urbanplusarchitects.com" target="_blank" rel="noreferrer">Website</a><a href="#contact">WhatsApp</a></div></div>
    <div class="footer-bottom"><span>© 2026 Urban Plus Architect & Associates</span><span>Designed as an interactive spatial experience</span></div>
  </footer>
</div>`;

document.getElementById('service-stack').innerHTML = services.map(([num, title, text]) => `<article class="service-row reveal"><span class="service-num">${num}</span><h3>${title}</h3><p>${text}</p><a href="#contact" aria-label="Enquire about ${title}">↗</a></article>`).join('');

document.getElementById('project-list').innerHTML = projects.map((p, i) => `<article class="project reveal" tabindex="0"><div class="project-image"><img src="${p.image}" alt="${p.name} architectural project" loading="${i === 0 ? 'eager' : 'lazy'}"><div class="project-shade"></div></div><div class="project-index">0${i + 1}</div><div class="project-copy"><span>${p.category} · ${p.year}</span><h3>${p.name}</h3><p>${p.text}</p><a href="#contact">Discuss a similar project <b>↗</b></a></div></article>`).join('');

const heroStyle = document.createElement('style');
heroStyle.textContent = `
.hero-background-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;filter:saturate(.82) contrast(1.05) brightness(.72);transform:scale(1.035);transition:transform 1.2s cubic-bezier(.2,.8,.2,1),filter .8s ease;}
.hero3d:hover .hero-background-video{transform:scale(1.06);filter:saturate(.9) contrast(1.08) brightness(.78);}
.hero-video-tint{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(90deg,rgba(5,8,18,.82) 0%,rgba(5,8,18,.48) 42%,rgba(5,8,18,.18) 72%,rgba(5,8,18,.58) 100%),linear-gradient(180deg,rgba(5,8,18,.42),transparent 35%,rgba(5,8,18,.82));mix-blend-mode:normal;}
#architecture-canvas{z-index:2!important;opacity:.72;mix-blend-mode:screen;}
.hero-noise,.hero-vignette,.hero-grid{z-index:3!important;}
.hero-copy,.hero-side-note,.hero-bottom,.hero-progress{z-index:5!important;}
@media(max-width:720px){.hero-background-video{object-position:center;filter:saturate(.76) contrast(1.03) brightness(.58);}.hero-video-tint{background:linear-gradient(180deg,rgba(5,8,18,.52),rgba(5,8,18,.25) 35%,rgba(5,8,18,.9) 100%);}#architecture-canvas{opacity:.45;}}
`;
document.head.appendChild(heroStyle);

const nav = document.querySelector('.navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuToggle.classList.toggle('open', open); nav.classList.toggle('menu-open', open); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu'); });
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navLinks.classList.remove('open'); menuToggle.classList.remove('open'); nav.classList.remove('menu-open'); menuToggle.setAttribute('aria-expanded','false'); }));

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); }), { threshold: 0.1, rootMargin: '0px 0px -70px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const projectsEls = [...document.querySelectorAll('.project')];
projectsEls.forEach((el, index) => { el.addEventListener('mouseenter', () => projectsEls.forEach((x, i) => x.classList.toggle('active', i === index))); el.addEventListener('focus', () => projectsEls.forEach((x, i) => x.classList.toggle('active', i === index))); });

let lastScroll = 0;
function updateScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max ? y / max : 0;
  document.documentElement.style.setProperty('--scroll', progress.toFixed(4));
  nav.style.setProperty('--nav-alpha', Math.min(.86, .08 + Math.min(y, 180) / 180 * .78).toFixed(2));
  nav.style.setProperty('--nav-blur', `${10 + Math.min(y, 180) / 180 * 20}px`);
  const video = document.getElementById('hero-background-video');
  if (video) { video.style.transform = `scale(${1.035 + Math.min(progress,1)*.035}) translate3d(${(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mx'))||0)*-4}px,${(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--my'))||0)*-3}px,0)`; }
  lastScroll = y;
}
window.addEventListener('scroll', () => requestAnimationFrame(updateScroll), { passive: true });
updateScroll();

window.addEventListener('pointermove', e => { document.documentElement.style.setProperty('--mx', ((e.clientX / innerWidth) - .5).toFixed(3)); document.documentElement.style.setProperty('--my', ((e.clientY / innerHeight) - .5).toFixed(3)); }, { passive: true });

async function boot3D() {
  const canvas = document.getElementById('architecture-canvas');
  if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  try {
    const THREE = await import('https://esm.sh/three@0.179.1');
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x090a09, .075);
    const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, .1, 100);
    camera.position.set(4.8, 3.3, 8.8);
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: innerWidth > 720, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio, innerWidth < 720 ? 1.25 : 1.8));
    renderer.setSize(innerWidth, innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    scene.add(new THREE.AmbientLight(0xf5ead4, 1.2));
    const key = new THREE.DirectionalLight(0xffe6b5, 3.4); key.position.set(4, 8, 6); scene.add(key);
    const rim = new THREE.PointLight(0xd8a85c, 18, 12); rim.position.set(-4, 2, 1); scene.add(rim);

    const architecture = new THREE.Group(); scene.add(architecture);
    const warm = new THREE.MeshStandardMaterial({ color: 0x8d7759, roughness: .3, metalness: .18 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x161714, roughness: .2, metalness: .65 });
    const glass = new THREE.MeshPhysicalMaterial({ color: 0x7b6b54, metalness: .18, roughness: .12, transmission: .16, transparent: true, opacity: .72 });
    const gold = new THREE.MeshStandardMaterial({ color: 0xc9a86a, metalness: .78, roughness: .22, emissive: 0x2a1c0b, emissiveIntensity: .4 });

    const addBox = (w,h,d,x,y,z,mat) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w,h,d), mat); m.position.set(x,y,z); m.castShadow = true; architecture.add(m); return m; };
    addBox(4.8,.18,3.1,0,0,0,warm); addBox(4.2,.14,2.6,-.25,.78,.08,dark); addBox(3.6,.12,2.25,.25,1.48,-.04,warm); addBox(2.8,.12,1.8,-.2,2.12,.02,dark); addBox(2.15,.1,1.45,.22,2.7,-.02,warm);
    [[-2.05,.45,1.15],[2.05,.45,1.15],[-1.7,1.45,1.0],[1.75,1.45,1.0],[-1.35,2.2,.75],[1.3,2.2,.75]].forEach(([x,y,z]) => addBox(.16,1.0,.16,x,y,z,dark));
    addBox(.1,2.9,1.9,-1.55,1.45,-.92,glass); addBox(.1,2.9,1.9,1.55,1.45,-.92,glass); addBox(3.1,.08,.08,0,2.86,-.95,gold); addBox(3.1,.08,.08,0,.08,-.95,gold);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1,.018,8,96), gold); ring.rotation.x = Math.PI/2; ring.position.y = .02; architecture.add(ring);

    const particles = new THREE.BufferGeometry(); const count = innerWidth < 720 ? 420 : 900; const positions = new Float32Array(count * 3);
    for (let i=0;i<count;i++){ const r=THREE.MathUtils.randFloat(5,16), a=Math.random()*Math.PI*2; positions[i*3]=Math.cos(a)*r; positions[i*3+1]=THREE.MathUtils.randFloat(-1,8); positions[i*3+2]=Math.sin(a)*r-3; }
    particles.setAttribute('position', new THREE.BufferAttribute(positions,3));
    const points = new THREE.Points(particles,new THREE.PointsMaterial({color:0xd6b77c,size:innerWidth<720?.018:.026,transparent:true,opacity:.58})); scene.add(points);

    const grid = new THREE.GridHelper(18,18,0x3d3529,0x211f1a); grid.position.y=-.12; grid.material.transparent=true; grid.material.opacity=.32; scene.add(grid);

    const pointer = {x:0,y:0};
    const onPointer = e => { pointer.x=(e.clientX/innerWidth-.5)*2; pointer.y=-(e.clientY/innerHeight-.5)*2; };
    const onResize = () => { camera.aspect=innerWidth/innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth,innerHeight); renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<720?1.25:1.8)); };
    addEventListener('pointermove',onPointer,{passive:true}); addEventListener('resize',onResize);

    const clock = new THREE.Clock();
    const tick = () => {
      const t=clock.getElapsedTime(); const scroll=Math.min(1,scrollY/Math.max(1,innerHeight*1.65));
      architecture.rotation.y += ((pointer.x*.26 + scroll*.8 + Math.sin(t*.18)*.08)-architecture.rotation.y)*.035;
      architecture.rotation.x += ((pointer.y*-.08 + Math.sin(t*.23)*.018)-architecture.rotation.x)*.035;
      architecture.position.y = -1.25 + Math.sin(t*.45)*.045 + scroll*.45;
      architecture.scale.setScalar(1 + scroll*.13);
      points.rotation.y = t*.012; points.rotation.x = Math.sin(t*.1)*.02;
      camera.position.x += ((4.8 + pointer.x*1.1 - scroll*1.1)-camera.position.x)*.025;
      camera.position.y += ((3.3 + pointer.y*.35 + scroll*.35)-camera.position.y)*.025;
      camera.position.z += ((8.8 - scroll*1.25)-camera.position.z)*.025;
      camera.lookAt(0,1.2,0);
      renderer.render(scene,camera); requestAnimationFrame(tick);
    }; tick();

    setTimeout(() => document.getElementById('loader')?.classList.add('done'), 650);
  } catch (error) { console.warn('3D enhancement unavailable', error); document.getElementById('loader')?.classList.add('done'); }
}
boot3D();

const video = document.getElementById('hero-background-video');
if (video) { video.play().catch(() => {}); video.addEventListener('canplay', () => video.classList.add('ready'), { once: true }); }
setTimeout(() => document.getElementById('loader')?.classList.add('done'), 1800);
