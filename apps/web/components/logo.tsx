import { cn } from "@ariadocs/components"

/** The zPlugins mark: a modern Z emblem for Minecraft plugins */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" aria-hidden className={cn("size-6 shrink-0", className)}>
      <rect width="36" height="36" rx="8" className="fill-primary/10 stroke-primary/30" strokeWidth="1.5" />
      <path
        d="M10 11H26L14 25H26"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
    </svg>
  )
}

/** Mark + name, used in the header, sidebar and footer. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-bold tracking-tight text-lg", className)}>
      <LogoMark />
      <span>zPlugins</span>
    </span>
  )
}
