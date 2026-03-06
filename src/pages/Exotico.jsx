import React from 'react'

export function Exotico() {
  return (
<div>

    <div className="min-h-screen  flex justify-center items-center ">
      {Comidas.map(x => (
        <Carta 
          producto={x} 
        />
      ))}
  
  </div></div>    
  )
}
