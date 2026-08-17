(() => {
  const hero = document.getElementById('hero');
  if (!hero) return;
  hero.className = 'hero-scroll-spec';
  hero.setAttribute('aria-labelledby','hero-title-spec');
  hero.innerHTML = `
    <div class="hero-sticky-spec">
      <video class="hero-video-spec" autoplay muted loop playsinline preload="auto" aria-hidden="true">
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4" type="video/mp4">
      </video>
      <div class="hero-layer-spec hero-outline-spec"><img src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_outline_fzg37d.jpg" alt="Architectural city outline" /></div>
      <div class="hero-layer-spec hero-reality-spec"><img src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/hero_city_iglhwn.jpg" alt="Realistic city skyline" /></div>
      <div class="hero-video-overlay-spec"></div>
      <div class="hero-gradient-spec"></div>
      <div class="hero-copy-spec">
        <span class="spec-eyebrow">Urban Plus / Architecture Studio</span>
        <h1 id="hero-title-spec"><span class="spec-outline-title">Imagine the Future</span><span class="spec-reality-title">Build the Reality</span></h1>
        <p>Architecture, interiors and 3D visualization designed with clarity, atmosphere and intent.</p>
        <a class="spec-cta" href="#work">Explore our work <b>↗</b></a>
      </div>
      <div class="spec-scroll"><span>Scroll to reveal</span><b>⌄</b></div>
      <div class="spec-progress"><i></i></div>
    </div>`;

  const sticky = hero.querySelector('.hero-sticky-spec');
  const reality = hero.querySelector('.hero-reality-spec');
  const outlineTitle = hero.querySelector('.spec-outline-title');
  const realityTitle = hero.querySelector('.spec-reality-title');
  const progress = hero.querySelector('.spec-progress i');
  const video = hero.querySelector('.hero-video-spec');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  video.play().catch(() => {});

  function update() {
    const rect = hero.getBoundingClientRect();
    const total = Math.max(1, hero.offsetHeight - innerHeight);
    const p = Math.max(0, Math.min(1, -rect.top / total));
    if (reduce) return;
    const circle = Math.min(150, 8 + p * 142);
    reality.style.clipPath = `circle(${circle}% at 50% 50%)`;
    reality.style.transform = `scale(${1 + p * .15})`;
    outlineTitle.style.transform = `translateY(${p * -18}px)`;
    realityTitle.style.opacity = String(Math.min(1, p * 1.8));
    realityTitle.style.transform = `translateY(${(1-p) * 18}px)`;
    progress.style.transform = `scaleX(${p})`;
    sticky.style.setProperty('--hero-p', p.toFixed(3));
  }
  addEventListener('scroll', () => requestAnimationFrame(update), {passive:true});
  addEventListener('resize', update);
  update();
})();
