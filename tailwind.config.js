const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.5rem' }],
			base: ['1rem', { lineHeight: '1.75rem' }],
			lg: ['1.125rem', { lineHeight: '2rem' }],
			xl: ['1.25rem', { lineHeight: '2rem' }],
			'2xl': ['1.5rem', { lineHeight: '2rem' }],
			'3xl': ['2rem', { lineHeight: '2.5rem' }],
			'4xl': ['2.5rem', { lineHeight: '3.5rem' }],
			'5xl': ['3rem', { lineHeight: '3.5rem' }],
			'6xl': ['3.75rem', { lineHeight: '1' }],
			'7xl': ['4.5rem', { lineHeight: '1.1' }],
			'8xl': ['6rem', { lineHeight: '1' }],
			'9xl': ['8rem', { lineHeight: '1' }],
		},
		extend: {
			borderRadius: {
				'4xl': '2rem',
			},
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				display: ['Lexend', ...defaultTheme.fontFamily.sans],
			},
			maxWidth: {
				'2xl': '40rem',
				'3xl': '48rem',
				'4xl': '56rem',
			},
			colors: {
				formenu: {
					cyan: {
						50: '#ebffff',
						100: '#CDFEFD',
						200: '#A6FCFB',
						300: '#48F7F4',
						400: '#43E5EA',
						500: '#3CCFDD',
						600: '#34B5CE',
						700: '#2380AF',
						800: '#1A629E',
						900: '#0F408A',
						1000: '#091E3E',
						1100: '#030F21',
					},
					indigo: {
						50: '#EEF2FF',
						100: '#E0E7FF',
						200: '#C7D2FE',
						300: '#A5B4FC',
						400: '#818CF8',
						500: '#6366F1',
						600: '#4F46E5',
						700: '#4338CA',
						800: '#3730A3',
						900: '#312E81',
						1000: '#1D1A60',
						1100: '#0D0C3C',
					},
				},
				emerald: {
					1000: '#033024',
					1100: '#011E16',
				},
				red: {
					1000: '#5D0E0E',
					1100: '#330505',
				},
				orange: {
					1000: '#551A07',
					1100: '#280B01',
				},
				gray: {
					1000: '#0C111C',
					1100: '#06090E',
				},
				slate: {
					1000: '#0A101F',
					1100: '#060A14',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}
