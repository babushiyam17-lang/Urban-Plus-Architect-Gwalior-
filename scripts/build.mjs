import { mkdir, rm, cp, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const dist = new URL('../dist/', import.meta.url)
await rm(dist, { recursive: true, force: true })
await mkdir(new URL('assets/', dist), { recursive: true })
if (existsSync(new URL('../public/', import.meta.url))) {
  await cp(new URL('../public/', import.meta.url), dist, { recursive: true })
}

const baseCss = await readFile(new URL('../src/premium.css', import.meta.url), 'utf8')
const themeCss = `
:root { --bg:#090a09; --white:#f1ede4; --gray400:#9a988f; --gray300:#c8c5bc; --gray600:#5f5d57; --blue:#c9a86a; --purple:#a77b4d; }
html,body { background:#090a09 !important; color:#f1ede4 !important; }
body::selection { background:rgba(201,168,106,.28) !important; }
:focus-visible { outline-color:#c9a86a !important; }
.navbar { background:rgba(9,10,9,var(--nav-alpha)) !important; border-color:rgba(201,168,106,.18) !important; }
.navbar.menu-open { background:rgba(12,13,12,.97) !important; }
.nav-cta { box-shadow:0 0 22px rgba(201,168,106,.14) !important; }
.services { background:linear-gradient(180deg,#0b0c0b,#10120f) !important; }
.work { background:#090a09 !important; }
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
  <title>Urban Plus Architect & Associates | Gwalior</title>
  <meta name="description" content="Urban Plus Architect & Associates — architecture, interiors, planning and 3D visualization in Gwalior, Madhya Pradesh.">
  <meta name="theme-color" content="#090a09">
  <link rel="stylesheet" href="./assets/main.css">
</head>
<body>
  <div id="root"></div>
  <script src="./assets/main.js"></script>
</body>
</html>`

await writeFile(new URL('index.html', dist), html)
console.log('Built premium interactive production site in dist/')
