import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='flex flex-col lg:flex-row px-16 lg:px-32 py-14 bg-main gap-20 items-start lg:items-center justify-center'>
      <div className='relative h-32 w-64'>
        <Image
          src={"/assets/images/San-Inmobiliaria-Logo.svg"}
          fill
          style={{objectFit:"contain", width:"100%", height:"100%"}}
        />
      </div>
      <div className='flex flex-col items-start lg:flex-row lg:items-center gap-20'>
        <div>
          <h3 className='mb-8 font-semibold text-2xl'>Enlaces útiles</h3>
          <ul className='flex flex-col gap-6'>
            <li>
              <Link className="flex gap-2 text-base" href={"/propiedades"}>
                <Image 
                  src={"/assets/icons/chevron-right.svg"}
                  width={16}
                  height={16}
                  />
                <p>Propiedades</p>
              </Link>
            </li>
            <li>
              <Link className="flex gap-2 text-base" href={"/tasaciones"}>
                <Image 
                  src={"/assets/icons/chevron-right.svg"}
                  width={16}
                  height={16}
                  />
                <p>Tasaciones</p>
              </Link>
            </li>
            <li>
              <Link className="flex gap-2 text-base" href={"/nosotros"}>
                <Image 
                  src={"/assets/icons/chevron-right.svg"}
                  width={16}
                  height={16}
                  />
                <p>Nosotros</p>
              </Link>
            </li>
          </ul>
        </div> 
        <div>
          <h3 className='mb-8 font-semibold text-2xl'>Contactanos</h3>
          <ul className='flex flex-col gap-6'>
            <li className='text-base flex gap-2'>
                <Image 
                  src={"/assets/icons/location-marker.svg"}
                  width={24}
                  height={24}
                  />
                <p>Posadas, Misiones</p>
            </li>
            <li className='text-base flex gap-2'>
                <Image 
                  src={"/assets/icons/phone.svg"}
                  width={24}
                  height={24}
                  />
                <p>376-4908152</p>
            </li>
            <li className='text-base flex gap-2'>
                <Image 
                  src={"/assets/icons/mail.svg"}
                  width={24}
                  height={24}
                  />
                <p>saninmobiliaria@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className='mb-8 font-semibold text-2xl'>Redes sociales</h3>
        <div className='flex gap-4'>
          <Image 
            src={"/assets/icons/instagram.svg"}
            width={24}
            height={24}
            alt='instagram logo'
          />
          <Image 
            src={"/assets/icons/facebook.svg"}
            width={24}
            height={24}
            alt='instagram logo'
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer