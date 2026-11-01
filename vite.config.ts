import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

const base = "./";

export default defineConfig({
  base,
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      router: { basepath: base },
      pages: [
        { path: "/" },
        { path: "/produtos" },
        { path: "/contato" },
        { path: "/faq" },
      ],
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: false,
        crawlLinks: false,
        autoSubfolderIndex: true,
        failOnError: true,
      },
    }),

    viteReact(), 
  ],
});