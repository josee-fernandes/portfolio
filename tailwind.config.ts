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
      colors: {
        'brand-primary': '#161616',
        'brand-secondary': '#FFFFFF',
        'brand-accent': '#EFBE74',
      },
      animation: {
        spin: 'spin 7s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
