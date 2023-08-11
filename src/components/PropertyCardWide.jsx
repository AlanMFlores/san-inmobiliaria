import React from 'react'
import OperationTag from './OperationTag'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

const PropertyCardWide = ({title, zone, slug, ambience, metres, price, cover, description, operation}) => {
  return (
    <Link href={`/anuncio/${slug}`} passHref>
        <div className='flex w-full flex-col sm:flex-row rounded-lg'>
            <div className='relative w-full h-[254px] sm:h-[300px] lg:max-h-[254px] rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-tl-lg sm:rounded-bl-lg sm:max-w-[420px]'>
                <Image 
                    src={cover}
                    fill
                    style={{objectFit:"cover", width:"100%", height:"100%"}}
                    className='rounded-tl-lg rounded-tr-lg sm:rounded-tr-none sm:rounded-tl-lg sm:rounded-bl-lg z-20'
                />
                <OperationTag operation={operation}/>
            </div>
            <div className='flex flex-col justify-between bg-warmGray700 p-4 rounded-bl-lg sm:rounded-bl-none rounded-br-lg sm:rounded-tr-lg sm:rounded-br-lg w-full lg:max-w-none lg:min-w-[246px] overflow-hidden'>
                <h3 className='text-2xl font-bold text-warmGray400 mb-1'>{`U$S ${price}`}</h3>
                <p className='text-xl font-bold'>{title}</p>
                <p className='text-sm text-warmGray300 mb-2'>{zone}</p>
                <div className='flex gap-4'>
                    <div className='flex gap-2'>
                        <Image 
                            src={'/assets/icons/property-plan.svg'}
                            width={16}    
                            height={16}    
                        />
                        <p>{`${metres}M2`}</p>
                    </div>
                    <div className='flex gap-2'>
                        <Image 
                            src={'/assets/icons/bed.svg'}
                            width={16}    
                            height={16}    
                        />
                        <p>{`${ambience} ambientes`}</p>
                    </div>
                </div>
                <p className='text-sm text-warmGray400 truncate'>{description}</p>
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
    </Link>
  )
}

export default PropertyCardWide