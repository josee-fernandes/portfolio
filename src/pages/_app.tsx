import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import {
  Montserrat,
  Playfair_Display as PlayfairDisplay,
} from 'next/font/google'
import localFont from 'next/font/local'

import { useIsomorphicLayoutEffect } from '@/hooks'

const humane = localFont({
  src: [
    {
      path: '../assets/fonts/humane.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/humane_bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-humane',
})
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})
const playfairDisplay = PlayfairDisplay({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useIsomorphicLayoutEffect(() => {
    document.body.className = `h-full w-full overflow-x-hidden bg-black font-montserrat ${humane.variable} ${montserrat.variable} ${playfairDisplay.variable}`
  }, [])

  return <Component {...pageProps} />
}

App.displayName = 'App'

export default App
