import React, { useContext } from 'react'
import { Carro } from '../context'
import { Tarjet } from '../components'

export function CarritoRunRun() {
const {carr} = useContext(Carro)
console.log(carr)

  return (

<div>
{carr.map(x => (<Tarjet key={x.id} producto={x}/> ))
}
    </div>
  )
}
