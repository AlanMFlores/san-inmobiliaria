import React from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import Button from './Button'

const Header = () => {
  return (
    <header className=' flex items-center justify-between px-32 py-7 shadow-lg'>
      <div className='relative'>
        <Image
          src="assets/images/San-Inmobiliaria-Logo.svg"
          width={128}
          height={87}
        />
      </div>
      <nav className='flex gap-4 items-center'>
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/alquileres"}>Alquileres</NavLink>
        <NavLink href={"/ventas"}>Ventas</NavLink>
        <NavLink href={"/tasaciones"}>Tasaciones</NavLink>
        <NavLink href={"/nosotros"}>Nosotros</NavLink>
        <Button/>
      </nav>
    </header>
  )
}

export default Header