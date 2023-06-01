/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Rubik"', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/theming/themes')['[data-theme=light]'],
					primary: '#20cf6f'
				}
			},
			{
				dark: {
					...require('daisyui/src/theming/themes')['[data-theme=dark]'],
					primary: '#20cf6f',
					'base-100': '#414558',
					'base-200': '#21222c'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
