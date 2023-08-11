import React from "react";
import Image from "next/image";

const PropertyFeatures = ({metres, ambience, features}) => {
    return(
        <div className='p-8 bg-warmGray700 rounded-lg w-full
         max-w-[784px]'>
            <h3 className='text-2xl font-semibold border-b-4 border-main pb-4 mb-6 inline-block'>Características</h3>
            <div className='flex flex-col gap-2'>
                <div className='flex gap-4 mb-6'>
                    <div className='flex gap-2'>
                        <Image 
                            src={'/assets/icons/property-plan.svg'}
                            width={16}    
                            height={16}    
                        />
                        <p>{`${metres} mt2`}</p>
                    </div>
                    <div className='flex gap-2'>
                        <Image 
                            src={'/assets/icons/bed.svg'}
                            width={16}    
                            height={16}    
                        />
                        <p>{`${ambience} ambientes`}</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {
                        features.map(feature => (
                            <p className="text-warmGray400">{`• ${feature}`}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertyFeatures