import { d } from 'svelte-highlight/languages';
const defaultTheme = require('tailwindcss/defaultTheme')
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['selector', '[data-theme=" darkmode"]'],
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans],
				body: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
			},
			animation:{
				scroll:
				'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
			},
			keyframes:{
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))'
					}
				}
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
			},
		},
		screens: {
			'xs': '360px',
			...defaultTheme.screens
		}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				darkmode: {
					...require('daisyui/src/theming/themes')['[data-theme=business]'],
					primary: '#3db8e5',
					secondary: '#2a9d8f',
					accent: '#e9a84c',
					'base-100': '#161b22',
					'base-200': '#1c2129',
					'base-300': '#242b35',
					'base-content': '#e2e6ea',
					info: '#c8cdd3',
					'neutral': '#2d333b',
					'neutral-content': '#adbac7',
				},
				lightmode: {
					...require('daisyui/src/theming/themes')['[data-theme=corporate]'],
					primary: '#0e7490',
					secondary: '#2a9d8f',
					accent: '#d97706',
					'base-100': '#fafbfc',
					'base-200': '#f0f2f5',
					'base-300': '#e4e7eb',
					'base-content': '#1c2129',
					info: '#c8cdd3',
					'neutral': '#e4e7eb',
					'neutral-content': '#4a5568',
				}
			}
		],
		base: true,
		styled: true,
		utils: true
	}
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}