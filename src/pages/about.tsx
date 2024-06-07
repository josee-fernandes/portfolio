import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'
import { usePageTransition } from '@/context/Transition'

const About: NextPage = () => {
  const { timeline } = usePageTransition()

  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // entry
      // gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 })
      gsap.fromTo(
        'h1',
        { opacity: 0, top: '100%' },
        { opacity: 1, top: 0, delay: 0.75, ease: 'expo.inOut', duration: 1 },
      )
      gsap.to('.menus', {
        right: 0,
        ease: 'power3.inOut',
        duration: 1,
        // delay: 0.15,
      })
      gsap.fromTo(
        '.menus li',
        {
          left: 0,
          ease: 'expo.out',
        },
        {
          left: (i) => (i - 3) * 100,
          duration: 1,
          delay: 0.35,
          stagger: 0.1,
        },
      )
      gsap.to('.menus li', {
        left: 0,
        duration: 2,
        stagger: 0.1,
        delay: 0.6,
        ease: 'expo.out',
      })

      gsap.to('.logo', {
        left: 0,
        ease: 'power3.inOut',
        duration: 1.15,
        delay: 0.5,
      })

      // exit
      timeline.add(gsap.to(container.current, { opacity: 0 }))
    },
    { scope: container },
  )

  return (
    <>
      <Head>
        <title>About José Fernandes</title>
      </Head>
      <div
        ref={container}
        className="relative h-screen w-screen flex-col bg-brand-accent"
      >
        <Nav className="fill-brand-primary text-brand-primary" />
        <div className="relative top-1/2 mx-auto flex h-72 w-[95%] max-w-[1600px] flex-1 -translate-y-1/2 flex-col items-center justify-center overflow-hidden lg:items-start">
          <h1 className="relative top-full h-full text-center font-humane text-8xl font-bold leading-none  text-brand-primary md:text-[28vw] lg:text-left lg:text-[18rem]">
            ABOUT
          </h1>
        </div>
        <Footer className="fill-brand-primary text-brand-primary" />
      </div>
    </>
  )
}

About.displayName = 'About'

export default About
