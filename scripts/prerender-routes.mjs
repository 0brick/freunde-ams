import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { pages, redirects, siteUrl, pageTitle } from '../src/pages.ts'

const dist = new URL('../dist/', import.meta.url).pathname
const template = await readFile(join(dist, 'index.html'), 'utf8')

const pageUrl = (path) => siteUrl + (path === '/' ? '/' : `${path}/`)

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function render(page) {
  const url = pageUrl(page.path)
  return template
    .replace(/<title>.*?<\/title>/, `<title>${escape(pageTitle(page))}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${escape(page.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${escape(pageTitle(page))}`)
    .replace(/(<meta property="og:description" content=")[^"]*/, `$1${escape(page.description)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
    .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
}

for (const page of pages) {
  const dir = join(dist, page.path)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), render(page))
}

for (const { from, to } of redirects) {
  const dir = join(dist, from)
  await mkdir(dir, { recursive: true })
  await writeFile(
    join(dir, 'index.html'),
    `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=${to}"><link rel="canonical" href="${pageUrl(to)}"><title>Weiterleitung</title><a href="${to}">Weiter</a>`
  )
}

await writeFile(
  join(dist, '404.html'),
  template.replace(/<link rel="canonical"[^>]*>/, '<meta name="robots" content="noindex" />')
)
await writeFile(join(dist, '.nojekyll'), '')
await writeFile(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map((p) => `  <url><loc>${pageUrl(p.path)}</loc></url>`)
    .join('\n')}\n</urlset>\n`
)
await writeFile(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`)

console.log(`prerendered ${pages.length} routes`)
