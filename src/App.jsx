import React from "react"
//importo la carpeta de components donde tengo la carta
import { Carta } from "./components"
//importo los arreglos donde le cambie el nombre a Comidas
import { Comidas } from "./data"


function App() {
//no de que hace el comidas.map y el key y producto
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {Comidas.map(x => (
        <Carta 
          producto={x} 
        />
      ))}
    </div>
  )
}

export default App