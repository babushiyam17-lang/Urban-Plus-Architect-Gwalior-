const root = document.getElementById('root');

const VIDEO_URL = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4';
const HERO_FALLBACK = 'https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg';

const projects = [
  { name: 'Pixzen', category: 'Digital Experience', image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp', text: 'A high-energy visual system built around clarity, motion and bold storytelling.' },
  { name: 'Wander', category: 'Hospitality', image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781631791578-Wander_Hero.webp', text: 'An immersive spatial identity balancing warmth, discovery and refined detail.' },
  { name: 'Agentify', category: 'Future Systems', image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp', text: 'A forward-looking interface language where intelligence meets human-centered design.' },
  { name: 'Future', category: 'Experimental', image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp', text: 'A cinematic exploration of emerging technology, atmosphere and interaction.' },
  { name: 'Genova', category: 'Architecture', image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781670271708-Genova_Hero.webp', text: 'A precise, contemporary composition shaped by material, light and movement.' }
];

const services = [
  ['01', 'Architecture', 'Site-responsive homes, villas and commercial spaces shaped around climate, context and everyday life.'],
  ['02', 'Interior Design', 'Material-led interiors with custom details, lighting strategy and a calm, lasting visual language.'],
  ['03', '3D Visualization', 'Photorealistic imagery, walkthrough-ready scenes and cinematic presentations that make the future tangible.'],
  ['04', 'Planning & Growth', 'Feasibility, space planning, design direction and strategic thinking from first idea to execution.']
];

root.innerHTML = `
<div class="v2-site" id="top">
  <div class="v2-loader" id="v2-loader"><div class="loader-logo">U+</div><div class="loader-track"><span></span></div><small>URBAN PLUS / ARCHITECTURE</small></div>
  <header class="v2-nav-wrap">
    <nav class="v2-nav" aria-label="Primary navigation">
      <a class="v2-brand" href="#top"><span class="v2-brand-mark">U+</span><span>Urban Plus</span></a>
      <div class="v2-nav-links" id="v2-nav-links"><a href="#services">Services</a><a href="#work">Work</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div>
      <a class="v2-nav-cta" href="#contact">Start Project <b>↗</b></a>
      <button class="v2-menu" id="v2-menu" aria-label="Open navigation menu" aria-expanded="false"><span></span><span></span></button>
    </nav>
  </header>

  <main>
    <section class="v2-hero" id="hero" aria-labelledby="v2-hero-title">
      <div class="v2-hero-media" aria-hidden="true">
        <img class="v2-hero-fallback" src="${HERO_FALLBACK}" alt="" />
        <video id="v2-hero-video" class="v2-hero-video" autoplay muted loop playsinline preload="auto">
          <source src="${VIDEO_URL}" type="video/mp4" />
        </video>
        <div class="v2-hero-shade"></div>
        <div class="v2-hero-glow"></div>
        <div class="v2-hero-grid"></div>
        <canvas id="v2-particles"></canvas>
      </div>
      <div class="v2-hero-content">
        <div class="v2-eyebrow-row"><span>URBAN PLUS / ARCHITECTURE STUDIO</span><span>GWALIOR · INDIA</span></div>
        <h1 id="v2-hero-title"><span class="hero-line hero-line-1">Imagine the</span><span class="hero-line hero-line-2">Build the <i>Reality</i></span></h1>
        <p class="v2-hero-copy">Architecture, interiors and 3D visualization designed with clarity, atmosphere and intent.</p>
        <div class="v2-hero-actions"><a class="v2-main-button" href="#work">Explore our work <b>↗</b></a><a class="v2-text-button" href="#studio">Our approach <span>↓</span></a></div>
      </div>
      <div class="v2-hero-meta"><span>01</span><span>Motion / Space / Experience</span></div>
      <div class="v2-scroll"><span>SCROLL TO REVEAL</span><i></i></div>
      <div class="v2-progress"><span></span></div>
    </section>

    <section class="v2-intro v2-section" id="studio">
      <div class="v2-intro-mark reveal-v2">UP<span>01</span></div>
      <div class="v2-intro-copy reveal-v2"><span class="v2-kicker">A different way to build</span><h2>Good architecture is felt <em>before</em> it is explained.</h2><p>Urban Plus creates spaces that feel considered from the first step inside. We combine architectural discipline with a strong eye for light, proportion, material and detail.</p><a class="v2-line-link" href="#contact">Tell us about your project <span>↗</span></a></div>
    </section>

    <section class="v2-services v2-section" id="services">
      <div class="v2-section-head reveal-v2"><div><span class="v2-kicker">Capabilities</span><h2>One studio.<br><em>Complete thinking.</em></h2></div><p>From first sketch to final visual, we keep the design language consistent — so every decision belongs to the same story.</p></div>
      <div class="v2-service-list">${services.map(([num,title,text]) => `<article class="v2-service reveal-v2"><span class="v2-service-num">${num}</span><div><h3>${title}</h3><p>${text}</p></div><a href="#contact" aria-label="Enquire about ${title}">↗</a></article>`).join('')}</div>
    </section>

    <section class="v2-work v2-section" id="work">
      <div class="v2-section-head reveal-v2"><div><span class="v2-kicker">Selected works</span><h2>Built ideas.<br><em>Made memorable.</em></h2></div><p>Five visual studies selected to show the range of Urban Plus — from architecture to immersive digital experiences.</p></div>
      <div class="v2-gallery" id="v2-gallery">${projects.map((p,i) => `<article class="v2-project ${i===0?'is-active':''}" tabindex="0"><div class="v2-project-image"><img src="${p.image}" alt="${p.name} project visual" loading="${i===0?'eager':'lazy'}"><div class="v2-project-overlay"></div></div><div class="v2-project-number">0${i+1}</div><div class="v2-project-info"><span>${p.category}</span><h3>${p.name}</h3><p>${p.text}</p><a href="#contact">Discuss a similar project <b>↗</b></a></div></article>`).join('')}</div>
    </section>

    <section class="v2-statement"><div class="v2-statement-orb"></div><div class="v2-statement-copy reveal-v2"><span class="v2-kicker">The Urban Plus point of view</span><h2>Less noise.<br><span>More meaning.</span></h2><p>Premium design is not about adding more. It is about making every element earn its place.</p></div></section>

    <section class="v2-process v2-section"><div class="v2-section-head reveal-v2"><div><span class="v2-kicker">The process</span><h2>From idea<br><em>to atmosphere.</em></h2></div></div><div class="v2-process-grid">${[['01','Discover','We understand the site, brief, budget, lifestyle and the feeling the project needs to create.'],['02','Develop','Plans, massing, materials and details evolve through a clear sequence of design decisions.'],['03','Visualize','3D imagery and spatial studies make the future space tangible before construction begins.'],['04','Deliver','We translate the concept into coordinated drawings, details and a confident execution path.']].map(([n,t,d])=>`<article class="v2-process-card reveal-v2"><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}</div></section>

    <section class="v2-contact v2-section" id="contact"><div class="v2-contact-orbit"></div><div class="v2-contact-copy reveal-v2"><span class="v2-kicker">Start a conversation</span><h2>Have a space<br><em>in mind?</em></h2><p>Tell us what you are building. We will help you find the clearest way forward.</p><div class="v2-contact-actions"><a class="v2-main-button" href="tel:+918770926307">Call 87709 26307 <b>↗</b></a><a class="v2-line-link" href="mailto:urban.plusgwl@gmail.com">urban.plusgwl@gmail.com <span>↗</span></a></div></div><div class="v2-contact-card reveal-v2"><span>STUDIO</span><strong>A 81, Aditya Puram</strong><p>Near opposite to DD Nagar<br>Gwalior, Madhya Pradesh 474005</p><a href="https://www.google.com/maps/search/?api=1&query=A+81+Aditya+Puram+Gwalior+Madhya+Pradesh+474005" target="_blank" rel="noreferrer">Open in Maps ↗</a></div></section>
  </main>

  <footer class="v2-footer v2-section"><div class="v2-footer-top"><a class="v2-brand" href="#top"><span class="v2-brand-mark">U+</span><span>Urban Plus</span></a><p>Architecture / Interiors / 3D Visualization</p></div><div class="v2-footer-grid"><div><span>EXPLORE</span><a href="#services">Services</a><a href="#work">Work</a><a href="#studio">Studio</a><a href="#contact">Contact</a></div><div><span>CONNECT</span><a href="tel:+918770926307">87709 26307</a><a href="mailto:urban.plusgwl@gmail.com">urban.plusgwl@gmail.com</a><small>Gwalior, India</small></div><div><span>ONLINE</span><a href="https://www.instagram.com/urbanplusarchitect/" target="_blank" rel="noreferrer">Instagram</a><a href="https://urbanplusarchitects.com" target="_blank" rel="noreferrer">Website</a></div></div><div class="v2-footer-bottom"><span>© 2026 Urban Plus Architect & Associates</span><span>Interactive spatial experience</span></div></footer>
</div>`;

const video = document.getElementById('v2-hero-video');
const loader = document.getElementById('v2-loader');
const startVideo = () => video.play().catch(() => {});
video.addEventListener('loadeddata', startVideo, { once: true });
video.addEventListener('canplay', startVideo, { once: true });
video.addEventListener('error', () => document.querySelector('.v2-hero-media').classList.add('video-fallback'), { once: true });
setTimeout(() => { loader.classList.add('is-done'); startVideo(); }, 850);

const menu = document.getElementById('v2-menu');
const navLinks = document.getElementById('v2-nav-links');
menu.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menu.classList.toggle('open',open); menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu'); });
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { navLinks.classList.remove('open'); menu.classList.remove('open'); menu.setAttribute('aria-expanded','false'); }));

const revealObserver = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold:.12, rootMargin:'0px 0px -70px' });
document.querySelectorAll('.reveal-v2').forEach(el => revealObserver.observe(el));

const gallery = document.getElementById('v2-gallery');
const cards = [...gallery.querySelectorAll('.v2-project')];
const activate = card => cards.forEach(c => c.classList.toggle('is-active', c === card));
cards.forEach(card => { card.addEventListener('mouseenter', () => activate(card)); card.addEventListener('focus', () => activate(card)); });

function updateScroll(){
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  document.documentElement.style.setProperty('--v2-scroll', max ? (y/max).toFixed(4) : '0');
  document.querySelector('.v2-nav').style.setProperty('--nav-alpha', String(Math.min(.92,.08+y/240*.84)));
  const p = Math.min(1, Math.max(0,y/innerHeight));
  document.querySelector('.v2-hero-content').style.transform = `translate3d(0,${p*18}px,0)`;
  if (video && !document.querySelector('.v2-hero-media').classList.contains('video-fallback')) video.style.transform = `scale(${1.04+p*.06}) translate3d(${(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--mx'))||0)*-10}px,${(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--my'))||0)*-8}px,0)`;
}
addEventListener('scroll',()=>requestAnimationFrame(updateScroll),{passive:true});
addEventListener('resize',()=>requestAnimationFrame(updateScroll));
addEventListener('pointermove',e=>{document.documentElement.style.setProperty('--mx',((e.clientX/innerWidth)-.5).toFixed(3));document.documentElement.style.setProperty('--my',((e.clientY/innerHeight)-.5).toFixed(3));},{passive:true});
updateScroll();

const canvas = document.getElementById('v2-particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas(){ canvas.width=innerWidth*devicePixelRatio; canvas.height=innerHeight*devicePixelRatio; canvas.style.width=innerWidth+'px'; canvas.style.height=innerHeight+'px'; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); particles=Array.from({length:Math.min(90,Math.floor(innerWidth/14))},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:Math.random()*1.7+.3,vx:(Math.random()-.5)*.18,vy:(Math.random()-.5)*.12,a:Math.random()*.45+.08})); }
function drawParticles(){ ctx.clearRect(0,0,innerWidth,innerHeight); for(const p of particles){p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=innerWidth;if(p.x>innerWidth)p.x=0;if(p.y<0)p.y=innerHeight;if(p.y>innerHeight)p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(255,255,255,${p.a})`;ctx.fill();} requestAnimationFrame(drawParticles); }
resizeCanvas(); addEventListener('resize',resizeCanvas); if(!matchMedia('(prefers-reduced-motion: reduce)').matches) drawParticles();
