/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{html,js}',
		'./components/**/*.{html,js}',
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	//   theme: {
	//     extend: {},
	//   },
	//   plugins: [],
	// }

	theme: {
		extend: {
			// ...
		},
	},
	plugins: [],
};
