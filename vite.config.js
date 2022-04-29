import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import pages from 'vite-plugin-pages';
import unocss from 'unocss/vite';

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		},
	},

	plugins: [
		// https://github.com/vitejs/vite/tree/main/packages/plugin-react
		react(),

		// https://github.com/hannoeru/vite-plugin-pages
		pages({
			dirs: 'src/routes',
			routeStyle: 'remix',
		}),

		// https://github.com/unocss/unocss
		unocss(),
	],

	// https://vitest.dev/config
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./src/tests/setup.js'],
	},
});
