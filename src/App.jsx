import Listado from "./components/Listado";
import { useState } from "react";
import './App.css';
import Formulario from "./components/Formulario";

const personasDefault = [
  { id: 1, documento: "2323232sd", apellidos: "Perez", nombres: "Juan", alumno: true },
  { id: 2, documento: "345354545242", apellidos: "Villarroel", nombres: "Elio", alumno: true },
  { id: 3, documento: "3676767242", apellidos: "Perez", nombres: "Juan", alumno: false },
  { id: 4, documento: "4343434", apellidos: "Perez", nombres: "Juan", alumno: false }
];

export default function App() {

  const [personas, setPersonas] = useState(personasDefault)

  const guardar = (persona) => {
    console.log(persona);

    let nuevasPersonas = [...personas];

    nuevasPersonas.push(persona)

    setPersonas(nuevasPersonas)



  }
  const eliminar = (persona_id) => {
    const nuevasPersonas = personas.filter((persona) => persona.id != persona_id)
    console.log (nuevasPersonas)
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
          eliminar={(persona_id) => eliminar(persona_id)}
        />
      </div>




    </div>

  )
}
