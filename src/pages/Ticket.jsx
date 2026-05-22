
import React, { useContext } from 'react'
import { Carro } from '../context/CarritoContext'

export function Ticket() {

  const { carr } = useContext(Carro)

  // calcular total
  const total = carr.reduce((acc, item) => {
    return acc + (item.precio * item.cantidad)
  }, 0)

  // fecha actual
  const fecha = new Date().toLocaleString()

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-xl rounded-xl mt-10">

      <h1 className="text-2xl font-bold text-center mb-2">
         TICKET
      </h1>

      <p className="text-center text-sm text-gray-500 mb-4">
        {fecha}
      </p>

      <hr className="mb-4"/>

      {/* si no hay nada pues no hay*/}
      {carr.length === 0 ? (
        <p className="text-center text-gray-500">
          No hay productos
        </p>
      ) : (
        <>
          {carr.map((item) => (
            <div key={item._id} className="mb-3 border-b pb-2">

              <div className="flex justify-between">
                <span className="font-semibold">
                  {item.nombre}
                </span>
                <span>
                  ${(item.precio * item.cantidad).toFixed(2)}
                </span>
              </div>

              <div className="text-xs text-gray-500">
                {item.cantidad} x ${item.precio}
              </div>

            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* MENSAJE */}
          <p className="text-center text-sm mt-4 text-gray-500">
            Gracias por tu compra 
          </p>
        </>
      )}
    </div>
  )
}