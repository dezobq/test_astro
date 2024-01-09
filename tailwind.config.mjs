/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#3490dc',
				'secondary': '#ffed4a',
				'accent': '#8e44ad',
				'dark': '#252A34',
				'light': '#EAEAEA'
			}
		},
		fontFamily: {
			sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
			serif: ['Merriweather', 'serif']
		}
	},
	plugins: [],
}
