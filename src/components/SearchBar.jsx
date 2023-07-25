import React from 'react'
import Select from './Select'
import Input from './Input'
import SearchPropertiesButton from './SearchPropertiesButton'

const SearchBar = () => {
  return (
    <div className='bg-warmGray800 p-8 w-[1008px]'>
        <form>
            <div className='flex flex-col gap-6'>
                <div className='flex gap-4'>
                    <Select name="Barrio" options={["25 de Mayo	", "Villa Sarita", "Villa Cabello", "Centro"]}/>        
                    <Select name="Tipo de Unidad" options={["Casa", "Departamento"]}/>        
                    <Select name="Operación" options={["Alquiler", "Venta"]}/>        
                    <Select name="Ambientes" options={["1", "2", "3 o más"]}/>        
                </div>
                <div className='flex gap-4 items-center'>
                    <p>Rango de Precios</p> 
                    <div  className='flex gap-4 items-center flex-grow'>
                        <div className='flex gap-4 items-center'>
                            <Input type="number" id="min-price" dir={"rtl"} placeholder={"0"}></Input>
                            <span> - </span>
                            <Input type="number" id="max-price" dir={"rtl"} placeholder={"200.000"}></Input>
                        </div>
                        <div className='flex gap-4 items-center flex-grow'>
                            <div className='flex gap-2 items-center'>
                                <label htmlFor="pesos" className='mr-1'>Pesos</label>
                                <input type="radio" name="currency" id="pesos" />
                                <label htmlFor="dolares" className='mr-1'>Dólares</label>
                                <input type="radio" name="currency" id="dolares"/>
                                </div>
                            <SearchPropertiesButton/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchBar