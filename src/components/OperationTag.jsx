import React from 'react'

const OperationTag = ({position}) => {
  return (
    <p className={`bg-main text-white text-sm font-semibold px-4 py-[2px] rounded-[4px] absolute z-50 ${position || '-top-4 -left-4'}`}>
        Venta
    </p>
  )
}

export default OperationTag