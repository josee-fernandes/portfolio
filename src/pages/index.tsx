import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Sparkle } from '@/components/Sparkle'
import { usePageTransition } from '@/context/Transition'

const Home: NextPage = () => {
  const { timeline } = usePageTransition()

  const container = useRef<HTMLDivElement>(null)
  const sparkleContainer = useRef<HTMLDivElement>(null)
  const sparkle = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // entry
      gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 })

      // exit
      timeline.add(
        gsap.to('.sparkle-svg > .filled-path', {
          fill: '#EFBE74',
          duration: 1,
        }),
        0,
      )
      timeline.add(
        gsap.to(sparkleContainer.current, {
          top: '50%',
          left: '50%',
          xPercent: -50,
          duration: 2,
          ease: 'power3.inOut',
        }),
        0,
      )
      timeline.add(
        gsap.to(sparkle.current, {
          scale: 35,
          duration: 1.5,
          ease: 'power3.inOut',
        }),
        0,
      )
      timeline.add(
        gsap.to(['nav', 'footer'], {
          fill: '#000000',
          color: '#000000',
          duration: 0.5,
        }),
        0,
      )
    },
    { scope: container },
  )

  return (
    <>
      <Head>
        <title>José Fernandes</title>
      </Head>
      <div ref={container} className="relative h-screen w-screen flex-col">
        <Nav
          className="fill-brand-secondary text-brand-secondary"
          hasColoredHover
        />
        <div className="relative top-1/2 mx-auto flex w-[95%] max-w-[1600px] flex-1 -translate-y-1/2 flex-col items-center justify-center lg:items-start">
          <h1 className="text-center font-humane text-8xl font-bold leading-none text-white md:text-[28vw] lg:text-left lg:text-[18rem]">
            JOSÉ FERNANDES
          </h1>
          <div
            ref={sparkleContainer}
            className="absolute right-56 top-1/2 -translate-y-1/2"
          >
            <div ref={sparkle} className="relative size-56">
              <Sparkle className="sparkle-svg motion-safe:animate-spin" />
            </div>
          </div>
        </div>
        <Footer className="fill-brand-secondary text-brand-secondary" />
      </div>
    </>
  )
}

Home.displayName = 'Home'

export default Home
