import React from 'react'
import PropertyCard from '../PropertyCard'

const FeaturedProperties = () => {
  return (
    <section className='mt-20 mb-10 mx-32'>
        <h1 className='text-4xl font-bold text-center mb-12'>Propiedades Destacadas</h1>
        <div className='grid grid-cols-4 gap-6 justify-center'>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/> 
        </div>
    </section>
  )
}

export default FeaturedProperties