import React from 'react'
import { useNavigate } from "react-router"
import {CartaAd} from "../components"
import{useState,useEffect}from"react"
import Apidatos from "../service/Apidatos"

export function PanelAd() {
    const [comida,setComidas]=useState([]);
  
  const navigate=useNavigate();
  const datosDB=async()=>{
    const comidasdb=await Apidatos.getDatos();
    setComidas(comidasdb.data);
    console.log(comidasdb.data)
  }
  //llamo la bd para recibir la informacion de las cartas
  useEffect(()=>{
    datosDB()
  },[])
  
    return (
      <div className="bg-gray-200 min-h-screen p-6"> 
    {/* esto crea las cartas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {comida.map(x => (
          <CartaAd key={x._id} producto={x} 
          />
        ))}
    
    </div>
      </div>
  
    )
}
