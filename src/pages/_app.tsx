import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import {
  Montserrat,
  Playfair_Display as PlayfairDisplay,
} from 'next/font/google'
import localFont from 'next/font/local'

import { Transition } from '@/components/Transition'
import { TransitionProvider } from '@/context/Transition'
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

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
  router,
}: AppProps) => {
  useIsomorphicLayoutEffect(() => {
    document.body.className = `min-h-screen w-full overflow-x-hidden bg-brand-primary font-montserrat ${humane.variable} ${montserrat.variable} ${playfairDisplay.variable}`
  }, [])

  return (
    <TransitionProvider>
      <Transition>
        <Component key={router.route} {...pageProps} />
      </Transition>
    </TransitionProvider>
  )
}

App.displayName = 'App'

export default App
