import React from 'react'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 bg-[url(/assets/images/hero.jpg)] bg-cover pt-16 px-8 pb-16 h-fit lg:h-[512px] bg-no-repeat'>
            <div className='z-10 text-center'>
              <h1 className='text-4xl font-bold mb-2'>Encontrá tu nuevo hogar</h1>
              <p className='text-base text-warmGray300'>Ofrecemos una amplia cantidad de inmuebles para alquilar y comprar</p>
            </div>
            <SearchBar/>
    </section>
  )
}

export default Hero