/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#F7F8FD',
					100: '#EBEDF9',
					200: '#DBDFF5',
					300: '#C8CDEF',
					400: '#B4BBE9',
					500: '#A4ADE5',
					600: '#909BDF',
					700: '#7D89D9',
					800: '#6D7BD4',
					900: '#5A6ACF',
					950: '#212C73',
				},
				gray: {
					light: 'C8CBD9',
					med: '#7d7d7d',
				},
			},
			gridTemplateRows: {
				settingsLargeScreen: 'repeat(6, 40%)',
				settingsSmallScreen: 'repeat(6, 25%)',
			},
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
				'8bit': ['"Press Start 2P"', 'cursive'],
			},
			keyframes: {
				carasol_indicator: {
					'0%': { width: '0' },
					'100%': { width: 'full' },
				},
				carasol_indicator_desktop: {
					'0%': { height: '0' },
					'100%': { height: 'full' },
				},
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
				RotatingDisplay: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
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
				carasol_indicator: 'carasol_indicator 5s ease forwards',
				carasol_indicator_desktop:
					'carasol_indicator_desktop 5s ease forwards',
				rotatingDisplay: 'RotatingDisplay 25s linear infinite',
			},
		},
	},
	plugins: [],
};
