
import React, { useContext, useState } from 'react'
import { Carro } from '../../context';

export function Botton({ producto }) {

  const { carr, añadirCarro, borrarCantidad } = useContext(Carro);

const productoCarrito = carr.find(
  item => item._id === producto._id
);

const cantidad = productoCarrito
  ? productoCarrito.cantidad
  : 0;

  const agregarProducto = () => {
    cambiarnumero(1);
    añadirCarro(producto);
  };

  const mas = () => {
    cambiarnumero(x => x + 1);
    añadirCarro(producto);
  };

  const menos = () => {

    if (numeroactual > 1) {

      cambiarnumero(x => x - 1);
      borrarCantidad(producto);

    } else {

      cambiarnumero(0);
      borrarCantidad(producto);

    }
  };

return (

  <div className="mt-4">

    {cantidad === 0 ? (

      <button
        className="w-full bg-blue-600 text-white py-2 rounded-lg"
        onClick={() => añadirCarro(producto)}
      >
        + Agregar
      </button>

    ) : (

      <div className="flex justify-between items-center">

        <button
          className="w-10 h-10 bg-red-500 text-white rounded-lg"
          onClick={() => borrarCantidad(producto)}
        >
          -
        </button>

        <span className="text-xl font-bold">
          {cantidad}
        </span>

        <button
          className="w-10 h-10 bg-blue-500 text-white rounded-lg"
          onClick={() => añadirCarro(producto)}
        >
          +
        </button>

      </div>

    )}

  </div>
);
}