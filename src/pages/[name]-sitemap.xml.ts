export const prerender = true

const STAGING = "https://wordpress-1301750-6506622.cloudwaysapps.com"
const SITE = "https://usplayercheck.com"

export async function getStaticPaths() {
  const res = await fetch(`${STAGING}/sitemap_index.xml`, {
    headers: { "User-Agent": "Mozilla/5.0 AstroBuild" },
  })
  const xml = await res.text()

  const matches = [...xml.matchAll(/<loc>[^<]*\/([a-z0-9-]+)-sitemap\.xml<\/loc>/gi)]
  const names = [...new Set(matches.map(m => m[1]))]

  return names.map(name => ({ params: { name } }))
}

export async function GET({ params }: { params: { name: string } }) {
  const { name } = params
  try {
    const res = await fetch(`${STAGING}/${name}-sitemap.xml`, {
      headers: { "User-Agent": "Mozilla/5.0 AstroBuild" },
    })
    let xml = await res.text()
    xml = xml.replaceAll(STAGING, SITE)

    return new Response(xml, {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    })
  } catch (e) {
    console.error(`[sitemap] Failed to fetch ${name}-sitemap.xml:`, e)
    return new Response("<error/>", { status: 500 })
  }
}