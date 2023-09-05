import React from 'react'
import { useState } from 'react'

const SortProperties = ({ onSortChange }) => {
   const [sortOption, setSortOption] = useState('Destacado')

   const handleSortChange = (e) => {
     const selectedOption = e.target.value;
     setSortOption(selectedOption);
     onSortChange(selectedOption);
   }

  return (
    <div className='flex gap-2 items-center justify-end my-6'>
        <p>Ordenar por:</p>
        <select className='bg-warmGray700 px-4 py-2 outline-none' onChange={handleSortChange} value={sortOption}>
            <option className='text-white' value={'Destacado'} selected>{"Destacado"}</option>
            <option className='text-white' value={'Menor precio'} >{"Menor precio"}</option>
            <option className='text-white' value={'Mayor precio'}>{"Mayor precio"}</option>
        </select>
    </div>
  )
}

export default SortProperties