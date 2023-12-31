import PropertiesSection from '@component/components/sections/PropertiesSection'
import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Breadcrumbs from '@component/components/Breadcrumbs'
import SortProperties from '@component/components/SortProperties'

const Alquiler = () => {
  return (
    <>
      <Header/>
      <Breadcrumbs page={"Alquiler"}/>
      <h1 className='text-4xl font-bold mb-10 mt-8 mx-8 lg:mx-32'>Alquiler</h1>
      <div className='mx-8 lg:mx-32'>
      </div>
      <PropertiesSection operationFilter={"Alquiler"}/>
      <Footer/>
    </>
  )
}

export default Alquiler