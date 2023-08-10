import PropertiesSection from '@component/components/sections/PropertiesSection'
import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Breadcrumbs from '@component/components/Breadcrumbs'
import RentalSaleFilter from '@component/components/RentalSaleFilter'

const Venta = () => {
  return (
    <>
      <Header/>
      <Breadcrumbs page={"Venta"}/>
      <h1 className='text-4xl font-bold mb-10 mt-8 mx-8 lg:mx-32'>Venta</h1>
      <RentalSaleFilter/>
      <PropertiesSection operationFilter={"Venta"}/>
      <Footer/>
    </>
  )
}

export default Venta