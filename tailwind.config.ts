
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
			// Punto Rosa massage business color palette
			'punto-rosa': {
				50: '#fdf8f7',
				100: '#fcf0ed',
				200: '#f9e1dd',
				300: '#f5ccc4',
				400: '#edafb8',
				500: '#e399a3',
				600: '#d7818e',
				700: '#c86a79',
				800: '#b85565',
				900: '#a04051',
			},
			'spa-soft': {
				50: '#fefcfa',
				100: '#fdf8f5',
				200: '#fbf1eb',
				300: '#f9e9e1',
				400: '#f7e1d7',
				500: '#f0d7cb',
				600: '#e8ccbe',
				700: '#dfc0b1',
				800: '#d5b3a3',
				900: '#cba595',
			},
			'neutral-warm': {
				50: '#faf9f8',
				100: '#f5f4f2',
				200: '#efeee6',
				300: '#e8e7da',
				400: '#dedbd2',
				500: '#d4d1c8',
				600: '#c9c6bd',
				700: '#bebbb2',
				800: '#b3b0a7',
				900: '#a8a59c',
			},
			'spa-green': {
				50: '#f5f7f6',
				100: '#e8eded',
				200: '#d4dbdb',
				300: '#c0c9c9',
				400: '#b0c4b1',
				500: '#9eb8a0',
				600: '#8cac8e',
				700: '#7aa07c',
				800: '#68946a',
				900: '#568858',
			},
			'text-deep': {
				50: '#f2f3f3',
				100: '#e5e7e7',
				200: '#cbcfcf',
				300: '#b1b7b7',
				400: '#979f9f',
				500: '#7d8787',
				600: '#636f6f',
				700: '#4a5759',
				800: '#3e4d4f',
				900: '#324345',
			}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: { addUtilities: any }) {
			addUtilities({
				'.hover-scale': {
					'@apply transition-transform duration-300 hover:scale-105': {},
				},
				'.story-link': {
					'@apply relative inline-block after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-punto-rosa-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left': {},
				}
			});
		}
	],
} satisfies Config;
