import React, { useContext } from 'react'
import { Carro } from '../context'
import { Carta } from '../components'

export function CarritoRunRun() {
const {carr} = useContext(Carro)

  return (

<div>
{carr.map(x => (<Carta producto={x}/> ))
}
    </div>
  )
}
