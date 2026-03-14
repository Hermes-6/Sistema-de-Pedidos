import React from 'react'
import { Botton } from './Botton'
import { Descripcion } from './Descripcion'

export function Carta({producto}) {
  const{nombre,jpn,precio,categoria,}=producto


  return (

    <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition'>
      <img src={jpn} className='w-full h-40 object-cover'/>
      <div className='p-4'>
        <Descripcion titulo={nombre} elprecio={precio}/>
        <span className='inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded'>
          {categoria}
        </span>
        <div className='mt-4'>

        <Botton producto={producto}/>
        </div>

      </div>
    </div>
    

  )
}


