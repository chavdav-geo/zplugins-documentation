import type { NavItem } from "@ariadocs/core"
import type { DocsInstance } from "@ariadocs/mdx"
import { flattenLinks, getSidebar } from "./navigation"
import { docs } from "./source"
import { site } from "./site"

/* Plain-text versions of the site for LLMs: /llms.txt (index) and /llms-full.txt (everything). */

const sources: { base: string; source: DocsInstance }[] = [
  { base: "/docs", source: docs },
]

interface Page {
  title: string
  href: string
  description?: string
  /** The MDX source without frontmatter. Only for MDX pages. */
  body?: string
}

interface Section {
  title: string
  pages: Page[]
}

function resolve(href: string): { source: DocsInstance; slug: string } | undefined {
  for (const { base, source } of sources) {
    if (href === base) return { source, slug: "" }
    if (href.startsWith(`${base}/`)) return { source, slug: href.slice(base.length + 1) }
  }
  return undefined
}

async function toPage(item: NavItem, withBody: boolean): Promise<Page> {
  const mdx = resolve(item.href)
  if (mdx !== undefined) {
    const frontmatter = await mdx.source.getFrontmatter<{ title?: string; description?: string }>({ slug: mdx.slug })
    const body = withBody ? stripFrontmatter(await mdx.source.read({ slug: mdx.slug })) : undefined
    return { title: frontmatter.title ?? item.title, href: item.href, description: frontmatter.description, body }
  }
  return { title: item.title, href: item.href }
}

/** Every page in sidebar order, grouped by sidebar section. */
async function getSections(withBody: boolean): Promise<Section[]> {
  const sidebar = await getSidebar()
  return Promise.all(
    sidebar.map(async (section) => {
      const itemsToFlatten = section.items.length > 0 ? section.items : [section]
      return {
        title: section.title,
        pages: await Promise.all(flattenLinks(itemsToFlatten).map((item) => toPage(item, withBody))),
      }
    })
  )
}

function stripFrontmatter(source: string): string {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").trim()
}

function url(href: string): string {
  return `${site.url}${href}`
}

function header(): string {
  return `# ${site.name}\n\n> ${site.description}`
}

export async function getLlmsTxt(): Promise<string> {
  const sections = await getSections(false)
  const lines = [
    header(),
    `Documentación completa en ${url("/llms-full.txt")}.`,
  ]
  for (const section of sections) {
    lines.push(`## ${section.title}`)
    lines.push(
      section.pages
        .map((page) => `- [${page.title}](${url(page.href)})${page.description ? `: ${page.description}` : ""}`)
        .join("\n")
    )
  }
  return `${lines.join("\n\n")}\n`
}

export async function getLlmsFullTxt(): Promise<string> {
  const sections = await getSections(true)
  const parts = [header()]
  for (const section of sections) {
    for (const page of section.pages) {
      const content = page.body
      if (content === undefined) continue
      const lead = page.description !== undefined ? `\n\n${page.description}` : ""
      parts.push(`---\n\n# ${page.title}\n\nSource: ${url(page.href)}${lead}\n\n${content}`)
    }
  }
  return `${parts.join("\n\n")}\n`
}
