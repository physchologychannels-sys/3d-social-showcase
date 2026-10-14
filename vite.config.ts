import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves the site from /3d-social-showcase/; elsewhere it lives at the root.
const base = process.env["GITHUB_PAGES"] === "true" ? "/3d-social-showcase/" : "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
