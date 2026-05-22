import { useNavigate } from "react-router";
import { useState } from "react";
//este es el registro insup
export function Insup() {
    const navigate=useNavigate();

  //para guardar lo del nombre y contraseña como en el login
    const [nombre,setNombre]=useState("")
const [contraseña, setContraseña]=useState("")
const [rol,setRol]=useState("user");
//para llamar la db 
const handleRegister = async()=>{
  try{
  const res = await fetch("http://localhost:4000/api/usuario/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          contraseña,
          rol
        })
      });

      const data = await res.json();

      console.log(data);

      if (res.ok) {
        alert("Usuario creado correctamente");
        navigate("/");
      } else {
        alert(data.message);
      }
  }catch(error){
    console.log(error);
    alert("Error al conectar con servidor")
  }
}


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 font-poppins">

      <div className="grid gap-8">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4">

          <div className="border-[20px] border-transparent rounded-[20px] bg-white dark:bg-gray-900 shadow-lg p-10 m-2">

            <h1 className="pt-8 pb-6 font-bold text-5xl text-center dark:text-gray-400">
              Sign Up
            </h1>

            <form className="space-y-4">

              {/* name*/}
              <div>
                <label className="mb-2 text-lg dark:text-gray-400">
                  username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  value={nombre}
                  onChange={(e)=>setNombre(e.target.value)}
                  className="border p-3 shadow-md rounded-lg w-full 
                  dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700
                  focus:scale-105 transition duration-300"
                />
              </div>

              {/* contra*/}
              <div>
                <label className="mb-2 text-lg dark:text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  value={contraseña}
                  onChange={(e)=>setContraseña(e.target.value)}
                  className="border p-3 shadow-md rounded-lg w-full 
                  dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700
                  focus:scale-105 transition duration-300"
                />
              </div>
             
{/* rol */}
<div>
  <label className="mb-2 text-lg dark:text-gray-400">
    Tipo de usuario
  </label>

  <select
    value={rol}
    onChange={(e) => setRol(e.target.value)}
    className="border p-3 shadow-md rounded-lg w-full 
    dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700
    focus:scale-105 transition duration-300"
  >
    <option value="user">Usuario normal</option>
    <option value="admin">Admin</option>
  </select>
</div>






              <button
                type="button"
                className="bg-gradient-to-r from-blue-500 to-purple-500 
                shadow-lg mt-6 p-2 text-white rounded-lg w-full 
                hover:scale-105 hover:from-purple-500 hover:to-blue-500 
                transition duration-300"
                onClick={handleRegister}
              >
                SIGN UP
              </button>
            </form>

            {/* Login link */}
            <div className="flex flex-col mt-4 items-center text-sm">
              <h3 className="dark:text-gray-300">
                ya tener cuenta?
                <button onClick={()=>navigate("/")}
                 className="ml-1 text-blue-400 hover:underline cursor-pointer">
                  Log In
                </button>
              </h3>
            </div>

            {/* Social buttons */}
            <div className="flex items-center justify-center mt-5 flex-wrap">

              {[
                "https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/",
                "https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/",
                "https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/",
                "https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/",
                "https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/",
                "https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
              ].map((src, i) => (
                <button
                  key={i}
                  className="hover:scale-105 duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img src={src} className="max-w-[25px]" />
                </button>
              ))}

            </div>

            {/* Terms */}
            <div className="text-gray-500 flex flex-col mt-4 items-center text-sm text-center">
              <p>
                By signing in, you agree to our{" "}
                <span className="text-blue-400 hover:underline cursor-pointer">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-blue-400 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}