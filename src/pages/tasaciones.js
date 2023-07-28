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
          <p className='text-base'>
            En <span className='text-main font-semibold'>San Inmobiliaria</span>, entendemos que la correcta valoración de una propiedad es esencial para tomar decisiones inteligentes en el mundo inmobiliario. Nuestro equipo de expertos en tasaciones está aquí para brindarte un servicio profesional y confiable que te permitirá conocer el valor real de tu propiedad.
          </p>
          <p className='text-base'>
            Nuestras tasaciones inmobiliarias se basan en un exhaustivo análisis del mercado local, teniendo en cuenta factores clave como la ubicación, el tamaño, las características únicas y las tendencias del mercado actual. Utilizando herramientas y métodos de evaluación precisos, nuestros profesionales altamente capacitados realizan un estudio detallado que te proporcionará una valoración confiable y precisa.
          </p>
          <p className='text-base'>
            Cuando confías en San Inmobiliaria para realizar la tasación de tu propiedad, te beneficias de nuestra experiencia y conocimiento profundo del mercado inmobiliario en Posadas y sus alrededores. Nos mantenemos actualizados con las fluctuaciones y tendencias del mercado para brindarte una perspectiva clara y realista sobre el valor de tu propiedad en el contexto actual.
          </p>
          <p className='text-base'>
            Ya sea que necesites una tasación para vender tu propiedad al mejor precio, establecer un precio justo para una compra o simplemente conocer el valor actual de tu inversión, estamos aquí para ayudarte. Nuestro objetivo es proporcionarte información precisa y detallada que te permita tomar decisiones informadas y estratégicas.
          </p>
          <p className='text-base'>
            En San Inmobiliaria, nos comprometemos a ofrecerte un servicio de tasación transparente y profesional. Nuestro equipo estará encantado de responder a todas tus preguntas y brindarte un informe completo que respalde nuestra valoración. Valoramos la confianza que depositas en nosotros y nos esforzamos por superar tus expectativas en cada interacción.
          </p>
          <p className='text-base'>
            Confía en nosotros para obtener una tasación inmobiliaria precisa y confiable. Nuestro enfoque riguroso y nuestra atención meticulosa a los detalles nos permiten brindarte una valoración objetiva y sólida. Estamos aquí para ayudarte a tomar decisiones informadas y maximizar el valor de tus activos inmobiliarios.
          </p>
          <p className='text-base'>
            <Link href={'/contacto'} className='text-main'>¡Contáctanos</Link> hoy mismo y permítenos realizar una tasación inmobiliaria que te brinde una perspectiva clara y precisa del valor de tu propiedad!
          </p>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Tasaciones