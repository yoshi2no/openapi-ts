import { defineConfig } from "tsup";
import path from "path";

export default defineConfig({
	entry: ["./src/index.ts"],
	clean: true,
	format: ["esm", "cjs"],
	dts: false,
	outDir: "./dist",
	banner: {
		// commonjs用ライブラリをESMプロジェクトでbundleする際に生じることのある問題への対策
		js: 'import { createRequire } from "module"; import url from "url"; const require = createRequire(import.meta.url); const __filename = url.fileURLToPath(import.meta.url); const __dirname = url.fileURLToPath(new URL(".", import.meta.url));',
	},
	platform: "node",
});
