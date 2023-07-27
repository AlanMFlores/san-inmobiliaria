import React from 'react'
import Link from 'next/link'

const Button = () => {
  return (
    <Link href={"/contacto"} className="px-6 py-2 font-medium bg-main duration-200 hover:bg-mainDark">Contacto</Link>
  )
}

export default Button