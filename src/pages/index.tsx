import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import sparkle from 'public/sparkle.svg'

import { Footer } from '@/components/Footer'
import { Nav } from '@/components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>José Fernandes</title>
      </Head>
      <div className="relative h-screen w-screen flex-col">
        <Nav />
        <div className="relative top-1/2 mx-auto flex w-[95%] max-w-[1600px] flex-1 -translate-y-1/2 flex-col items-center justify-center lg:items-start">
          <h1 className="text-center font-humane text-8xl font-bold leading-none text-white md:text-[28vw] lg:text-left lg:text-[18rem]">
            JOSÉ FERNANDES
          </h1>
          <div className="absolute right-56 top-1/2 -translate-y-1/2">
            <Image src={sparkle} alt="" className="motion-safe:animate-spin" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

Home.displayName = 'Home'

export default Home
