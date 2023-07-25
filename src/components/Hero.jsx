import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 bg-[url(/assets/images/hero.jpg)] h-[512px] bg-no-repeat'>
            <div className='z-10 text-center'>
              <h1 className='text-5xl font-bold mb-2'>Encontrá tu nuevo hogar</h1>
              <p className='text-base text-warmGray300'>Ofrecemos una amplia cantidad de inmuebles para alquilar y comprar</p>
            </div>
            <SearchBar/>
    </section>
  )
}

export default Hero