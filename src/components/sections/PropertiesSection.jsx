import React from 'react'
import PropertyCardWide from '../PropertyCardWide'
import Pagination from '../Pagination'
import propertiesData from '../../data/data.json'

const PropertiesSection = ({operationFilter}) => {
  const properties = operationFilter ? propertiesData.properties.filter(property => property.operation === operationFilter) : propertiesData.properties

  return (
    <>
      <section className='flex flex-col gap-6 mx-8 lg:mx-32 mb-12'>
        {
          properties.map(({title, zone, ambience, metres, price, cover, description, operation}) => (
            <PropertyCardWide title={title} zone={zone} cover={cover} ambience={ambience} metres={metres} price={price} description={description} operation={operation} key={title}/>
          ))
        } 
      </section>
      <section className='flex justify-center'>
        <Pagination/>
      </section>
    </>
    )
}

export default PropertiesSection