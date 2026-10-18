import fs from "node:fs"
import path from "node:path"
import type { NavItem } from "@ariadocs/core"
import type { DocsInstance } from "@ariadocs/mdx"
import { docs } from "./source"
import { site } from "./site"

/** Prefix every relative href in a tree, e.g. "/intro" → "/docs/intro" ("/" → "/docs"). */
export function withBase(items: NavItem[], base: string): NavItem[] {
  return items.map((item) => ({
    ...item,
    href: item.href === "/" ? base : `${base}${item.href}`,
    items: withBase(item.items, base),
  }))
}

/** Every visible page link in order, folders flattened. */
export function flattenLinks(items: NavItem[]): NavItem[] {
  return items.flatMap((item) => {
    if (!item.nav) return []
    if (item.items.length > 0) {
      // A folder with its own index page lists it first.
      const children = flattenLinks(item.items)
      return children
    }
    return [item]
  })
}

export interface PageLink {
  title: string
  href: string
}

/** Previous and next pages around `href`, in sidebar order. */
export function getNeighbours(items: NavItem[], href: string): { previous?: PageLink; next?: PageLink } {
  const links = flattenLinks(items)
  const index = links.findIndex((link) => link.href === href)
  if (index === -1) return {}
  const pick = (item?: NavItem) => (item === undefined ? undefined : { title: item.title, href: item.href })
  return { previous: pick(links[index - 1]), next: pick(links[index + 1]) }
}

/** GitHub URL of the MDX file behind a slug. */
export function getEditUrl(source: DocsInstance, slug: string): string | undefined {
  const dir = source.config.contentDir
  const normalized = slug === "" ? "index" : slug
  for (const file of [`${normalized}.mdx`, `${normalized}/index.mdx`]) {
    if (fs.existsSync(path.join(/* turbopackIgnore: true */ process.cwd(), dir, file))) {
      return `${site.editBase}/${dir}/${file}`
    }
  }
  return undefined
}

export async function getDocsNavigation(): Promise<NavItem[]> {
  return withBase(await docs.getNavigation(), "/docs")
}

export function section(title: string, href: string, items: NavItem[]): NavItem {
  return { title, href, nav: true, props: {}, items }
}

/** The sidebar for zPlugins Documentation. */
export async function getSidebar(): Promise<NavItem[]> {
  const docsNav = await getDocsNavigation()
  return docsNav
}
