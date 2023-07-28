import React from 'react'
import PropertyCard from '../PropertyCard'
import SeeMorePropertiesButton from '../SeeMorePropertiesButton'

const FeaturedProperties = () => {
  return (
    <section className='mt-10 lg:mt-20 mb-10 lg:mb-20 mx-8 lg:mx-32'>
        <h1 className='text-2xl lg:text-4xl font-bold text-center mb-12'>Propiedades Destacadas</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center mb-8 lg:mb-16'>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/> 
        </div>
        <div className='flex justify-center'>
          <SeeMorePropertiesButton/>
        </div>
    </section>
  )
}

export default FeaturedProperties