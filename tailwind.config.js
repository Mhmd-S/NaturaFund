/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	colors: {
		'brand': {
			'50': '#EBEBFF',
			'100': '#D2D2FE',
			'200': '#A6A4FE',
			'300': '#7E7CFD',
			'400': '#524FFD',
			'500': '#2522FC',
			'600': '#0703E2',
			'700': '#0502AB',
			'800': '#03026F',
			'900': '#020137',
			'950': '#01001E',
		},
	},
	theme: {
		extend: {
			gridTemplateRows: {
				settingsLargeScreen: 'repeat(6, 40%)',
				settingsSmallScreen: 'repeat(6, 25%)',
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				'8bit': ['"Press Start 2P"', 'cursive'],
			},
			keyframes: {
				wave: {
					'0%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14.0deg)' },
					'20%': { transform: 'rotate(-8.0deg)' },
					'30%': { transform: 'rotate(14.0deg)' },
					'40%': { transform: 'rotate(-4.0deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
					'60%': { transform: 'rotate(0.0deg)' },
					'100%': { transform: 'rotate(0.0deg)' },
				},
				fadeIn: {
					'0%': { transform: 'scale(0.9)' },
					'100%': { transform: 'scale(1)' },
				},
				likeAndDislike: {
					'0%': { transform: 'translateY(200%)', opacity: '0' },
					'20%': { transform: 'translateY(0%)', opacity: '1' },
					'40%': { transform: 'translateY(0%)', opacity: '1' },
					'60%': { transform: 'translateY(0%)', opacity: '1' },
					'80%': { transform: 'translateY(0%)', opacity: '1' },
					'100%': { transform: 'translateY(200%)', opacity: '0' },
				},
				whiteWash: {
					'0%': { backgroundColor: 'rgba(255, 255, 255, 0)' },
					'100%': { backgroundColor: 'rgba(255, 255, 255, 0.5)' },
				},
				wiggle: {
					'0%': {
						boxShadow: '0px 0px 30px 5px rgba(239, 68, 68)',
						border: '2px solid rgb(239, 68, 68)',
					},
					'25%': {
						boxShadow: '0px 0px 30px 5px rgba(168, 85, 247)',
						border: '2px solid rgb(168, 85, 247)',
					},
					'75%': {
						boxShadow: '0px 0px 30px 5px rgba(34, 197, 94)',
						border: '2px solid rgb(34, 197, 94)',
					},
					'100%': {
						boxShadow: '0px 0px 30px 5px rgba(239, 68, 68)',
						border: '2px solid rgb(239, 68, 68)',
					},
				},
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'animatedgradient 6s ease infinite alternate',
				fadeIn: 'fadeIn 200ms ease-in forwards',
				fadeOut: 'fadeOut 200ms ease-out forwards',
				whiteWash: 'whiteWash 100ms ease-in forwards',
				likeAndDislike: 'likeAndDislike 600ms ease-in forwards',
			},
		},
	},
	plugins: [],
};
