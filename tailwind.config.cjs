/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				cardHeader: '0 0 2rem 2rem',
			},
			colors: {
				yellow: '#FFB21E',
				'yellow-white': '#fffbf4',
				blue: '#1125D6',
				'blue-white': '#f3f4fd',
				green: '#00BB8F',
				'green-white': '#f2fcf9',
				red: '#FF5555',
				'red-white': '#fff6f6',
				'dark-navy': '#303B59',
				'light-blue': '#CAC9FF',
				'very-light-blue': '#ECF2FF',
				white: '#FFFFFF',
			},
			gradientColorStops: {
				gradient1: ['#7755FF 0%', '#6943FF 0.01%', '#2F2CE9 100%'],
				gradient2: [
					'#4D21C9 0%',
					'rgba(37, 33, 201, 0) 100%',
					'rgba(37, 33, 201, 0) 100%',
				],
			},
			fontSize: {
				'body-1': '1rem',
				'body-2': '1.125rem',
				'heading-m': '1.5rem',
				'heading-l': '2rem',
				'heading-xl': '3.5rem',
				'heading-xxl': '4.5rem',
			},
			fontFamily: {
				Hanks: ['Hanken Grotesk', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
