export const prerender = true

const STAGING = "https://wordpress-1301750-6506622.cloudwaysapps.com"
const SITE = "https://usplayercheck.com"

export async function GET() {
  try {
    const res = await fetch(`${STAGING}/sitemap_index.xml`, {
      headers: { "User-Agent": "Mozilla/5.0 AstroBuild" },
    })
    let xml = await res.text()
    xml = xml.replaceAll(STAGING, SITE)

    return new Response(xml, {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    })
  } catch (e) {
    console.error("[sitemap] Failed to fetch sitemap_index.xml:", e)
    return new Response("<error/>", { status: 500 })
  }
}