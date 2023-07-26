import React from 'react'
import Link from 'next/link'

const SeeMorePropertiesButton = () => {
  return (
    <Link href={'/properties'} className='px-6 py-2 m-auto font-medium bg-main duration-200 hover:bg-mainDark'>
        Ver más propiedades
    </Link>
  )
}

export default SeeMorePropertiesButton