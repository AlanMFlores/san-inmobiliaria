import React from 'react'
import Image from 'next/image'

const Pagination = () => {
  return (
    <div className='flex items-center gap-2 mb-20'>
        <button>
            <Image
                src={'/assets/icons/chevron-left.svg'}
                width={16}
                height={16}
            />
        </button>
        <div>
            <button className='text-xl w-8 h-8 font-semibold leading-none bg-main'>1</button>
            <button className='text-lg w-8 h-8 leading-none'>2</button>
            <button className='text-lg w-8 h-8 leading-none'>3</button>
        </div>
        <button>
            <Image
                src={'/assets/icons/chevron-right.svg'}
                width={16}
                height={16}
            />
        </button>
    </div>
  )
}

export default Pagination