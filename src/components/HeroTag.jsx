import React from 'react'

const HeroTag = ({text}) => {
  return (
    <div className='inline-flex w-fit gap-1 px-4 py-1 duration-300 bg-warmGray700 hover:bg-warmGray900 text-white font-semibold rounded-lg'>
        <span>#</span>
        {text}
    </div>
  )
}

export default HeroTag