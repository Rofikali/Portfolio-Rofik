// Minimal local-only server for Nuxt's generated GitHub Pages artifact.
// No runtime dependency or SPA fallback: missing pre-rendered files return 404.
import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, join, sep, extname } from 'node:path'

const root = resolve(process.cwd(), '.output/public')
const base = process.env.NUXT_APP_BASE_URL || '/Portfolio-Rofik/'
const port = Number(process.env.PORT || 4173)
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.wasm': 'application/wasm',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain; charset=utf-8'
}

async function tryFile(file) {
  try {
    const info = await stat(file)
    return info.isFile() ? file : null
  } catch {
    return null
  }
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405).end()
    return
  }

  try {
    const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname)
    if (!pathname.startsWith(base) || pathname.includes('\0')) {
      response.writeHead(404).end('Not found')
      return
    }

    const relative = pathname.slice(base.length)
    const full = resolve(root, relative)
    if (full !== root && !full.startsWith(root + sep)) {
      response.writeHead(404).end('Not found')
      return
    }

    const candidates = relative.endsWith('/')
      ? [join(full, 'index.html')]
      : [full, full + '.html', join(full, 'index.html')]

    let file = null
    for (const candidate of candidates) {
      file = await tryFile(candidate)
      if (file) break
    }

    if (!file) {
      response.writeHead(404).end('Not found')
      return
    }

    const bytes = await readFile(file)
    response.writeHead(200, {
      'Content-Type': mime[extname(file).toLowerCase()] ?? 'application/octet-stream',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    })
    response.end(request.method === 'HEAD' ? undefined : bytes)
  } catch (error) {
    console.error('Static test server request error:', error)
    response.writeHead(500).end('Internal error')
  }
})

server.listen(port, '127.0.0.1', () => {
  console.log(`Serving generated Pages artifact ${root} under ${base} at localhost:${port}`)
})
