import Listado from "./components/Listado";
import { useState } from "react";
import './App.css';
import Formulario from "./components/Formulario";

const personasDefault = [
    {documento:"2323232sd",apellidos:"Perez",nombres:"Juan",alumno: true},
    {documento:"345354545242",apellidos:"Villarroel",nombres:"Elio",alumno: true},
    {documento:"3676767242",apellidos:"Perez",nombres:"Juan",alumno: false},
    {documento:"4343434",apellidos:"Perez",nombres:"Juan",alumno: false}
];

export default function App () {

    const [personas,setPersonas] = useState(personasDefault)

      const guardar = (persona) => {
        console.log(persona);

        let nuevasPersonas = [...personas];

        nuevasPersonas.push(persona)

        setPersonas(nuevasPersonas)


        

      }


  return (

    <div className="App">
      <h1> Componente app</h1>
      <div className="Contenedor">
        <Formulario
          guardar={(persona) => guardar(persona)}
        />
      <Listado
      personas={personas}
      />
      </div>

      

      
    </div>

  )
}
