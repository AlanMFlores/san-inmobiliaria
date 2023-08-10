import React from 'react'
import Image from 'next/image'
import OperationTag from './OperationTag'


const PropertyCard = ({title, zone, ambience, metres, price, cover, operation}) => {
  return (
    <div className='w-full rounded-lg'>
        <div className='relative w-full h-[254px] rounded-tr-lg rounded-tl-lg min-w-[278px] lg:min-w-[246px]'>
            <Image 
                src={cover}
                fill
                style={{objectFit:"cover", width:"100%", height:"100%"}}
                className='rounded-tr-lg rounded-tl-lg z-20'
            />
            <OperationTag operation={operation}/>
        </div>
        <div className='bg-warmGray700 p-4 rounded-br-lg rounded-bl-lg w-full min-w-[278px] lg:min-w-[246px] overflow-hidden'>
            <h3 className='text-lg font-semibold mb-1 truncate'>{title}</h3>
            <p className='text-sm text-warmGray300 mb-2'>{zone}</p>
            <p className='text-sm text-warmGray400 mb-2'>{{ambience} > 1 ? `${ambience} ambientes` : `${ambience} ambiente`} - {`${metres}M2`}</p>
            <div className='flex justify-between'>
                <p className='text-base font-semibold'>{`U$S ${price}`}</p>
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