import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Breadcrumbs from '@component/components/Breadcrumbs'
import Link from 'next/link'
import Image from 'next/image'

const Nosotros = () => {
  return (
    <>
      <Header/>
      <Breadcrumbs page={"Nosotros"}/>
      <section className='mb-10 lg:mb-20 mx-8 lg:mx-32'>
        <div className='mt-8 mb-12'>
        <h1 className='text-4xl font-bold'>Nosotros</h1>
        <div className='flex flex-col gap-6 mt-8'>
          <p className='text-base'>
            Bienvenido a <span className='text-main font-semibold'>San Inmobiliaria</span>, tu socio confiable en el mundo de los bienes raíces en Posadas, provincia de Misiones. Nos enorgullece ofrecerte servicios de asesoramiento personalizado para la compra y venta de propiedades, alquileres y tasaciones.
          </p>
          <p className='text-base'>
            En San Inmobiliaria, comprendemos la importancia y el valor que tienen tus sueños y necesidades inmobiliarias. Nuestro equipo de expertos apasionados y comprometidos está aquí para ayudarte en cada paso del camino. Ya sea que busques la casa de tus sueños, desees vender tu propiedad con éxito o necesites asesoramiento para invertir en bienes raíces, estamos aquí para hacer realidad tus objetivos.
          </p>
          <p className='text-base'>
            Nuestra experiencia en el mercado local nos ha convertido en líderes confiables y reconocidos en la industria inmobiliaria de Posadas. Conocemos cada rincón de esta hermosa región y te brindamos un conocimiento profundo del mercado local. Esto nos permite ofrecerte un asesoramiento preciso y personalizado, adaptado a tus necesidades y preferencias específicas.
          </p>
          <p className='text-base'>
            En San Inmobiliaria, nos enorgullece construir relaciones sólidas y duraderas con nuestros clientes. Valoramos la transparencia, la ética y la honestidad en cada interacción. Puedes confiar en que te proporcionaremos información precisa y detallada, así como un servicio de atención al cliente excepcional. Tu satisfacción es nuestra máxima prioridad.
          </p>
          <div className='flex flex-col gap-6'>
            <p>Nuestros servicios incluyen:</p>
              <ol className='flex flex-col gap-6 list-decimal ps-4'>
                <li>
                  <strong>Asesoramiento integral para la compra y venta de propiedades</strong>: Te guiaremos a lo largo de todo el proceso, desde la búsqueda y selección de propiedades hasta la negociación y cierre de la operación. Estamos comprometidos en encontrar la propiedad perfecta que se ajuste a tus necesidades y presupuesto.
                </li>
                <li>
                  <strong>Alquileres</strong>: Si estás buscando un lugar para vivir temporalmente, te ofrecemos una amplia selección de opciones de alquiler. Nos encargaremos de encontrar la propiedad adecuada y gestionar todos los trámites necesarios para que puedas disfrutar de tu nuevo hogar sin complicaciones.
                </li>
                <li>
                  <strong>Tasaciones profesionales</strong>: Contamos con expertos en tasaciones inmobiliarias que te brindarán una valoración precisa y confiable de tu propiedad. Ya sea que necesites una tasación para la venta, la compra, o cualquier otro propósito, podemos ayudarte a determinar el valor real de tu inversión
                </li>
              </ol>
          </div>
          <p>
            En San Inmobiliaria, nos apasiona ayudarte a alcanzar tus metas inmobiliarias. Nuestro compromiso con la excelencia, la integridad y el servicio al cliente nos distingue en el mercado. Confía en nosotros para encontrar soluciones inmobiliarias sólidas y confiables.
          </p>
          <p>
            <Link href={'/contacto'} className='text-main'>¡Contáctanos</Link> hoy mismo y permítenos ser tu aliado confiable en el apasionante mundo de los bienes raíces!
          </p>
        </div>
        </div>
        <div className='flex flex-col items-center gap-8'>
        <Image 
          src={'/assets/images/San-Inmobiliaria-Logo.svg'}
          width={483}
          height={331}
          className="w-60"
        />
        <div className='flex flex-col items-center gap-4'>
          <p className='text-base font-semibold'>Sandra Espíndola</p>
          <p>Martillera - Corredora Pública Inmobiliario </p>
          <p>Matrícula N° 202</p>
        </div>  
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Nosotros