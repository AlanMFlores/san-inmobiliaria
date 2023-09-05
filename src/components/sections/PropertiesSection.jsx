import React, { useEffect, useState } from 'react'
import PropertyCardWide from '../PropertyCardWide'
import SortProperties from '../SortProperties'
import propertiesData from '../../data/data.json'

const PropertiesSection = ({operationFilter}) => {
  const [sortedProperties, setSortedProperties] = useState([]);
  const [currentSortOption, setCurrentSortOption] = useState('Destacado');

  useEffect(() => {
    const filteredProperties = operationFilter ? propertiesData.properties.filter(property => property.operation === operationFilter) : propertiesData.properties;

    const sortProperties = (option) => {
      switch(option) {
        case 'Menor precio':
          return filteredProperties.slice().sort((a,b) => (a.price) - (b.price));
        case 'Mayor precio':
          return filteredProperties.slice().sort((a, b) => (b.price) - (a.price));
          default:
            return filteredProperties
      }
    }

    const sorted = sortProperties(currentSortOption);
    setSortedProperties(sorted);

  }, [currentSortOption, operationFilter])

  const handleSortChange = (selectedOption) => {
    setCurrentSortOption(selectedOption);
  }


  return (
    <>
      <div className='mx-8 lg:mx-32'>
        <SortProperties onSortChange={handleSortChange}/>
      </div>
      <section className='flex flex-col gap-6 mx-8 lg:mx-32 mb-12'>
        {
          sortedProperties.map(({title, zone, ambience, slug, metres, price, cover, description, operation}) => (
            <PropertyCardWide title={title} zone={zone} slug={slug} cover={cover} ambience={ambience} metres={metres} price={price} description={description} operation={operation} key={title}/>
          ))
        } 
      </section>
      <section className='flex justify-center'>
      </section>
    </>
    )
}

export default PropertiesSection