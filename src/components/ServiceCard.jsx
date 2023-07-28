import React from 'react'
import Image from 'next/image'

const ServiceCard = ({title, description, icon}) => {
  return (
    <div className='relative max-w-[320px] md:max-w-[512px] m-auto'>
        <div className='absolute right-6 -top-8 lg:-top-10'>
            <Image 
                src={`/assets/icons/${icon}.svg`}
                width={80}
                height={80}
                alt={icon}
                className='w-16 lg:w-20'
            />
        </div>
        <div className='bg-warmGray700 pt-6 pr-6 pl-6 pb-8'>
            <h3 className='text-3xl font-semibold mb-4'>{title}</h3>
            <p className='text-base text-warmGray400'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard