// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://unideb-advanced-software-engineering.github.io',
	base: '/26-tavasz-04-community-choice',
	integrations: [
		starlight({
			title: 'Community Choice',
			description: 'Zamunda Digitális Reneszánsz – közösségi ötletplatform dokumentációja',
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
					label: 'Architektúra',
					items: [
						{ label: 'Karakterisztikák', slug: 'architektura/karakterisztikak' },
						{ label: 'Szignifikáns követelmények', slug: 'architektura/szignifikans-kovetelmenyek' },
						{ label: 'Stílusválasztás', slug: 'architektura/stilusvalasztas' },
					],
				},
				{
					label: 'Architekturális döntések (ADR)',
					autogenerate: { directory: 'adrs' },
				},
			],
		}),
	],
});
