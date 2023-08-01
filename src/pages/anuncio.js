import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Breadcrumbs from '@component/components/Breadcrumbs'
import OperationTag from '@component/components/OperationTag'
import PropertyGallery from '@component/components/PropertyGallery'
import PropertyDescription from '@component/components/PropertyDescription'
import PropertyFeatures from '@component/components/PropertyFeatures'
import ContactPropertyForm from '@component/components/ContactPropertyForm'
import PropertyLocation from '@component/components/PropertyLocation'

const Anuncio = () => {
  return (
    <>
        <Header/>
        <Breadcrumbs page={"Anuncio"}/>
        <section className='mx-8 lg:mx-32'>
            <div className='flex flex-col mb-10 mt-8 gap-4'>
              <div className='flex justify-between max-w-[784px]'>
                <h1 className='text-4xl font-bold'>Amalia Vera y Av. Bustamante</h1>
                <p className='text-4xl font-bold text-warmGray400'>U$S 127.000</p>
              </div>
              <div className='flex justify-between max-w-[784px]'>
                <p className='text-lg text-warmGray300'>Posadas, Zona Centro</p>
                <div className='relative'>
                  <OperationTag position={'top-0 right-0'}/>
                </div>
              </div>
            </div>
        </section>
        <section className='flex mx-8 mb-20 lg:mx-32 gap-8'>
          <div className='flex flex-col gap-8'>
            <PropertyGallery/>
            <PropertyDescription/>
            <PropertyFeatures/>
          </div>
          <div className='flex flex-col gap-8'>
            <ContactPropertyForm/>
            <PropertyLocation/>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Anuncio