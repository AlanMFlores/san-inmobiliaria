import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Hero from '@component/components/Hero'
import FeaturedProperties from '@component/components/sections/FeaturedProperties'
import OurServices from '@component/components/sections/OurServices'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <FeaturedProperties/>
      <OurServices/>
      <Footer/>
    </>
  )
}
