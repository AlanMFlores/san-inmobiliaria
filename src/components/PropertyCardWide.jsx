import React from 'react'
import OperationTag from './OperationTag'
import Image from 'next/image'
import Button from './Button'

const PropertyCardWide = () => {
  return (
    <div className='flex w-full rounded-lg'>
        <div className='relative w-full h-[254px] rounded-tl-lg rounded-bl-lg max-w-[420px]'>
            <Image 
                src={'/assets/images/property-image-3.jpg'}
                fill
                style={{objectFit:"cover", width:"100%", height:"100%"}}
                className='rounded-tl-lg rounded-bl-lg z-20'
            />
            <OperationTag/>
        </div>
        <div className='flex flex-col justify-between bg-warmGray700 p-4 rounded-tr-lg rounded-br-lg w-full min-w-[278px] lg:min-w-[246px]'>
            <h3 className='text-2xl font-bold text-warmGray400 mb-1'>U$S100.000</h3>
            <p className='text-xl font-bold'>Amalia Vera y Av. Bustamante</p>
            <p className='text-sm text-warmGray300 mb-2'>Posadas, Zona Centro</p>
            <div className='flex gap-4'>
                <div className='flex gap-2'>
                    <Image 
                        src={'/assets/icons/property-plan.svg'}
                        width={16}    
                        height={16}    
                    />
                    <p>70mt2</p>
                </div>
                <div className='flex gap-2'>
                    <Image 
                        src={'/assets/icons/bed.svg'}
                        width={16}    
                        height={16}    
                    />
                    <p>2 ambientes</p>
                </div>
            </div>
            <p className='text-sm text-warmGray400'>Impecable departamento céntrico a estrenar, tres dormitorios, dos baños, balcón con parrilla... </p>
            <div className='flex justify-between mt-6'>
                <button>
                    <Image 
                    src={'/assets/icons/share.svg'}
                        width={24}    
                        height={24}
                    />
                </button>
                <Button/>
            </div>
        </div>
    </div>
  )
}

export default PropertyCardWide