import { mkdir, rm, cp, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const dist = new URL('../dist/', import.meta.url)
await rm(dist, { recursive: true, force: true })
await mkdir(new URL('assets/', dist), { recursive: true })
if (existsSync(new URL('../public/', import.meta.url))) {
  await cp(new URL('../public/', import.meta.url), dist, { recursive: true })
}

const baseCss = await readFile(new URL('../src/styles.css', import.meta.url), 'utf8')
const themeCss = `
/* Urban Plus professional production theme */
:root {
  --bg: #11110f;
  --white: #f6f3ec;
  --gray400: #aaa79f;
  --gray300: #d7d2c8;
  --gray600: #6f6a61;
  --blue: #c9a86a;
  --purple: #a77b4d;
}
html, body { background: #11110f !important; color: #f6f3ec !important; }
body::selection { background: rgba(201,168,106,.28) !important; }
:focus-visible { outline-color: #c9a86a !important; }
.navbar { background: rgba(17,17,15,var(--nav-alpha)) !important; border-color: rgba(201,168,106,.22) !important; }
.navbar.menu-open { background: rgba(17,17,15,.95) !important; }
.brand-mark { color: #17130d !important; background: linear-gradient(135deg,#ead9ae 0%,#c9a86a 52%,#8f683f 100%) !important; box-shadow: 0 0 26px rgba(201,168,106,.22) !important; }
.nav-links a span { background: linear-gradient(90deg,#c9a86a,#ead9ae) !important; }
.hero-sticky { background: #11110f !important; }
.hero-shade { background: radial-gradient(circle at 50% 45%, transparent 0%, rgba(17,17,15,.28) 45%, rgba(17,17,15,.88) 100%), linear-gradient(180deg, rgba(17,17,15,.32), rgba(17,17,15,.14) 40%, rgba(17,17,15,.94)) !important; }
.hero-sticky::after { background: linear-gradient(90deg, rgba(17,17,15,.82), transparent 48%, rgba(17,17,15,.22)), linear-gradient(180deg, rgba(17,17,15,.38), transparent 35%) !important; }
.hero-reality-title { text-shadow: 0 0 45px rgba(201,168,106,.18) !important; }
.hero-progress span { background: linear-gradient(90deg,#c9a86a,#ead9ae) !important; box-shadow: 0 0 18px rgba(201,168,106,.55) !important; }
.clients, .work { background: #11110f !important; }
.clients h2 em, .logo-icon, .service-card a span { color: #c9a86a !important; }
.ticker-mask::before { background: linear-gradient(90deg,#11110f,transparent) !important; }
.ticker-mask::after { background: linear-gradient(-90deg,#11110f,transparent) !important; }
.services { background: linear-gradient(180deg,#11110f,#191815) !important; }
.service-card { background: rgba(255,255,255,.045) !important; border-color: rgba(201,168,106,.16) !important; }
.service-card:hover { background: rgba(255,255,255,.07) !important; border-color: rgba(201,168,106,.34) !important; }
.service-card::before { background: radial-gradient(circle,rgba(201,168,106,.20),transparent 70%) !important; }
.service-card:nth-child(2)::before,.service-card:nth-child(4)::before { background: radial-gradient(circle,rgba(167,123,77,.22),transparent 70%) !important; }
.corner-icon { color: #c9a86a !important; }
.service-card:nth-child(2) .corner-icon,.service-card:nth-child(4) .corner-icon { color: #a77b4d !important; }
.work-item { background: #191815 !important; border-color: rgba(201,168,106,.16) !important; }
.work-item.active { border-color: rgba(201,168,106,.38) !important; }
.work-overlay { background: linear-gradient(180deg,rgba(17,17,15,.04),rgba(17,17,15,.20) 40%,rgba(17,17,15,.96)) !important; }
.nav-cta, .pill-button { box-shadow: 0 0 22px rgba(201,168,106,.16) !important; }
.nav-cta:hover, .pill-button:hover { box-shadow: 0 0 30px rgba(201,168,106,.26) !important; }
.text-link { border-bottom-color: rgba(201,168,106,.38) !important; }
.tiny-pill { border-color: rgba(201,168,106,.25) !important; }
`
const css = baseCss + themeCss
const js = await readFile(new URL('./site.js', import.meta.url), 'utf8')
await writeFile(new URL('assets/main.css', dist), css)
await writeFile(new URL('assets/main.js', dist), js)

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Urban Plus Architect | Architecture Studio in Gwalior</title>
  <meta name="description" content="Urban Plus Architect is a Gwalior-based architecture, interiors, and 3D visualization studio.">
  <meta name="theme-color" content="#11110e">
  <link rel="stylesheet" href="./assets/main.css">
</head>
<body>
  <div id="root"></div>
  <script src="./assets/main.js"></script>
</body>
</html>`

await writeFile(new URL('index.html', dist), html)
console.log('Built reliable static production site in dist/')
