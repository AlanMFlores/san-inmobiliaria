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


const Anuncio = ({selectedProperty}) => {

  const {title, price, zone, images, description, features, operation, metres, ambience} = selectedProperty;

  return (
    <>
        <Header/>
        <section className='flex flex-col items-center xl:block mx-8 lg:mx-32'>
            <div className='flex flex-col w-full max-w-[784px] mb-10 mt-8 gap-4'>
              <div className='mt-12'>
                <p className='text-white text-sm'>Home / <span>Anuncio</span></p>
              </div>
              <div className='flex justify-between w-full max-w-[784px]'>
                <h1 className='text-xl md:text-3xl xl:text-4xl font-bold'>{title}</h1>
                <p className='text-xl md:text-3xl xl:text-4xl font-bold text-warmGray400'>{`U$S${price}`}</p>
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
            <PropertyGallery images={images}/>
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

export async function getStaticPaths() {
  const paths = propertiesData.properties.map(property => (
    {
      params: {slug: property.slug}
    }
  ));

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const selectedProperty = propertiesData.properties.find(
    property => property.slug === params.slug
  );

  return {
    props: {
      selectedProperty
    }
  }
}

export default Anuncio