import { mkdir, rm, cp, readFile, writeFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'

const dist = new URL('../dist/', import.meta.url)
await rm(dist, { recursive: true, force: true })
await mkdir(new URL('assets/', dist), { recursive: true })
if (existsSync(new URL('../public/', import.meta.url))) {
  await cp(new URL('../public/', import.meta.url), dist, { recursive: true })
}

const baseCss = await readFile(new URL('../src/premium.css', import.meta.url), 'utf8')
const experienceCss = await readFile(new URL('../src/experience.css', import.meta.url), 'utf8')
const css = baseCss + '\n' + experienceCss
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
  <meta name="theme-color" content="#f5f1e8">
  <link rel="stylesheet" href="./assets/main.css">
</head>
<body>
  <div id="root"></div>
  <script src="./assets/main.js"></script>
</body>
</html>`

await writeFile(new URL('index.html', dist), html)
console.log('Built light cinematic interactive production site in dist/')
