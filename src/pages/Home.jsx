import { useNavigate } from "react-router"
import { Carta } from "../components"
import { Comidas } from "../data"

export function Home() {
    
  return (
    <>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Comidas.map(x => (
        <Carta producto={x} 
        />
      ))}
  
  </div>
    </>

  )
}


    