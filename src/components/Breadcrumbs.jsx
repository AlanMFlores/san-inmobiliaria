import React from 'react'

const Breadcrumbs = ({page}) => {
  return (
    <div className='mt-12 mx-8 lg:mx-32'>
        <p className='text-white text-sm'>Home / <span>{page}</span></p>
    </div>
  )
}

export default Breadcrumbs