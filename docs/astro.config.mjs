// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import { LikeC4VitePlugin } from 'likec4/vite-plugin';

const githubPagesBase = '/26-tavasz-04-community-choice';
const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
	site: 'https://unideb-advanced-software-engineering.github.io',
	base: isDev ? '/' : githubPagesBase,
	integrations: [
		react(),
		starlight({
			title: 'Community Choice',
			description: 'Zamunda Digitális Reneszánsz – közösségi ötletplatform dokumentációja',
			customCss: [
				// Inter: 400, 600, 700, 800 súlyok (Fontsource, auto-subset)
				'@fontsource/inter/400.css',
				'@fontsource/inter/600.css',
				'@fontsource/inter/700.css',
				'@fontsource/inter/800.css',
				// JetBrains Mono: 400 súly
				'@fontsource/jetbrains-mono/400.css',
				// Brand téma (Starlight --sl-* tokenek)
				'./src/styles/theme.css',
			],
			defaultLocale: 'hu',
			locales: {
				root: {
					label: 'Magyar',
					lang: 'hu',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/unideb-advanced-software-engineering/26-tavasz-04-community-choice' }],
			sidebar: [
				{
					label: 'Esettanulmány',
					slug: 'esettanulmany',
				},
				{
					label: 'SRS',
					slug: 'srs',
				},
				{
					label: 'Fogalomtár',
					slug: 'fogalomtar',
				},

				{
					label: 'Architektúra',
					items: [
						{ label: 'Karakterisztikák', slug: 'architektura/karakterisztikak' },
						{ label: 'Szignifikáns követelmények', slug: 'architektura/szignifikans-kovetelmenyek' },
						{ label: 'Stílusválasztás', slug: 'architektura/stilusvalasztas' },
						{ label: 'C4 modell', slug: 'architektura/c4-modell' },
						{ label: 'Implementációs javaslatok', slug: 'architektura/implementacios-javaslatok' },
					],
				},
				{
					label: 'Brand specifikáció',
					slug: 'brand-spec',
				},
				{
					label: 'Architekturális döntések (ADR)',
					autogenerate: { directory: 'adrs' },
				},
			],
		}),
	],
	vite: {
		plugins: [LikeC4VitePlugin({})],
	},
});
