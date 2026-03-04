import imagen from "../assets/PRUEBA.jpeg"
import H from "../assets/HUEVOS.jpeg"
import A from "../assets/A.jpeg"
import GAS from "../assets/RIÑON.jpeg"
import Z from"../assets/j.jpeg"

const Comidas = [
  {
    nombre: "Mogondrilo",
    precio: 1500,
    categoria: "Platos exóticos",
    jpn: imagen
  },
  {
    nombre:"???",
    precio:"FREE",
    categoria:"platos gourmet",
    jpn:A,
  },
  {
   precio:20,
   nombre:"Gastritis",
   jpn:GAS,
   categoria:"Platos gourmet"
  },
  {
    precio:100,
    nombre:"caviar de pollo",
    jpn:H,
    categoria:"Platos exoticos"
  },
  {
    precio:20,
    nombre:"probando",
    jpn:Z,
    categoria:"Platos caseros"
  },

];

export default Comidas;