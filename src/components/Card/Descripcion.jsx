import React from 'react'

export function Descripcion({titulo,elprecio}) {  
  return (
    <div className='flex justify-between items-center'>
      <h2 className='text-xl font-bold'>{titulo}</h2>
      <span className='text-green-600 font-semibold'>
        ${elprecio}
      </span>
    </div>
  )
}
