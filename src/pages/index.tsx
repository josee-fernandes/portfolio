import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { Sparkle } from '@/components/Sparkle'

const Home: NextPage = () => {
  const router = useRouter()
  const { contextSafe } = useGSAP()

  const sparkleContainer = useRef<HTMLDivElement>(null)
  const sparkle = useRef<HTMLDivElement>(null)

  const onAboutClick = contextSafe(() => {
    gsap.to('.sparkle-svg > .filled-path', {
      fill: '#EFBE74',
      duration: 1,
    })
    gsap.to(sparkleContainer.current, {
      top: '50%',
      left: '50%',
      xPercent: -50,
      duration: 2,
      ease: 'power3.inOut',
    })
    gsap
      .to(sparkle.current, {
        scale: 35,
        duration: 1.5,
        ease: 'power3.inOut',
      })
      .then(() => router.push('/about'))
  })

  return (
    <>
      <Head>
        <title>José Fernandes</title>
      </Head>
      <div className="relative h-screen w-screen flex-col">
        <Nav onAboutClick={onAboutClick} />
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
        <Footer />
      </div>
    </>
  )
}

Home.displayName = 'Home'

export default Home
