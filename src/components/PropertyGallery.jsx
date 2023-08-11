import React from 'react'
import Image from 'next/image'

const PropertyGallery = ({cover}) => {
  return (
    <div className='p-14 bg-warmGray700 w-full max-w-[784px] rounded-lg'>
        <div className='flex justify-between mb-11'>
            <button>
                <Image
                    src={'/assets/icons/chevron-left-gallery.svg'}
                    width={48}
                    height={48}
                />
            </button>
            <div className='w-[384px] h-[478px]'>
                <Image
                    src={cover}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
            <button>
                <Image
                    src={'/assets/icons/chevron-right-gallery.svg'}
                    width={48}
                    height={48}
                />
            </button>
        </div>
        <div className='flex gap-4'>
            <div className='w-[88px] h-[128px] '>
                <Image
                    src={'/assets/images/property-image-4.jpg'}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-[88px] h-[128px] '>
                <Image
                    src={'/assets/images/property-image-4.jpg'}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-[88px] h-[128px] '>
                <Image
                    src={'/assets/images/property-image-4.jpg'}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-[88px] h-[128px] '>
                <Image
                    src={'/assets/images/property-image-4.jpg'}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-[88px] h-[128px] '>
                <Image
                    src={'/assets/images/property-image-4.jpg'}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-[88px] h-[128px] '>
                <Image
                    src={'/assets/images/property-image-4.jpg'}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='w-[88px] h-[128px] '>
                <Image
                    src={'/assets/images/property-image-4.jpg'}
                    width={88}
                    height={128}
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    </div>
  )
}

export default PropertyGallery