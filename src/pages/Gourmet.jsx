import React from 'react'
import { Carta } from "../components"
import { Comidas } from "../data"

export  function Gourmet() {
  return (
    <div>      {Comidas.filter(x=>x.categoria==="Platos gourmet").map(x=>(<Carta producto={x}/>))}
    </div>
  )
}
