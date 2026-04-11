const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['selector', '[data-theme="darkmode"]'],
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans],
				body: ['Figtree', ...defaultTheme.fontFamily.sans],
				mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
			},
			animation: {
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
			keyframes: {
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
			},
		},
		screens: {
			xs: '360px',
			...defaultTheme.screens,
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				lightmode: {
					...require('daisyui/src/theming/themes')['[data-theme=corporate]'],
					primary: '#0a8fba',
					'primary-content': '#f6fafb',
					secondary: '#3d7a8a',
					'secondary-content': '#f6fafb',
					accent: '#0dbfaa',
					'accent-content': '#0d1f22',
					neutral: '#2e3944',
					'neutral-content': '#e8eced',
					'base-100': '#f6fafb',
					'base-200': '#eaf1f3',
					'base-300': '#dce6e9',
					'base-content': '#1b2730',
					info: '#5ba8c8',
					success: '#3aaf6e',
					warning: '#e8a930',
					error: '#d94f4f',
				},
				darkmode: {
					...require('daisyui/src/theming/themes')['[data-theme=business]'],
					primary: '#2db8e0',
					'primary-content': '#0e1a20',
					secondary: '#5ba8c8',
					'secondary-content': '#0e1a20',
					accent: '#18d4bc',
					'accent-content': '#0e1a20',
					neutral: '#2a3340',
					'neutral-content': '#c8d0d6',
					'base-100': '#1a1f2b',
					'base-200': '#151a24',
					'base-300': '#10141c',
					'base-content': '#e2e6ea',
					info: '#5ba8c8',
					success: '#3aaf6e',
					warning: '#e8a930',
					error: '#d94f4f',
				},
			},
		],
		base: true,
		styled: true,
		utils: true,
	},
};