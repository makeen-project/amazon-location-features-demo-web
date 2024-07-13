import { resolve } from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import eslint from "vite-plugin-eslint";
import Inspect from "vite-plugin-inspect";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd());

	return {
		publicDir: env.VITE_PUBLIC_DIR || resolve(__dirname, "./public"),
		plugins: [
			react(),
			svgr(),
			eslint({
				fix: true,
				failOnError: false
			}),
			Inspect({
				build: false,
				outputDir: ".vite-inspect"
			})
		],
		resolve: {
			alias: {
				"@demo/assets": resolve(__dirname, "./src/assets"),
				"@demo/core": resolve(__dirname, "./src/core"),
				"@demo/atomicui": resolve(__dirname, "./src/atomicui"),
				"@demo/hooks": resolve(__dirname, "./src/hooks"),
				"@demo/services": resolve(__dirname, "./src/services"),
				"@demo/stores": resolve(__dirname, "./src/stores"),
				"@demo/types": resolve(__dirname, "./src/types"),
				"@demo/theme": resolve(__dirname, "./src/theme"),
				"@demo/utils": resolve(__dirname, "./src/utils"),
				"@demo/locales": resolve(__dirname, "./src/locales"),
				"./runtimeConfig": "./runtimeConfig.browser"
			}
		},
		build: {
			outDir: "./build",
			sourcemap: false,
			minify: true,
			commonjsOptions: { include: [""] }
		},
		optimizeDeps: {
			disabled: false
		},
		server: {
			port: 3000
		}
	};
});
