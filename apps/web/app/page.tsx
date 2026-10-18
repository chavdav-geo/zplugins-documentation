import Link from "next/link"
import { Box, Trophy, ArrowRight, Mail, ExternalLink, Flame, Shield, Layers, Sparkles, MessageSquare } from "lucide-react"
import { BuiltByBitIcon, DiscordIcon } from "@/components/icons"
import { Logo } from "@/components/logo"
import { SearchButton } from "@/components/search"
import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/lib/site"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
          <div className="flex items-center gap-8">
            <Link href="/" aria-label={`${site.name} home`} className="flex items-center">
              <Logo />
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
              <Link href="/docs" className="transition-colors hover:text-foreground">
                Documentación
              </Link>
              <Link href="/docs/zvoidchest" className="transition-colors hover:text-foreground">
                zVoidChest
              </Link>
              <Link href="/docs/ajleaderboards" className="transition-colors hover:text-foreground">
                ajLeaderboards
              </Link>
              <a
                href={site.builtbybit}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <BuiltByBitIcon className="size-4" />
                <span>BuiltByBit</span>
              </a>
              <a
                href={site.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <DiscordIcon className="size-4" />
                <span>Discord</span>
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            <SearchButton className="hidden w-48 sm:flex" />
            <SearchButton compact className="sm:hidden" />
            <ThemeToggle className="hidden sm:flex" />
            <Link
              href="/docs"
              className="inline-flex h-9 items-center rounded-lg bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Comenzar
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative overflow-hidden border-b py-20 sm:py-28">
          <div
            aria-hidden
            className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_10%,black,transparent)] opacity-40"
          />
          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3.5 py-1 text-xs font-medium text-muted-foreground backdrop-blur mb-6">
              <Sparkles className="size-3.5 text-primary" />
              <span>Plugins y Configuraciones Profesionales para Minecraft</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl sm:leading-[1.1]">
              Documentación Oficial de <span className="text-primary">zPlugins</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Guías completas de instalación, configuración avanzada, rendimiento y mecánicas para servidores de Minecraft. Soporte directo, recursos y optimización para tu red.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/docs"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                <span>Explorar Documentación</span>
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={site.builtbybit}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <BuiltByBitIcon className="size-4" />
                <span>Tienda en BuiltByBit</span>
                <ExternalLink className="size-3.5 text-muted-foreground" />
              </a>
              <a
                href={site.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <DiscordIcon className="size-4" />
                <span>Comunidad en Discord</span>
                <ExternalLink className="size-3.5 text-muted-foreground" />
              </a>
            </div>
          </div>
        </section>

        {/* Featured Documentation Cards */}
        <section className="border-b py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mb-12 text-center sm:text-left">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Nuestros Recursos & Documentación
              </h2>
              <p className="mt-2 text-muted-foreground">
                Selecciona una de las secciones para acceder a guías detalladas, archivos y configuraciones.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* zVoidChest Card */}
              <div className="group relative flex flex-col justify-between rounded-2xl border bg-card p-7 transition-all hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Box className="size-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
                      Plugin
                    </span>
                    <span className="text-xs text-muted-foreground">Minecraft 1.18 - 1.21+</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">zVoidChest</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    La solución definitiva de VoidChest y Chunk Collector para SkyBlock, Survival y Factions. Cuenta con Auto-Sell (ShopGUI+ y EconomyShopGUI), Auto-Smelt, Auto-Compress, sistema de gasolina, enlaces a tolvas, hologramas nativos 1.21+ (TextDisplay) y soporte SQLite/MySQL.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">Auto-Sell</span>
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">Chunk Collector</span>
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">Fuel System</span>
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">Hologramas 3D</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t">
                  <Link
                    href="/docs/zvoidchest"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:underline"
                  >
                    <span>Ver documentación de zVoidChest</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* ajLeaderboards Card */}
              <div className="group relative flex flex-col justify-between rounded-2xl border bg-card p-7 transition-all hover:border-primary/50 hover:shadow-lg">
                <div>
                  <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                    <Trophy className="size-6" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-amber-500/15 px-2 py-0.5 text-xs font-semibold text-amber-500">
                      Configuración & Guía
                    </span>
                    <span className="text-xs text-muted-foreground">PlaceholderAPI & Hologramas</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">ajLeaderboards Config</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Guía técnica y optimización completa para ajLeaderboards. Configuración detallada de actualización de estadísticas (`stat-refresh`), permisos de no actualización, integración con hologramas (FancyHolograms, DecentHolograms), placeholders comunes y bases de datos.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-muted-foreground">
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">Tops Diarios / Semanales</span>
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">FancyHolograms</span>
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">Anti-Lag Tuning</span>
                    <span className="rounded-md border bg-muted/40 px-2.5 py-1">Placeholders</span>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t">
                  <Link
                    href="/docs/ajleaderboards"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:underline"
                  >
                    <span>Ver configuración de ajLeaderboards</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Support Section */}
        <section className="border-b py-16 sm:py-20 bg-muted/30">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Soporte y Contacto
              </h2>
              <p className="mt-2 text-muted-foreground">
                ¿Necesitas asistencia técnica o una configuración personalizada para tu servidor? Estamos a tu disposición.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {/* Tech Support */}
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Soporte Técnico</h3>
                    <p className="text-xs text-muted-foreground">Para dudas, bugs o asistencia con plugins</p>
                  </div>
                </div>
                <div className="mt-5 rounded-lg border bg-muted/40 p-3.5">
                  <span className="text-xs text-muted-foreground block mb-1">Correo de soporte:</span>
                  <a
                    href={`mailto:${site.supportEmail}`}
                    className="font-mono text-sm font-medium text-foreground hover:underline"
                  >
                    {site.supportEmail}
                  </a>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  También puedes abrir un ticket de soporte directamente en nuestro servidor de Discord.
                </p>
              </div>

              {/* Custom Configs & Business */}
              <div className="rounded-xl border bg-background p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">Negocios & Configuraciones</h3>
                    <p className="text-xs text-muted-foreground">Proyectos personalizados y alianzas</p>
                  </div>
                </div>
                <div className="mt-5 rounded-lg border bg-muted/40 p-3.5">
                  <span className="text-xs text-muted-foreground block mb-1">Correo de contacto comercial:</span>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="font-mono text-sm font-medium text-foreground hover:underline"
                  >
                    {site.contactEmail}
                  </a>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Configuraciones a medida, setups completos y desarrollo exclusivo para comunidades.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <Logo />
            <span className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} zPlugins. Todos los derechos reservados.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={site.builtbybit}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BuiltByBit"
              className="inline-flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <BuiltByBitIcon className="size-4" />
            </a>
            <a
              href={site.discord}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="inline-flex size-9 items-center justify-center rounded-md border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <DiscordIcon className="size-4" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  )
}
