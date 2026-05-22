import { useState } from "react";
import { useNavigate } from "react-router";
//el login on
export function On() {
  
const navigate=useNavigate();

//conectamos con la bd
  const handleLogin=async()=>{
 try {
    const res = await fetch("http://localhost:4000/api/usuario/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nombre,
        contraseña
      })
    });
//mensajes de error y condiciones para que entre
    const data = await res.json();

    console.log(data);

    if (res.ok) {

      alert("Login correcto");

      const usuario=data.usuario;
      // guardar usuario
      localStorage.setItem("usuario", JSON.stringify(usuario));

      if(usuario.rol==="admin"){
        navigate("/admin");
      }else{

      navigate("/home");
      }

    } else {
      alert(data.message);
    }

  } catch (error) {
    console.log(error);
    alert("Error al conectar con servidor");
  }

  }
//para guardar nombre y la contraseña
  const [nombre,setNombre]=useState("");
  const [contraseña,setContraseña]=useState("");


  //el login que agarre de tailwind
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-animated-gradient relative overflow-hidden">

      {/* Background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-16 h-16 rounded-full bg-white/10 floating"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white/15 floating"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-white/20 floating"></div>
        <div className="absolute top-1/4 right-20 w-12 h-12 rounded-full bg-white/10 floating"></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          
          </div>
          

          

          {/* los cuadritos*/}
          <div className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Username"
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
              className="w-full bg-white/20 text-white placeholder-white/50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white/50"
            />

            <input
              type="password"
              placeholder="Password"
              value={contraseña}
              onChange={(e)=>setContraseña(e.target.value)}
              className="w-full bg-white/20 text-white placeholder-white/50 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>

          {/* Button */}
          <button onClick={handleLogin}
          className="w-full mt-6 bg-white text-indigo-600 py-3 rounded-lg font-semibold hover:bg-white/90 transition">
            Pasar
          </button>

          <div className="mt-4 text-center">
            <p className="text-white/70 text-sm cursor-pointer hover:text-white">
              se te olvido jaja?
            </p>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-white/50 text-sm">
            no tener cuenta?{" "}
            <button onClick={()=>navigate("/n")}
             className="text-white hover:underline cursor-pointer">
              registrarse
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}