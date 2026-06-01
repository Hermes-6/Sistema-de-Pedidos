import React from 'react'
import { Descripcion } from '../Card'
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from 'react-router';
import Apidatos from '../../service/Apidatos';

export function CartaAd({producto, recargar}) {

    const {nombre,jpn,precio,categoria,_id}=producto;

    const navigate = useNavigate();

    // eliminar
    const eliminarProducto = async () => {

        const confirmar = window.confirm(
            "¿Seguro que quieres eliminar este producto?"
        );

        if(!confirmar) return;

        try {

            await Apidatos.deleteDatos(_id);

            alert("Producto eliminado");

            recargar();

        } catch (error) {

            console.log(error);

        }
    };

    return (

        <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition'>

            <img
  src={jpn || "https://via.placeholder.com/300"}className='w-full h-40 object-cover'/>

            <div className='p-4'>

                <Descripcion
                    titulo={nombre}
                    elprecio={precio}
                />

                <span className='inline-block mt-2 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded'>
                    {categoria}
                </span>

                {/* BOTONES */}
                <div className='mt-4 flex gap-3'>

                    {/* EDITAR */}
                    <button
                        onClick={() => navigate(`/edit/${_id}`)}
                        className='flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg'
                    >
                        <Pencil size={18}/>
                        Editar
                    </button>

                    {/* ELIMINAR */}
                    <button
                        onClick={eliminarProducto}
                        className='flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg'
                    >
                        <Trash2 size={18}/>
                        Eliminar
                    </button>

                </div>

            </div>

        </div>
    )
}
