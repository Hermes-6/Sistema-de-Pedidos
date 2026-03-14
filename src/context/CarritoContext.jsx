import React from 'react'
import { createContext,useState} from 'react'
//creo el contexto
export const Carro=createContext()
    //aqui empizan las condiciones y funciones :c
export function CarritoContext({children}) {
    const [carr,añadir]=useState([])

    
const borrarTodo=()=>{añadir([])}

const borrarCantidad=(producto)=>{
const existe=carr.find(x=>x.id===producto.id)
    if(existe.cantidad>1){
        const quitar=carr.map(x=>{return x.id===producto.id?{...x,cantidad:x.cantidad-1}:x})
    añadir(quitar)
    }else{
        const borrar=carr.filter(x=>x.id!==producto.id)
        añadir(borrar)
    }
    };

const añadirCarro=(producto,numeroactual)=>{
const existe=carr.find(x=>x.id===producto.id)

    if(existe){
    const sumarCantidad=carr.map(x=>{return x.id===producto.id?{...x,cantidad:x.cantidad+1}:x})
añadir(sumarCantidad)
}else{
    añadir([...carr,{...producto,cantidad:1}])
}
};

return (
<Carro.Provider value={{carr,añadirCarro,borrarTodo,borrarCantidad}}>
    {children}
</Carro.Provider>
)
}
