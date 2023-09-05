import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Breadcrumbs from '@component/components/Breadcrumbs'
import PropertiesSection from '@component/components/sections/PropertiesSection'
import SortProperties from '@component/components/SortProperties'

const Propiedades = () => {
  return (
    <>
      <Header/>
      <Breadcrumbs page={"Propiedades"}/>
      <h1 className='text-4xl font-bold mb-10 mt-8 mx-8 lg:mx-32'>Propiedades</h1>
      <PropertiesSection/>
      <Footer/>
    </>
  )
}

export default Propiedades