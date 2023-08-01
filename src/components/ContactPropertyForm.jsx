import React from 'react'
import Input from './Input'

const ContactPropertyForm = () => {
  return (
    <form>
        <div className='bg-warmGray700 px-4 py-8 rounded-lg'>
            <h4 className='text-2xl font-semibold mb-4'>Contacte con nosotros</h4>
            <div className='flex flex-col gap-2'>
                <Input type={"text"} placeholder={"Nombre"} bg={'bg-warmGray800'}/>
                <Input type={"number"} placeholder={"Teléfono"} bg={'bg-warmGray800'}/>
                <Input type={"email"} placeholder={"Email"} bg={'bg-warmGray800'}/>
                <textarea className='resize-none w-full px-4 py-2 bg-warmGray800 outline-none' placeholder='Tu consulta...'></textarea>
                <input type='submit' value='Enviar Consulta' className='cursor-pointer w-full px-4 py-2 bg-main text-base font-semibold mt-4'/>
            </div>
        </div>
    </form>
  )
}

export default ContactPropertyForm