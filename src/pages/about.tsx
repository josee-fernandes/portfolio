import { NextPage } from 'next'
import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About José Fernandes</title>
      </Head>
      <div className="relative h-screen w-screen flex-col bg-brand-accent">
        <Nav />
        <div className="justify-centere relative top-1/2 mx-auto flex w-[95%] max-w-[1600px] flex-1 -translate-y-1/2 flex-col items-center lg:items-start">
          <h1 className="text-center font-humane text-8xl font-bold leading-none text-brand-primary  md:text-[28vw] lg:text-left lg:text-[18rem]">
            ABOUT
          </h1>
        </div>
        <Footer />
      </div>
    </>
  )
}

About.displayName = 'About'

export default About
