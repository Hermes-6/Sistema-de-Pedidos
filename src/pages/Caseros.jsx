import React from 'react'
import { Carta } from "../components"
import { Comidas } from "../data"
import { useContext } from 'react'


export  function Caseros() {
  return (
    
    <div className='min-h-screen  flex justify-center items-center '> 
           {Comidas.filter(x=>x.categoria==="Platos Caseros").map(x=>(<Carta producto={x}/>))}
    </div>
   
  )
}
