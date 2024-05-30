import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>José Fernandes</title>
      </Head>
      <div className="mx-auto flex h-screen w-[90%] max-w-[1600px] flex-col items-center justify-center lg:items-start">
        <h1 className="text-center font-humane text-8xl font-bold leading-none text-white md:text-[28vw] lg:text-left lg:text-[18rem]">
          JOSÉ FERNANDES
        </h1>
        <p className="text-center text-xs text-white md:text-[1.8vw] lg:text-left lg:text-base">
          THIS PORTFOLIO IS UNDER CONSTRUCTION 🛠️
        </p>
        <p className="text-center text-xs text-white md:text-[1.8vw] lg:text-left lg:text-base">
          MEANWHILE, YOU CAN CHECK MY{' '}
          <Link
            href="https://github.com/josee-fernandes"
            rel="noopener"
            className="underline"
          >
            GITHUB
          </Link>
          .
        </p>
      </div>
    </>
  )
}

Home.displayName = 'Home'

export default Home
