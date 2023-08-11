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
import propertiesData from '../../data/data.json'
import { useRouter } from 'next/router'


const Anuncio = () => {
  const router = useRouter()

  const { slug } = router.query;

  const selectedProperty = propertiesData.properties.find(property => property.slug === slug)

  const {title, price, zone, cover, description, features, operation, metres, ambience} = selectedProperty;

  return (
    <>
        <Header/>
        <Breadcrumbs page={"Anuncio"}/>
        <section className='flex flex-col items-center xl:block mx-8 lg:mx-32'>
            <div className='flex flex-col mb-10 mt-8 gap-4'>
              <div className='flex justify-between max-w-[784px]'>
                <h1 className='text-2xl xl:text-4xl font-bold'>{title}</h1>
                <p className='text-xl xl:text-4xl font-bold text-warmGray400'>{`U$S ${price}`}</p>
              </div>
              <div className='flex justify-between max-w-[784px]'>
                <p className='text-lg text-warmGray300'>{zone}</p>
                <div className='relative'>
                  <OperationTag position={'top-0 right-0'} operation={operation}/>
                </div>
              </div>
            </div>
        </section>
        <section className='flex flex-col items-center xl:flex-row xl:items-start mx-8 mb-20 lg:mx-32 gap-8'>
          <div className='flex flex-col items-center gap-8 w-full'>
            <PropertyGallery cover={cover}/>
            <PropertyDescription description={description}/>
            <PropertyFeatures features={features} metres={metres} ambience={ambience}/>
          </div>
          <div className='flex flex-col items-center gap-8 w-full max-w-[784px]'>
            <ContactPropertyForm/>
            <PropertyLocation/>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default Anuncio