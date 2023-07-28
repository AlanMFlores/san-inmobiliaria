import React from 'react'
import ServiceCard from '../ServiceCard'

const OurServices = () => {
  return (
    <section className='mt-10 lg:mt-20 mb-20 mx-16 lg:mx-32'>
        <h1 className='text-2xl lg:text-4xl font-bold text-center mb-12 lg:mb-20'>Nuestros Servicios</h1>
        <div className='grid lg:grid-cols-3 gap-12 lg:gap-6'>
            <ServiceCard title={"Alquileres"} description={"Te ofrecemos las mejores opciones de alquileres, que se adapten a tus necesidades y deseos."} icon={"service-card-rent-icon"}/>
            <ServiceCard title={"Ventas"} description={"Te asesoramos para encontrar tu nuevo hogar o para vender tu propiedad de forma profesional."} icon={"service-card-sale-icon"}/>
            <ServiceCard title={"Tasaciones"} description={"Tasamos tu propiedad de acuerdo a tus necesidades y te asesoramos en el proceso de compra/venta."} icon={"service-card-appraisal-icon"}/>
        </div>
    </section>
  )
}

export default OurServices