import React from 'react'
import PropertyCardWide from '../PropertyCardWide'
import Pagination from '../Pagination'

const PropertiesSection = () => {
  return (
    <>
      <section className='flex flex-col gap-6 mx-8 lg:mx-32 mb-12'>
          <PropertyCardWide/>
          <PropertyCardWide/>
          <PropertyCardWide/>
          <PropertyCardWide/>
          <PropertyCardWide/>
          <PropertyCardWide/>
          <PropertyCardWide/>
          <PropertyCardWide/>
      </section>
      <section className='flex justify-center'>
        <Pagination/>
      </section>
    </>
    )
}

export default PropertiesSection