import React from 'react'
import { Carta } from "../components"
import { Comidas } from "../data"

export function Bebidas() {
  return (
    <div>      {Comidas.filter(x=>x.categoria==="bebidas").map(x=>(<Carta producto={x}/>))}
    </div>
  )
}
