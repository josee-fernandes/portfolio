import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="bg-brand-primary">
      <p className="font-humane text-8xl text-white">Humane</p>
      <p className="font-montserrat text-6xl text-white">Montserrat</p>
      <p className="font-playfair-display text-6xl text-white">
        Playfair Display
      </p>
    </div>
  )
}

Home.displayName = 'Home'

export default Home
