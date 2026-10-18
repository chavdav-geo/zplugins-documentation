import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-6xl font-extrabold tracking-tight mb-3">404</h1>
      <p className="text-xl text-muted-foreground mb-6">Página no encontrada</p>
      <Link
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Volver al Inicio
      </Link>
    </div>
  )
}
