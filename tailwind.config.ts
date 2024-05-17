import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        humane: ['var(--font-humane)'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        'playfair-display': ['var(--font-playfair-display)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'brand-primary': '#161616',
        'brand-secondary': '#FFFFFF',
        'brand-accent': '#EFBE74',
      },
    },
  },
  plugins: [],
}
export default config
