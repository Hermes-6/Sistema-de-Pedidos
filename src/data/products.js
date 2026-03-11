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
    jpn: imagen,
    cantidad:0
  },
  {
        id:2,
    nombre:"???",
    precio:"FREE",
    categoria:"Platos gourmet",
    jpn:A,
    cantidad:0
  },
  {
        id:3,
   precio:20,
   nombre:"Gastritis",
   jpn:GAS,
   categoria:"Platos gourmet",
   cantidad:0
  },
  {
       id:4,
    precio:100,
    nombre:"caviar de pollo",
    jpn:H,
    categoria:"Platos exoticos",
    cantidad:0
  },
  {
        id:5,
    precio:100,
    nombre:"Elixir de la Vida",
    jpn:Z,
    categoria:"bebidas",
    cantidad:0
  },
  {
        id:6,
    precio:100,
    nombre:"holas",
    jpn:Z,
    categoria:"Platos Caseros",
    cantidad:0
  },

];

export default Comidas;