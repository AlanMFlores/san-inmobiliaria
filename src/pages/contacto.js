import React from 'react'
import Header from '@component/components/Header'
import Footer from '@component/components/Footer'
import Breadcrumbs from '@component/components/Breadcrumbs'
import Image from 'next/image'
import Input from '@component/components/Input'

const Contact = () => {
  return (
    <>
      <Header/>
      <Breadcrumbs page={"Contacto"}/>
      <section className='mb-10 lg:mb-20 mx-8 lg:mx-32'>
        <h1 className='my-8 text-4xl font-bold text-center'>Contacto</h1>
        <div>
          <p className='text-center'>Disponemos de los siguientes medios de contacto, o bien puede hacer uso del formulario para enviar su consulta:</p>
          <div className='flex flex-col md:flex-row justify-center gap-16 mt-8'>
            <div className='flex flex-col gap-6'>
              <div className='flex gap-2'>
                <Image 
                  src={'/assets/icons/phone.svg'}
                  width={24}
                  height={24}
                />
                <p className='font-semibold'>376-4908152</p>
              </div>
              <div className='flex gap-2'>
                <Image
                  src={'/assets/icons/mail.svg'}
                  width={24}
                  height={24}
                />
                <p className='font-semibold'>saninmobiliaria@gmail.com</p>
              </div>
              <div className='flex gap-2'>
                <Image 
                  src={'/assets/icons/instagram.svg'}
                  width={24}
                  height={24}
                />
                <Image 
                  src={'/assets/icons/facebook.svg'}
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <form>
              <div className='grid lg:grid-cols-2 gap-4'>
                <div>
                 <Input type={"text"} id={"name"} placeholder={"Nombre"} width={"full"}/>
                </div>
                <div>
                  <Input type={"text"} id={"phone"} placeholder={"Teléfono"} width={"full"}/>
                </div>
                <div>
                  <Input type={"text"} id={"email"} placeholder={"Email"} width={"full"}/>
                </div>
                <div>
                  <Input type={"text"} id={"subject"} placeholder={"Asunto"} width={"full"}/>
                </div>
                <div className='col-span-full'>
                  <textarea className='resize-none w-full px-4 py-2 bg-warmGray700 outline-none' placeholder='Tu consulta...'></textarea>
                </div>
              </div>
              <div className='col-span-full mt-2'>
                <input type='submit' value='Enviar Consulta' className='cursor-pointer w-full px-4 py-2 bg-main text-base font-semibold'/>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Contact