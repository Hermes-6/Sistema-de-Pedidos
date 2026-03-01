import React from "react"
import {Navbar} from "./components"
import { Carta } from "./components"
import { Comidas } from "./data"


function App() {
  return (
<><Navbar/>
    <div className="min-h-screen bg-mauve-800 flex justify-center items-center ">
      
      {Comidas.map(x => (
        <Carta 
          producto={x} 
        />
      ))}
    </div>
    </>
  )
}

export default App