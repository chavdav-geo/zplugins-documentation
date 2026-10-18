import type { ReactNode } from "react"
import Link from "next/link"
import { CodeBlock, CopyButton } from "@ariadocs/components"
import { BuiltByBitIcon, DiscordIcon } from "@/components/icons"
import { Logo } from "@/components/logo"
import { SearchButton } from "@/components/search"
import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/lib/site"

const zvoidchestConfigExample = `# plugins/zVoidChests/config.yml
general:
  prefix: "&#00E5FF&l[zVoidChests] &r"
  language: "es_ES"
  shop-plugin: "economyshopgui" # o "shopgui+"
  auto-save-interval: 300
  default-max-chests: 5

fuel:
  enabled: true
  initial-free-hours: 2
  cost-per-hour: 1000.0

auto-sell:
  interval: 5
  sell-particles: true

collector:
  instant-collection: true
  vacuum-particles: true`

const ajlbHologramExample = `# plugins/FancyHolograms/holograms.yml
top_kills:
  location:
    world: world
    x: 100.5
    y: 72.0
    z: -45.5
  text:
    - "<gradient:#FF007A:#7928CA><bold>⚔️ TOP ASESINATOS ⚔️</bold></gradient>"
    - "<gray>Actualizado en tiempo real</gray>"
    - ""
    - "<gold>#1</gold> <yellow>%ajlb_lb_statistic_player_kills_1_alltime_name%</yellow> - <green>%ajlb_lb_statistic_player_kills_1_alltime_value% Kills</green>"
    - "<gray>#2</gray> <white>%ajlb_lb_statistic_player_kills_2_alltime_name%</white> - <green>%ajlb_lb_statistic_player_kills_2_alltime_value% Kills</green>"
    - "<red>#3</red> <white>%ajlb_lb_statistic_player_kills_3_alltime_name%</white> - <green>%ajlb_lb_statistic_player_kills_3_alltime_value% Kills</green>"`

const docsLinks = [
  { name: "zVoidChest - Visión General", href: "/docs/zvoidchest" },
  { name: "Comandos & Permisos", href: "/docs/zvoidchest/commands-and-permissions" },
  { name: "ajLeaderboards - Configuración", href: "/docs/ajleaderboards" },
  { name: "Hologramas & Placeholders", href: "/docs/ajleaderboards/holograms" },
]

export default function HomePage() {
  return (
    <>
      <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5 sm:px-6">
          <Link href="/" aria-label={`${site.name} home`} className="flex text-[17px]">
            <Logo />
          </Link>
          <nav className="text-muted-foreground hidden items-center gap-6 text-sm md:flex">
            <Link href="/docs" className="hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/docs/zvoidchest" className="hover:text-foreground transition-colors">
              zVoidChest
            </Link>
            <Link href="/docs/ajleaderboards" className="hover:text-foreground transition-colors">
              ajLeaderboards
            </Link>
            <a
              href={site.builtbybit}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              BuiltByBit
            </a>
            <a
              href={site.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Discord
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <SearchButton className="hidden w-52 sm:flex" />
            <SearchButton compact className="sm:hidden" />
            <ThemeToggle className="hidden sm:flex" />
            <Link
              href="/docs"
              className="bg-foreground text-background inline-flex h-9 items-center rounded-lg px-3.5 text-sm font-medium transition-opacity hover:opacity-90"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b">
          <div
            aria-hidden
            className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-5 pt-24 pb-24 text-center sm:pt-32 sm:pb-28">
            <h1 className="text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.04em] text-balance sm:text-7xl">
              Documentación oficial de zPlugins
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-balance sm:text-xl">
              Plugins y configuraciones profesionales para servidores de Minecraft. Alto rendimiento, guías de instalación paso a paso y optimización.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/docs"
                className="bg-foreground text-nowrap text-background inline-flex h-11 w-full items-center justify-center rounded-lg px-6 text-[15px] font-medium transition-opacity hover:opacity-90 sm:w-auto"
              >
                Ver Documentación
              </Link>
              <a
                href={site.builtbybit}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background text-nowrap hover:bg-muted inline-flex h-11 w-full items-center justify-center rounded-lg border px-6 text-[15px] font-medium transition-colors sm:w-auto"
              >
                Tienda BuiltByBit
              </a>
              <div className="bg-background text-nowrap text-muted-foreground flex h-11 w-full items-center gap-2 rounded-lg border pr-1 pl-4 font-mono text-[13px] sm:w-auto">
                <span className="select-none" aria-hidden>
                  ~
                </span>
                <span className="text-foreground min-w-0 flex-1 truncate text-left">
                  /vc give &lt;player&gt; 1 1
                </span>
                <CopyButton value="/vc give {player} 1 1" />
              </div>
            </div>
          </div>
        </section>

        <Showcase
          label="zVoidChest"
          title="VoidChest & Chunk Collector Inteligente"
          text="Auto-Sell automático integrado con ShopGUI+ o precios internos. Soporta fundición y compresión de minerales, combustible por horas y hologramas nativos TextDisplay."
          href="/docs/zvoidchest"
          source={
            <CodeBlock
              code={zvoidchestConfigExample}
              language="yaml"
              title="plugins/zVoidChests/config.yml"
              className="rounded-none border-0"
            />
          }
          result={
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div className="font-semibold text-base sm:text-lg">⚡ Tier III VoidChest (ÉPICO)</div>
                <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500">Activo</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border p-3 bg-muted/30">
                  <div className="text-muted-foreground text-xs">Multiplicador</div>
                  <div className="text-lg font-bold">1.5x</div>
                </div>
                <div className="rounded-lg border p-3 bg-muted/30">
                  <div className="text-muted-foreground text-xs">Radio</div>
                  <div className="text-lg font-bold">3x3 Chunks</div>
                </div>
                <div className="rounded-lg border p-3 bg-muted/30">
                  <div className="text-muted-foreground text-xs">Auto-Smelt</div>
                  <div className="text-lg font-bold text-emerald-500">Habilitado</div>
                </div>
                <div className="rounded-lg border p-3 bg-muted/30">
                  <div className="text-muted-foreground text-xs">Auto-Compress</div>
                  <div className="text-lg font-bold text-emerald-500">Habilitado</div>
                </div>
              </div>
              <div className="rounded-lg border p-3 text-xs text-muted-foreground bg-muted/20">
                ⛽ Gasolina restante: <span className="text-foreground font-medium">14 horas 32 min</span>
              </div>
            </div>
          }
        />

        <Showcase
          label="ajLeaderboards"
          title="Tops Flotantes con Hologramas 3D"
          text="Conecta tus tablas de clasificación con FancyHolograms y PlaceholderAPI. Muestra rankings en tiempo real de asesinatos, balance de dinero y tiempo jugado con cero lag."
          href="/docs/ajleaderboards"
          source={
            <CodeBlock
              code={ajlbHologramExample}
              language="yaml"
              title="plugins/FancyHolograms/holograms.yml"
              className="rounded-none border-0"
            />
          }
          result={
            <div className="p-6 sm:p-8 flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-lg font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                ⚔️ TOP ASESINATOS ⚔️
              </div>
              <div className="text-xs text-muted-foreground mb-2">Actualizado en tiempo real</div>
              <div className="w-full max-w-xs space-y-1.5 text-sm font-mono">
                <div className="flex justify-between rounded border bg-muted/30 px-3 py-1.5">
                  <span className="text-amber-400 font-bold">#1 ChavDav</span>
                  <span className="text-emerald-500 font-semibold">1,420 Kills</span>
                </div>
                <div className="flex justify-between rounded border bg-muted/30 px-3 py-1.5">
                  <span className="text-slate-300 font-bold">#2 AlexGamer</span>
                  <span className="text-emerald-500 font-semibold">982 Kills</span>
                </div>
                <div className="flex justify-between rounded border bg-muted/30 px-3 py-1.5">
                  <span className="text-amber-600 font-bold">#3 ProPlayer</span>
                  <span className="text-emerald-500 font-semibold">745 Kills</span>
                </div>
              </div>
              <div className="text-xs text-cyan-400 pt-2 font-mono">
                Tu posición: #12 (412 Kills)
              </div>
            </div>
          }
        />

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            Explora las secciones de documentación
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {docsLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:bg-muted/50 flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-colors"
              >
                {item.name}
                <span className="text-muted-foreground" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 text-sm sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="text-muted-foreground mt-2">
              zPlugins © {new Date().getFullYear()} · ChavDav
            </p>
          </div>
          <FooterColumn
            title="Documentación"
            links={[
              { label: "Introducción", href: "/docs" },
              { label: "zVoidChest", href: "/docs/zvoidchest" },
              { label: "ajLeaderboards", href: "/docs/ajleaderboards" },
              { label: "Preguntas Frecuentes", href: "/docs/zvoidchest/faq" },
            ]}
          />
          <FooterColumn
            title="Contacto & Soporte"
            links={[
              { label: `Soporte: ${site.supportEmail}`, href: `mailto:${site.supportEmail}` },
              { label: `Negocios: ${site.contactEmail}`, href: `mailto:${site.contactEmail}` },
            ]}
          />
          <FooterColumn
            title="Comunidad & Enlaces"
            links={[
              { label: "BuiltByBit", href: site.builtbybit },
              { label: "Discord", href: site.discord },
            ]}
          />
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between border-t px-5 py-6 sm:px-6">
          <div className="flex items-center gap-2">
            <a
              href={site.builtbybit}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BuiltByBit"
              className="text-muted-foreground hover:text-foreground inline-flex size-8 items-center justify-center transition-colors"
            >
              <BuiltByBitIcon className="size-4" />
            </a>
            <a
              href={site.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-muted-foreground hover:text-foreground inline-flex size-8 items-center justify-center transition-colors"
            >
              <DiscordIcon className="size-4" />
            </a>
          </div>
          <ThemeToggle />
        </div>
      </footer>
    </>
  )
}

/** A feature shown as real input next to the real output it produces. */
function Showcase({
  label,
  title,
  text,
  href,
  source,
  result,
}: {
  label: string
  title: string
  text: string
  href: string
  source: ReactNode
  result: ReactNode
}) {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div className="max-w-xl">
            <p className="text-muted-foreground font-mono text-sm">{label}</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-muted-foreground mt-3 text-lg leading-relaxed">
              {text}
            </p>
          </div>
          <Link
            href={href}
            className="text-sm font-medium underline-offset-4 hover:underline"
          >
            Ver documentación →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-2xl border lg:grid-cols-2">
          <div className="bg-[var(--aria-code-background)] min-w-0 border-b lg:border-r lg:border-b-0">
            {source}
          </div>
          <div className="bg-background min-w-0">
            <p className="text-muted-foreground border-b px-6 py-2.5 text-xs sm:px-8">
              Resultado
            </p>
            {result}
          </div>
        </div>
      </div>
    </section>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <p className="font-medium">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("http") || link.href.startsWith("mailto:") ? (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
