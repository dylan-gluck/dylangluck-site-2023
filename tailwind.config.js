/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=light]'],
					primary: '#20cf6f'
				}
			},
			{
				dark: {
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					primary: '#20cf6f',
					'base-100': '#414558',
					'base-200': '#21222c'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
