import React from 'react'
import Image from 'next/image'
import OperationTag from './OperationTag'


const PropertyCard = () => {
  return (
    <div className='max-w-[278px] rounded-lg'>
        <div className='relative w-[254px] h-[254px] rounded-t-lg rounded-r-lg'>
            <Image 
                src={'/assets/images/property-image-1.jpg'}
                fill
                style={{objectFit:"cover", width:"100%", height:"100%"}}
                className='rounded-lg z-20'
            />
            <OperationTag/>
        </div>
        <div className='bg-warmGray700 p-4 rounded-br-lg rounded-bl-lg w-[254px]'>
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