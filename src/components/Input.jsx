import React from 'react'

const Input = ({type, content, id, placeholder, dir, width}) => {
  return (
    <input className={`px-4 py-2 bg-warmGray700 outline-none w-${width}`} type={type} id={id} dir={dir} placeholder={placeholder}>{content}</input>
  )
}

export default Input