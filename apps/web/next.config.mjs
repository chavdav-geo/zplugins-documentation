import { fileURLToPath } from "node:url"

const isGithubActions = process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_ACTIONS === "1"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined
  ? process.env.NEXT_PUBLIC_BASE_PATH
  : isGithubActions
    ? "/zplugins-documentation"
    : ""

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["@workspace/ui"],
  turbopack: {
    root: fileURLToPath(new URL("../../", import.meta.url)),
  },
}

export default nextConfig
