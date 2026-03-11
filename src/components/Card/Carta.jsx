import React from 'react'
import { Botton } from './Botton'
import { Descripcion } from './Descripcion'

export function Carta({producto}) {
  const{nombre,jpn,precio,categoria,}=producto


  return (
    
    <div className='w-80 bg-white rounded-x1 shadow-md overflow-hidden'>
      <img src={jpn} className='w-full h-55 object-cover'/>
      <div className='p-4'>
        <Descripcion titulo={nombre} elprecio={precio}/>
        <span className='text-sm text-blue-500 block mt-2'>
          {categoria}
        </span>
        <Botton producto={producto}/>
      </div>
    </div>
    
  )
}


