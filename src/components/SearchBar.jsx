import React from 'react'
import Select from './Select'
import Input from './Input'
import SearchPropertiesButton from './SearchPropertiesButton'

const SearchBar = () => {
  return (
    <div className='bg-warmGray800 p-8 lg:w-[1008px]'>
        <form>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <Select name="Barrio" options={["25 de Mayo	", "Villa Sarita", "Villa Cabello", "Centro"]}/>        
                    <Select name="Tipo de Unidad" options={["Casa", "Departamento"]}/>        
                    <Select name="Operación" options={["Alquiler", "Venta"]}/>        
                    <Select name="Ambientes" options={["1", "2", "3 o más"]}/>        
                </div>
                <div className='flex flex-col lg:flex-row gap-4 items-center'>
                    <div className='flex gap-4 flex-col lg:flex-row items-center flex-grow'>
                        <p>Rango de Precios</p>
                        <div className='flex flex-col items-center gap-4'>
                            <div className='flex gap-4 items-center'>
                                <Input type="number" id="min-price" dir={"rtl"} placeholder={"0"}></Input>
                                <span> - </span>
                                <Input type="number" id="max-price" dir={"rtl"} placeholder={"200.000"}></Input>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <label htmlFor="pesos" className='mr-1'>Pesos</label>
                                <input type="radio" name="currency" id="pesos" />
                                <label htmlFor="dolares" className='mr-1'>Dólares</label>
                                <input type="radio" name="currency" id="dolares"/>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-4 items-center flex-grow'>
                        <SearchPropertiesButton/>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default SearchBar