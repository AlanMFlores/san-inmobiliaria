import React from 'react'
import Select from './Select'
import Image from 'next/image'

const RentalSaleFilter = () => {
  return (
    <section className='mx-8 lg:mx-32'>
        <div className='flex flex-col lg:flex-row gap-4'>
            <Select name="Barrio" options={["25 de Mayo	", "Villa Sarita", "Villa Cabello", "Centro"]}/>        
            <Select name="Tipo de Unidad" options={["Casa", "Departamento"]}/>        
            <Select name="Ambientes" options={["1", "2", "3 o más"]}/>
            <div className='relative flex-grow'>
                <button className='flex pl-4 pr-1 py-2 items-center justify-between gap-2 w-full bg-warmGray700'>
                    <p>Precio</p>
                    <Image 
                        src={'/assets/icons/chevron-down.svg'}
                        width={14}    
                        height={14}    
                    />    
                </button>        
                <div className='absolute hidden flex-col items-center gap-4 bg-warmGray700 p-2 min-w-[128px]'>
                    <div className='flex gap-4 items-center'>
                        <input type="number" placeholder='0' dir='rtl' className='w-full px-4 py-2 bg-warmGray800 outline-none'/>
                        <span> - </span>
                        <input type="number" placeholder='200.000' dir='rtl' className='w-full px-4 py-2 bg-warmGray800 outline-none'/>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <label htmlFor="pesos" className='mr-1'>Pesos</label>
                        <input type="radio" name="currency" id="pesos" />
                        <label htmlFor="dolares" className='mr-1'>Dólares</label>
                        <input type="radio" name="currency" id="dolares"/>
                    </div>
                </div>
            </div>
            <button className='flex-grow px-4 py-2 bg-main text-white font-semibold'>Buscar</button>
        </div>
        <div className='flex gap-2 items-center justify-end my-6'>
            <p>Ordenar por:</p>
            <select className='bg-warmGray700 px-4 py-2 outline-none'>
                <option className='text-white'selected>{"Destacado"}</option>
                <option className='text-white'>{"Menor precio"}</option>
                <option className='text-white'>{"Mayor precio"}</option>
                <option className='text-white'>{"Más reciente"}</option>
                <option className='text-white'>{"Menos reciente"}</option>
    </select>
        </div>
    </section> 
  )
}

export default RentalSaleFilter