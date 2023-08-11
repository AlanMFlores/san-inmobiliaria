import React from 'react'

const PropertyDescription = ({description}) => {
  return (
    <div className='p-8 bg-warmGray700 rounded-lg max-w-[784px]'>
        <h3 className='text-2xl font-semibold border-b-4 border-main pb-4 mb-6 inline-block'>Descripción</h3>
        <div className='flex flex-col gap-2'>
            <p className='text-warmGray400'>{description}</p>
        </div>
    </div>
  )
}

export default PropertyDescription