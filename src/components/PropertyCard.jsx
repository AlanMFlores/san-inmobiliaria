import React from 'react'
import Image from 'next/image'
import OperationTag from './OperationTag'


const PropertyCard = () => {
  return (
    <div className='w-full rounded-lg'>
        <div className='relative w-full h-[254px] rounded-tr-lg rounded-tl-lg min-w-[278px] lg:min-w-[246px]'>
            <Image 
                src={'/assets/images/property-image-1.jpg'}
                fill
                style={{objectFit:"cover", width:"100%", height:"100%"}}
                className='rounded-tr-lg rounded-tl-lg z-20'
            />
            <OperationTag/>
        </div>
        <div className='bg-warmGray700 p-4 rounded-br-lg rounded-bl-lg w-full min-w-[278px] lg:min-w-[246px]'>
            <h3 className='text-lg font-semibold mb-1'>Av. Roque Saenz Peña </h3>
            <p className='text-sm text-warmGray300 mb-2'>Posadas, Zona Centro</p>
            <p className='text-sm text-warmGray400 mb-2'>3 Ambientes - 70m2  </p>
            <div className='flex justify-between'>
                <p className='text-base font-semibold'>U$S100.000</p>
                <button>
                    <Image 
                    src={'/assets/icons/share.svg'}
                        width={24}    
                        height={24}
                    />
                </button>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard