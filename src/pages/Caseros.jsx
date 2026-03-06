import React from 'react'
import { Carta } from "../components"
import { Comidas } from "../data"

export  function Caseros() {
  return (
    <div>c      {Comidas.filter(x=>x.categoria==="Platos Caseros").map(x=>(<Carta producto={x}/>))}
    </div>
  )
}
