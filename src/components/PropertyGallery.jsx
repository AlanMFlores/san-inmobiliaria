import Image from 'next/image'
import { useState } from 'react';

const PropertyGallery = ({images}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageOverlay, setImage] = useState('');

    const handleImageOverlay = (image) => {
     setIsVisible(true)
     setImage(image)
    }
    
    const closeOverlay = () => {
        setIsVisible(false);
    }

  return (
    <div className='p-8 bg-warmGray700 w-full xl:w-[784px] max-w-[784px] rounded-lg'>
            <div className='w-full grid grid-cols-2 justify-center'>
                {
                    images.map(image => (
                        (
                        <div className='h-60 w-full col-start-1 col-end-3 duration-100'>
                            <Image
                                src={image}
                                width={88}
                                height={128}
                                className='w-full h-full object-cover cursor-pointer duration-100 hover:opacity-60'
                                onClick={() => handleImageOverlay(image)}
                            />
                        </div>
                    )))
                }
                {
                    isVisible && (
                        <div className={`fixed inset-0 z-50 bg-warmGrayOverlay`}>
                            <div className='relative'>
                                <div className='absolute top-6 right-6 z-[100]'>
                                    <Image
                                        src={'/assets/icons/cross.svg'}
                                        width={32}
                                        height={32}
                                        className='cursor-pointer'
                                        onClick={closeOverlay}
                                    />
                                </div>
                            </div>
                            <div className='relative w-full h-screen inset-0 grid place-content-center'>
                                <Image
                                    src={imageOverlay}
                                    width={512}
                                    height={512}
                                />
                            </div>
                        </div>
                    )
                }
            </div>
    </div>
  )
}

export default PropertyGallery