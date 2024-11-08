/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
			"2xl": "1536px",
			"3xl": "1920px",
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				primaryClr: {
					DEFAULT: "rgba(36, 238, 137, 1)",
					10: "rgba(36, 238, 137, 0.1)",
					20: "rgba(36, 238, 137, 0.2)",
					30: "rgba(36, 238, 137, 0.3)",
					40: "rgba(36, 238, 137, 0.4)",
					50: "rgba(36, 238, 137, 0.5)",
					60: "rgba(36, 238, 137, 0.6)",
					70: "rgba(36, 238, 137, 0.7)",
					80: "rgba(36, 238, 137, 0.8)",
					90: "rgba(36, 238, 137, 0.9)",
				},
				secondaryClr: {
					DEFAULT: "rgba(255, 152, 32, 1)",
					10: "rgba(255, 152, 32, 0.1)",
					20: "rgba(255, 152, 32, 0.2)",
					30: "rgba(255, 152, 32, 0.3)",
					40: "rgba(255, 152, 32, 0.4)",
					50: "rgba(255, 152, 32, 0.5)",
					60: "rgba(255, 152, 32, 0.6)",
					70: "rgba(255, 152, 32, 0.7)",
					80: "rgba(255, 152, 32, 0.8)",
					90: "rgba(255, 152, 32, 0.9)",
				},
				bgPrimaryClr: {
					DEFAULT: "rgba(30, 33, 33, 1)",
					10: "rgba(30, 33, 33, 0.1)",
					20: "rgba(30, 33, 33, 0.2)",
					30: "rgba(30, 33, 33, 0.3)",
					40: "rgba(30, 33, 33, 0.4)",
					50: "rgba(30, 33, 33, 0.5)",
					60: "rgba(30, 33, 33, 0.6)",
					70: "rgba(30, 33, 33, 0.7)",
					80: "rgba(30, 33, 33, 0.8)",
					90: "rgba(30, 33, 33, 0.9)",
				},
				bgSecondaryClr: {
					DEFAULT: "rgba(50, 55, 56, 1)",
					10: "rgba(50, 55, 56, 0.1)",
					20: "rgba(50, 55, 56, 0.2)",
					30: "rgba(50, 55, 56, 0.3)",
					40: "rgba(50, 55, 56, 0.4)",
					50: "rgba(50, 55, 56, 0.5)",
					60: "rgba(50, 55, 56, 0.6)",
					70: "rgba(50, 55, 56, 0.7)",
					80: "rgba(50, 55, 56, 0.8)",
					90: "rgba(50, 55, 56, 0.9)",
				},
				bgGray: {
					DEFAULT: "rgba(78, 79, 90, 1)",
					10: "rgba(78, 79, 90, 0.1)",
					20: "rgba(78, 79, 90, 0.2)",
					30: "rgba(78, 79, 90, 0.3)",
					40: "rgba(78, 79, 90, 0.4)",
					50: "rgba(78, 79, 90, 0.5)",
					60: "rgba(78, 79, 90, 0.6)",
					70: "rgba(78, 79, 90, 0.7)",
					80: "rgba(78, 79, 90, 0.8)",
					90: "rgba(78, 79, 90, 0.9)",
				},
				iconClr: {
					DEFAULT: "rgba(179, 190, 193, 1)",
					10: "rgba(179, 190, 193, 0.1)",
					20: "rgba(179, 190, 193, 0.2)",
					30: "rgba(179, 190, 193, 0.3)",
					40: "rgba(179, 190, 193, 0.4)",
					50: "rgba(179, 190, 193, 0.5)",
					60: "rgba(179, 190, 193, 0.6)",
					70: "rgba(179, 190, 193, 0.7)",
					80: "rgba(179, 190, 193, 0.8)",
					90: "rgba(179, 190, 193, 0.9)",
				},
				borderStrokeClr: {
					DEFAULT: "rgba(58, 65, 66, 1)",
					10: "rgba(58, 65, 66, 0.1)",
					20: "rgba(58, 65, 66, 0.2)",
					30: "rgba(58, 65, 66, 0.3)",
					40: "rgba(58, 65, 66, 0.4)",
					50: "rgba(58, 65, 66, 0.5)",
					60: "rgba(58, 65, 66, 0.6)",
					70: "rgba(58, 65, 66, 0.7)",
					80: "rgba(58, 65, 66, 0.8)",
					90: "rgba(58, 65, 66, 0.9)",
				},
				redClr: {
					DEFAULT: "rgba(252, 60, 60, 1)",
					10: "rgba(252, 60, 60, 0.1)",
					20: "rgba(252, 60, 60, 0.2)",
					30: "rgba(252, 60, 60, 0.3)",
					40: "rgba(252, 60, 60, 0.4)",
					50: "rgba(252, 60, 60, 0.5)",
					60: "rgba(252, 60, 60, 0.6)",
					70: "rgba(252, 60, 60, 0.7)",
					80: "rgba(252, 60, 60, 0.8)",
					90: "rgba(252, 60, 60, 0.9)",
				},
				greenClr: {
					DEFAULT: "rgba(14, 176, 94, 1)",
					10: "rgba(14, 176, 94, 0.1)",
					20: "rgba(14, 176, 94, 0.2)",
					30: "rgba(14, 176, 94, 0.3)",
					40: "rgba(14, 176, 94, 0.4)",
					50: "rgba(14, 176, 94, 0.5)",
					60: "rgba(14, 176, 94, 0.6)",
					70: "rgba(14, 176, 94, 0.7)",
					80: "rgba(14, 176, 94, 0.8)",
					90: "rgba(14, 176, 94, 0.9)",
				},
				whiteClr: {
					DEFAULT: "rgba(255, 255, 255, 1)",
					10: "rgba(255, 255, 255, 0.1)",
					20: "rgba(255, 255, 255, 0.2)",
					30: "rgba(255, 255, 255, 0.3)",
					40: "rgba(255, 255, 255, 0.4)",
					50: "rgba(255, 255, 255, 0.5)",
					60: "rgba(255, 255, 255, 0.6)",
					70: "rgba(255, 255, 255, 0.7)",
					80: "rgba(255, 255, 255, 0.8)",
					90: "rgba(255, 255, 255, 0.9)",
				},
			},
		},
	},
	plugins: [],
};
