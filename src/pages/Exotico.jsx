import React from 'react'
import { Carta } from "../components"
import { Comidas } from "../data"

export function Exotico() {
 

 return (
    
<div>

    <div className="min-h-screen  flex justify-center items-center ">
      {Comidas.filter(x=>x.categoria==="Platos exoticos").map(x=>(<Carta producto={x}/>))}
  
  </div>
  </div>    
  )
}

