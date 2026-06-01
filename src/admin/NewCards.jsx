import React, { useState } from "react";
import { useNavigate } from "react-router";
import DatosDB from "../service/Apidatos";

export function NewCard() {

  const navigate = useNavigate();
const [imagen, setImagen] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    cantidad: ""
  });

  // Captura cambios
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Enviar datos
  const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    let imageUrl = "";

    // subir imagen
    if (imagen) {

      const data = new FormData();

      data.append("file", imagen);

      data.append(
        "upload_preset",
        "restaurante"
      );

      const resCloud = await fetch(
        "https://api.cloudinary.com/v1_1/dwoybersw/image/upload",
        {
          method: "POST",
          body: data
        }
      );

      const cloudData = await resCloud.json();
console.log("Respuesta Cloudinary:", cloudData);

      imageUrl = cloudData.secure_url;
    }

    // guardar producto
    const nuevoProducto = {
      ...form,
      jpn: imageUrl
    };
console.log("Enviando...");
console.log(nuevoProducto);

    await DatosDB.postDatos(nuevoProducto);

    alert("Producto guardado");

    navigate("/admin");

  } catch (error) {

  console.log(error);

  if (
    error.response &&
    error.response.status === 400
  ) {

    alert("Ya existe un producto con ese nombre");

    return;

  }

  alert("Ocurrió un error");

}
};

  return (

    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-white w-[450px] rounded-2xl p-6 relative shadow-2xl">

        {/* cerrar */}
        <button
          onClick={() => navigate("/admin")}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl"
        >
          ×
        </button>

        <h2 className="text-4xl font-bold mb-6">
          Agregar Producto
        </h2>

        {/* IMPORTANTE */}
        <form
          className="space-y-5"
          onSubmit={handleSubmit}
        >

          {/* Nombre */}
          <div>

            <label className="block font-semibold mb-2">
              Nombre *
            </label>

            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* precio */}
          <div>

            <label className="block font-semibold mb-2">
              Precio *
            </label>

            <input
              type="number"
              name="precio"
              value={form.precio}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* categoria */}
          <div>

            <label className="block font-semibold mb-2">
              Categoría *
            </label>

            <select
              name="categoria"
              value={form.categoria}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="">
                Seleccionar categoría
              </option>

              <option value="Exotico">
                Exotico
              </option>

              <option value="caseros">
                caseros
              </option>

              <option value="gourmet">
                gourmet
              </option>

              <option value="bebidas">
                bebidas
              </option>

            </select>

          </div>


<div>

  <label className="block font-semibold mb-2">
    Imagen
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={(e) => setImagen(e.target.files[0])}
    className="w-full border border-gray-300 rounded-xl px-4 py-3"
  />

</div>
          {/* boton */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold transition"
          >
            Guardar Producto
          </button>

        </form>

      </div>

    </div>
  );
}