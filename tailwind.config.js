/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			// Secular: ['Secular One', 'sans-serif'],
			Gopher:['Gopher-black']

		},
		extend: {
			colors: {
				'primary-color': '#305349',
				'secondary-color': '#FCE074',
				'gray-color': '#d9dbe0',
			},
			width: {
				'500': '500px',
				'570': '570px'
			}
		},
	},
	plugins: [],
};