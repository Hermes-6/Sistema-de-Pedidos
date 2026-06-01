import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import DatosDB from "../service/Apidatos";

export function EditCard() {

    const { id } = useParams();
    const navigate = useNavigate();
    //guarda los datos del formulario
    const [form, setForm] = useState({
        nombre: "",
        precio: "",
        categoria: ""
    });
//de donde se obtine los productos
    const cargarDatos = async () => {
        const res = await DatosDB.getDatos();
        const producto = res.data.find(x => x._id === id);
        setForm(producto);
    };

    useEffect(() => {
        cargarDatos();
    }, []);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await DatosDB.updateDatos(id, form);
            alert("Producto actualizado");
            navigate("/admin");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl w-[450px]">
                <h2 className="text-3xl font-bold mb-5">
                    Editar Producto
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                >
                    <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-full border p-3 rounded-xl"
                    />
                    <input
                        type="number"
                        name="precio"
                        value={form.precio}
                        onChange={handleChange}
                        placeholder="Precio"
                        className="w-full border p-3 rounded-xl"
                    />
                    <select
                        name="categoria"
                        value={form.categoria}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-xl"
                    >
                        <option value="Exotico">Exotico</option>
                        <option value="caseros">caseros</option>
                        <option value="gourmet">gourmet</option>
                        <option value="bebidas">bebidas</option>
                    </select>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl"
                    >
                        Guardar cambios
                    </button>
                </form>
            </div>
        </div>
    )
}