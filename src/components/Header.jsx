import {React, useState} from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import Button from './Button'
import Link from 'next/link'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='flex flex-col xl:flex-row items-center justify-between px-32 py-7 shadow-lg'>
      <div className='flex flex-col gap-6 items-center'>
        <div className='relative'>
          <Link href={'/'}>
            <Image
              src="/assets/images/San-Inmobiliaria-Logo.svg"
              width={128}
              height={87}
            />
          </Link>
        </div>
        <button className='block xl:hidden' onClick={handleToggleMenu}>
          <Image 
            src={'/assets/icons/menu.svg'}
            width={40}
            height={40}
            alt='menu icon'
          />
        </button>
      </div>
      <nav className={`xl:flex flex-col xl:items-center ${
          isOpen ? 'flex' : 'hidden'
        } xl:flex-row gap-4 items-center transition-all duration-300`}
      >
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/alquiler"}>Alquiler</NavLink>
        <NavLink href={"/venta"}>Venta</NavLink>
        <NavLink href={"/tasaciones"}>Tasaciones</NavLink>
        <NavLink href={"/nosotros"}>Nosotros</NavLink>
        <Button/>
      </nav>
    </header>
  )
}

export default Header