import { defineConfig } from "vite";
import { resolve } from "path";
import { sync } from "glob";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [],
  build: {
    rollupOptions: {
      plugins: [dts()],
      input: sync(resolve(__dirname, "lib/**/*.ts"), {
        ignore: "**/*.stories.ts",
      }),
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: "lib",
          entryFileNames: `[name].js`,
          chunkFileNames: `[name].js`,
          assetFileNames: `[name].[ext]`,
        },
      ],
      preserveEntrySignatures: "strict",
    },
  },
});
