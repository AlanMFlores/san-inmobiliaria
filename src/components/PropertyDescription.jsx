import React from 'react'

const PropertyDescription = () => {
  return (
    <div className='p-8 bg-warmGray700 rounded-lg max-w-[784px]'>
        <h3 className='text-2xl font-semibold border-b-4 border-main pb-4 mb-6 inline-block'>Descripción</h3>
        <div className='flex flex-col gap-2'>
            <p className='text-warmGray400'>Duplex moderno y luminoso a sólo 10 minutos del centro.</p>
            <p className='text-warmGray400'>La unidad cuenta con tres ambientes, tres baños, cocina, lavadero, living-comedor, cochera con portón automatizado.</p>
            <p className='text-warmGray400'>Equipamiento:  Split en todos los ambientes, sistemas de termofusión y termotanque eléctrico.</p>
        </div>
    </div>
  )
}

export default PropertyDescription