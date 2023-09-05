import React from 'react'
import Link from 'next/link'

const SearchPropertiesButton = () => {
  return (
    <Link href={"/propiedades"} className='bg-main text-white text-center px-8 py-2 font-semibold max-w-3xl mx-auto hover:bg-mainDark duration-100 cursor-pointer flex-grow'>
      <button>
        Buscar propiedades
      </button>
    </Link>
  )
}

export default SearchPropertiesButton