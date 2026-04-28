import Listado from "./components/Listado";

import './App.css';
import Formulario from "./components/Formulario";

const personas = [
    {documento:"2323232sd",apellidos:"Perez",nombres:"Juan",alumno: true},
    {documento:"345354545242",apellidos:"Villarroel",nombres:"Elio",alumno: true},
    {documento:"3676767242",apellidos:"Perez",nombres:"Juan",alumno: false},
    {documento:"4343434",apellidos:"Perez",nombres:"Juan",alumno: false}
];

export default function App () {

  return (

    <div className="App">
      <h1> Componente app</h1>
      <div className="Contenedor">
        <Formulario/>
      <Listado
      personas={personas}
      />
      </div>

      

      
    </div>

  )
}
