const root = document.getElementById('root');

const projects = [
  {
    name: 'Pixzen',
    category: 'Digital Experience',
    year: '2026',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781522720269-Pixzen.webp',
    text: 'A high-energy visual system built around clarity, motion and bold digital storytelling.'
  },
  {
    name: 'Wander',
    category: 'Brand & Web',
    year: '2026',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781631791578-Wander_Hero.webp',
    text: 'A cinematic experience that turns discovery into an intuitive, memorable journey.'
  },
  {
    name: 'Agentify',
    category: 'Product Design',
    year: '2026',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781671943344-Agentify_Hero.webp',
    text: 'A refined interface direction balancing intelligent technology with human-centered interaction.'
  },
  {
    name: 'Future',
    category: 'Creative Direction',
    year: '2026',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781679053418-Future_Carousel.webp',
    text: 'A forward-looking identity and digital language designed to feel unmistakably next-generation.'
  },
  {
    name: 'Genova',
    category: 'Premium Digital',
    year: '2026',
    image: 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionitems/1781670271708-Genova_Hero.webp',
    text: 'A sophisticated visual world where typography, imagery and interaction work as one.'
  }
];

const services = [
  ['UI/UX', 'Interface systems, journeys and interactions that make complex products feel effortless.', '✦'],
  ['Visual Graphic', 'Distinctive visual identities, campaigns and motion-ready graphic systems.', '◈'],
  ['Strategy', 'Positioning, digital direction and creative strategy aligned to ambitious business goals.', '◎'],
  ['Business Growth', 'Conversion-focused digital experiences designed to create measurable momentum.', '↗']
];

const clients = [
  ['Camera', 'Instagram'], ['ShoppingBag', 'Shopify'], ['Hexagon', 'HubSpot'],
  ['Tv', 'CNBC'], ['Globe2', 'BUSINESS INSIDER'], ['CreditCard', 'stripe']
];

root.innerHTML = `
<div class="site-shell" id="top">
  <header class="navbar-wrap">
    <nav class="navbar" aria-label="Primary navigation">
      <a class="brand" href="#top" aria-label="Urban Plus Architect home"><span class="brand-mark">U+</span><span>Urban Plus</span></a>
      <div class="nav-links" id="nav-links">
        <a href="#services">Services<span></span></a>
        <a href="#work">Work<span></span></a>
        <a href="#agency">Agency<span></span></a>
        <a href="#contact">Contact<span></span></a>
      </div>
      <a class="nav-cta" href="#contact">Start Project</a>
      <button class="menu-toggle" id="menu-toggle" aria-label="Open navigation menu" aria-expanded="false"><i></i><i></i></button>
    </nav>
  </header>

  <main>
    <section class="hero-scroll" id="hero" aria-label="Urban Plus introduction">
      <div class="hero-sticky">
        <div class="hero-media hero-outline">
          <img src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_outline_fzg37d.jpg" alt="Architectural city outline sketch" fetchpriority="high">
          <div class="hero-shade"></div>
        </div>
        <div class="hero-media hero-reality">
          <img src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg" alt="Realistic modern city skyline" fetchpriority="high">
          <div class="hero-shade"></div>
        </div>
        <div class="hero-copy">
          <p class="eyebrow">Urban Plus Architecture · Gwalior / India</p>
          <h1><span class="hero-outline-title">Imagine the Future</span><span class="hero-reality-title">Build the Reality</span></h1>
          <p class="hero-subtitle">We create bold digital experiences and intelligent design systems for ambitious businesses.</p>
          <a class="pill-button hero-button" href="#work">Explore our work <b>↗</b></a>
        </div>
        <div class="scroll-cue"><span>Scroll to reveal</span><b>⌄</b></div>
        <div class="hero-progress"><span></span></div>
      </div>
    </section>

    <section class="clients section-pad" aria-label="Clients">
      <div class="section-top reveal">
        <div><span class="tiny-pill">Interested</span><h2>Trusted by <em>300+</em> businesses</h2></div>
        <p>We partner with teams that want to move faster, look sharper and build what is next.</p>
      </div>
      <div class="ticker-mask">
        <div class="ticker-track">
          <div class="logo-row" id="logo-row"></div>
          <div class="logo-row" id="logo-row-copy" aria-hidden="true"></div>
        </div>
      </div>
    </section>

    <section class="services section-pad" id="services">
      <div class="section-heading reveal">
        <span class="eyebrow">What we do</span>
        <h2>Services built specifically<br><span>for your business.</span></h2>
      </div>
      <div class="service-grid" id="service-grid"></div>
    </section>

    <section class="work section-pad" id="work">
      <div class="section-top reveal">
        <div><span class="eyebrow">Selected work</span><h2>Our Works</h2></div>
        <a class="text-link" href="#contact">View All Projects <span>↗</span></a>
      </div>
      <div class="work-gallery" id="work-gallery"></div>
    </section>

    <section class="agency section-pad" id="agency">
      <div class="agency-glow"></div>
      <div class="agency-grid">
        <div class="reveal"><span class="eyebrow">The agency</span><h2>Design is not just what it looks like.<br><span>It's how it feels.</span></h2></div>
        <div class="agency-copy reveal">
          <p class="large-copy">Urban Plus Architecture brings strategy, visual design and technology together to make brands feel premium, useful and impossible to ignore.</p>
          <p>Every detail is considered — from the first impression to the smallest interaction — so the final experience feels simple, confident and distinctly yours.</p>
          <div class="stats"><div><strong>10+</strong><span>Years Experience</span></div><div><strong>150+</strong><span>Global Clients</span></div></div>
        </div>
      </div>
    </section>

    <section class="contact section-pad" id="contact">
      <div class="contact-inner reveal">
        <span class="eyebrow">Let's work together</span>
        <h2>Let's create<br><span>something epic.</span></h2>
        <a class="pill-button light-button" href="mailto:urbanplusarchitect@gmail.com">Start a Project <b>↗</b></a>
      </div>
      <div class="contact-orb" aria-hidden="true"></div>
    </section>
  </main>

  <footer class="footer section-pad">
    <div class="footer-grid">
      <div class="footer-brand"><a class="brand" href="#top"><span class="brand-mark">U+</span><span>Urban Plus</span></a><p>Architecture, interiors, visual design and digital experiences from Gwalior, India.</p></div>
      <div><span class="footer-label">Explore</span><a href="#services">Services</a><a href="#work">Work</a><a href="#agency">Agency</a><a href="#contact">Contact</a></div>
      <div><span class="footer-label">Social</span><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a><a href="#contact">Behance</a><a href="#contact">Dribbble</a></div>
      <div><span class="footer-label">Connect</span><a href="mailto:urbanplusarchitect@gmail.com">Email us</a><span>Gwalior, India</span></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Urban Plus Architecture. All rights reserved.</span><div><a href="#top">Privacy Policy</a><a href="#top">Terms of Service</a></div></div>
  </footer>
</div>`;

const logoMarkup = clients.map(([icon, name]) => `<div class="client-logo"><span class="logo-icon">${icon === 'Camera' ? '◉' : icon === 'ShoppingBag' ? '◇' : icon === 'Hexagon' ? '⬡' : icon === 'Tv' ? '▣' : icon === 'Globe2' ? '◎' : '◌'}</span><span>${name}</span></div>`).join('');
document.getElementById('logo-row').innerHTML = logoMarkup;
document.getElementById('logo-row-copy').innerHTML = logoMarkup;

document.getElementById('service-grid').innerHTML = services.map((s, i) => `
  <article class="service-card reveal">
    <div class="corner-icon">${s[2]}</div><span class="service-number">0${i + 1}</span><h3>${s[0]}</h3><p>${s[1]}</p><a href="#contact" aria-label="Learn more about ${s[0]}">Explore <span>↗</span></a>
  </article>`).join('');

document.getElementById('work-gallery').innerHTML = projects.map((p, i) => `
  <article class="work-item ${i === 0 ? 'active' : ''} reveal" data-index="${i}" tabindex="0" role="button" aria-label="Open ${p.name} project">
    <div class="work-image"><img src="${p.image}" alt="${p.name} project visual" ${i > 0 ? 'loading="lazy"' : ''}><div class="work-overlay"></div></div>
    <div class="work-content"><span>${p.category} · ${p.year}</span><h3>${p.name}</h3><p>${p.text}</p><a href="#contact">View project <b>↗</b></a></div>
    <span class="work-index">0${i + 1}</span>
  </article>`).join('');

const nav = document.querySelector('.navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  nav.classList.toggle('menu-open', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open'); menuToggle.classList.remove('open'); nav.classList.remove('menu-open'); menuToggle.setAttribute('aria-expanded', 'false');
}));

const workItems = [...document.querySelectorAll('.work-item')];
function activateWork(item) {
  workItems.forEach(x => x.classList.toggle('active', x === item));
}
workItems.forEach(item => {
  item.addEventListener('mouseenter', () => activateWork(item));
  item.addEventListener('focus', () => activateWork(item));
  item.addEventListener('click', e => { if (!e.target.closest('a')) activateWork(item); });
});

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12, rootMargin: '0px 0px -80px' });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const hero = document.getElementById('hero');
const outline = document.querySelector('.hero-outline');
const reality = document.querySelector('.hero-reality');
const realityTitle = document.querySelector('.hero-reality-title');
const outlineTitle = document.querySelector('.hero-outline-title');
const heroProgress = document.querySelector('.hero-progress span');
function updateHero() {
  const rect = hero.getBoundingClientRect();
  const total = Math.max(1, hero.offsetHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -rect.top / total));
  const clip = 8 + progress * 150;
  reality.style.clipPath = `circle(${clip}% at 50% 50%)`;
  reality.style.transform = `scale(${1 + progress * .15})`;
  realityTitle.style.opacity = String(Math.min(1, progress * 2.3));
  outlineTitle.style.opacity = String(Math.max(0, 1 - progress * 2));
  heroProgress.style.transform = `scaleX(${progress})`;
}

function updateNav() {
  const y = Math.min(50, window.scrollY);
  const opacity = 0.02 + (y / 50) * 0.06;
  nav.style.setProperty('--nav-alpha', opacity.toFixed(3));
  nav.style.setProperty('--nav-blur', `${8 + (y / 50) * 16}px`);
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => { updateHero(); updateNav(); ticking = false; });
    ticking = true;
  }
}, { passive: true });
window.addEventListener('resize', updateHero, { passive: true });
updateHero(); updateNav();

window.addEventListener('pointermove', e => {
  const x = (e.clientX / window.innerWidth - .5) * 2;
  const y = (e.clientY / window.innerHeight - .5) * 2;
  document.documentElement.style.setProperty('--mx', x.toFixed(3));
  document.documentElement.style.setProperty('--my', y.toFixed(3));
}, { passive: true });
