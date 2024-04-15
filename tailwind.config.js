/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: { notoSans: "'Noto Sans', sans-serif" },
		},
	},
	plugins: [],
};
