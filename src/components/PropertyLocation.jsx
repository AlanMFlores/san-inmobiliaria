import React from 'react'

const PropertyLocation = () => {
  return (
    <div className='flex flex-col h-[346px] bg-warmGray700 px-4 py-8 rounded-lg'>
        <h4 className='text-2xl font-semibold mb-4'>Ubicación</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.440483876383!2d-55.914050825433705!3d-27.393184213448713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9457be5e4fee0735%3A0x1cdd6c38e4dd6650!2sAvenida%20Bustamante%20%26%20Amalia%20Vera%2C%20Posadas%2C%20Misiones!5e0!3m2!1ses-419!2sar!4v1690845630593!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
    </div>
  )
}

export default PropertyLocation