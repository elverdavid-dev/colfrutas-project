/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT(
	{
		content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		theme: {
			extend: {
				fontFamily: {
					nunito: "'Nunito', sans-serif",
					berkshire: "'Berkshire Swash', cursive",
					kanit: "'Kanit', sans-serif",
					lora:"'Lora', serif;"
				},
				colors: {
					base: "#f6f6f6",
					primary:"#912F72",
					slate:{
						700:"#334155",
						800:"#1e293b"
					},
					emerald:{
						500:"#10b981",
						600:"#059669",
						700:"#047857",
						800:"#065f46"
					},
					sky:{
						100:"#e0f2fe",
						500:"#0ea5e9",
						600:"#0284c7",
					}
					
	
				},
			},
		},
		plugins: [],
	}
)
