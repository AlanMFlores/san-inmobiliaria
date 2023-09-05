import React from 'react'
import SearchPropertiesButton from './SearchPropertiesButton'
import HeroTag from './HeroTag'

const SearchBar = () => {
  return (
    <div className='bg-warmGray800 p-8 w-full max-w-[512px] lg:max-w-4xl'>
        <h2 className='text-center text-lg lg:text-xl mb-4 font-semibold text-warmGray400'>Buscá el lugar ideal para vivir</h2>
        <div className='flex flex-col gap-6'>
            <div className='flex flex-wrap justify-center gap-2'>
                <HeroTag text={'Alquiler'}/>
                <HeroTag text={'Venta'}/>
                <HeroTag text={'Casa'}/>
                <HeroTag text={'Departamento'}/>
                <HeroTag text={'Posadas'}/>
                <HeroTag text={'Dólares'}/>
                <HeroTag text={'Pesos'}/>
            </div>
            <div className='flex gap-4 items-center flex-grow'>
                <SearchPropertiesButton/>
            </div>
        </div>
    </div>
    )
}

export default SearchBar