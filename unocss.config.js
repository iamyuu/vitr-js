import { defineConfig, presetUno, presetIcons, presetWebFonts, transformerVariantGroup } from 'unocss';

export default defineConfig({
	shortcuts: [
		{
			wrapper: 'container mx-auto px-6',
		},
	],
	rules: [
		[
			/^grid-cols-auto-fill-w-(\d+)$/,
			([, val]) => ({
				'grid-template-columns': `repeat(auto-fill, minmax(${parseInt(val) / 4}rem, 1fr))`,
			}),
		],
	],
	theme: {},
	presets: [
		// https://github.com/unocss/unocss/tree/main/packages/preset-uno
		presetUno(),

		// https://github.com/unocss/unocss/tree/main/packages/preset-icons
		presetIcons(),

		// https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts
		presetWebFonts({
			provider: 'google',
			fonts: {
				sans: ['Open Sans', 'Open Sans:400,600,700'],
			},
		}),
	],
	transformers: [
		// https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group
		transformerVariantGroup(),
	],
});
