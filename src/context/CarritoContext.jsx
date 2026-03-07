import React from 'react'
import { createContext,useState} from 'react'

export const Carro=createContext()

export function CarritoContext({children}) {
const [carr,añadir]=useState([])
const añadirCarro=(producto)=>{
    añadir([...carr,producto])
}
return (
<Carro.Provider value={{carr,añadirCarro}}>
    {children}
</Carro.Provider>
)
}
