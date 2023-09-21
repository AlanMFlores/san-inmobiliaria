import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Breadcrumbs from '@component/components/Breadcrumbs'
import Link from 'next/link'

const Tasaciones = () => {
  return (
    <>
      <Header/>
      <Breadcrumbs page={"Tasaciones"}/>
      <section className='mb-10 mt-8 lg:mb-20 mx-8 lg:mx-32'>
        <h1 className='text-4xl font-bold'>Tasaciones</h1>
        <div className='my-8 w-full h-[424px] bg-[url(/assets/images/appraisals-hero-image.jpg)] bg-cover bg-center'>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='text-base'>
            Tasaciones Inmobiliarias: Evaluación precisa para tomar decisiones inteligentes
          </p>
          <p className='text-base text-justify'>
            Cuando confías en San Inmobiliaria para realizar la tasación de tu propiedad, te beneficias de nuestra experiencia y conocimiento profundo del mercado inmobiliario en Posadas y sus alrededores. Nos mantenemos actualizados con las fluctuaciones y tendencias del mercado para brindarte una perspectiva clara y realista sobre el valor de tu propiedad en el contexto actual.
          </p>
          <p className='text-base text-justify'>
            En San Inmobiliaria, nos comprometemos a ofrecerte un servicio de tasación transparente y profesional. Nuestro equipo estará encantado de responder a todas tus preguntas y brindarte un informe completo que respalde nuestra valoración. Valoramos la confianza que depositas en nosotros y nos esforzamos por superar tus expectativas en cada interacción.
          </p>
          <p className='text-base text-justify'>
            <Link href={'/contacto'} className='text-main'>¡Contáctanos</Link> hoy mismo y permítenos realizar una tasación inmobiliaria que te brinde una perspectiva clara y precisa del valor de tu propiedad!
          </p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Tasaciones