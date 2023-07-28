import React from 'react'

const Select = ({name, options}) => {
  return (
    <select className='bg-warmGray700 px-4 py-2 flex-grow outline-none'>
        <option className='text-white'disabled selected>{name}</option>
        {
            options.map(option => (
                <option value={option.toLowerCase()} className='text-white'>{option}</option>
            ))
        }
    </select>
  )
}

export default Select