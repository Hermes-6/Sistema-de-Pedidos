import React from 'react'
import { Carta } from "../components"
import { Comidas } from "../data"

export function Bebidas() {
  return (
    <div className='min-h-screen  flex justify-center items-center '>    
        {Comidas.filter(x=>x.categoria==="bebidas").map(x=>(<Carta producto={x}/>))}
    </div>
  )
}
