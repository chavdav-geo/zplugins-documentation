import type { NavItem } from "@ariadocs/core"
import { getSidebar } from "./navigation"

export interface SearchEntry {
  title: string
  href: string
  section: string
  /** Parent folder or group. */
  group?: string
  badge?: string
  keywords?: string
}

function collect(items: NavItem[], section: string, group?: string): SearchEntry[] {
  return items.flatMap((item) => {
    if (!item.nav) return []
    if (item.items.length > 0) return collect(item.items, section, item.title)
    return [{ title: item.title, href: item.href, section, group }]
  })
}

/** Built at build time and handed to the client search dialog. */
export async function getSearchIndex(): Promise<SearchEntry[]> {
  const sidebar = await getSidebar()
  return collect(sidebar, "Documentación")
}
