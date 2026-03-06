import imagen from "../assets/PRUEBA.jpeg"
import H from "../assets/HUEVOS.jpeg"
import A from "../assets/A.jpeg"
import GAS from "../assets/RIÑON.jpeg"
import Z from"../assets/j.jpeg"

const Comidas = [
  {
    id:1,
    nombre: "Mogondrilo",
    precio: 1500,
    categoria: "Platos exoticos",
    jpn: imagen
  },
  {
        id:2,
    nombre:"???",
    precio:"FREE",
    categoria:"platos gourmet",
    jpn:A,
  },
  {
        id:3,
   precio:20,
   nombre:"Gastritis",
   jpn:GAS,
   categoria:"Platos gourmet"
  },
  {
       id:4,
    precio:100,
    nombre:"caviar de pollo",
    jpn:H,
    categoria:"Platos exoticos"
  },
  {
        id:5,
    precio:100,
    nombre:"Elixir de la Vida",
    jpn:Z,
    categoria:"bebidas"
  },
  {
        id:6,
    precio:100,
    nombre:"holas",
    jpn:Z,
    categoria:"Platos Caseros"
  },

];

export default Comidas;