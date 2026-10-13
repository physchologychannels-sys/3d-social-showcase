import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: "/3d-social-showcase/",
  tanstackStart: {
    pages: [{ path: "/" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
    server: { entry: "server" },
  },
});
