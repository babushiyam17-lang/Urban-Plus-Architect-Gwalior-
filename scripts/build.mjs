import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const run = promisify(execFile)
await run('npx', ['vite', 'build'], { stdio: 'inherit' })
console.log('Built Urban Plus React experience with GitHub Pages-safe asset paths and animated 3D project visuals')
