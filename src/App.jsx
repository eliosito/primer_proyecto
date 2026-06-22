import Listado from "./components/Listado";
import { useState , useEffect} from "react";
import axios from "axios";
import './App.css';
import Formulario from "./components/Formulario";
import {Router,Route , Switch } from 'wouter'

const personasDefault = [
  { id: 1, documento: "2323232sd", apellidos: "Perez", nombres: "Juan", alumno: true },
  { id: 2, documento: "345354545242", apellidos: "Villarroel", nombres: "Elio", alumno: true },
  { id: 3, documento: "3676767242", apellidos: "Perez", nombres: "Juan", alumno: false },
  { id: 4, documento: "4343434", apellidos: "Perez", nombres: "Juan", alumno: false }
];

export default function App() {

  const [personas, setPersonas] = useState(personasDefault)


  useEffect(() =>{
    const url = "https://backend-septimos.ctpoba.edu.ar/api";
    axios.get(url)
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.error(error)
    })

  }, [])

  const eliminar = (persona_id) => {
    const nuevasPersonas = personas.filter((persona) => persona.id != persona_id)
    console.log (nuevasPersonas)
    setPersonas(nuevasPersonas)
  }

  return (
    <>
    <Router>
    <Switch>
      <Route path="/nueva">
      <Formulario
          
        />
      
      </Route>

      <Route path="/listado">

        <Listado
          personas={personas}
          eliminar={(persona_id) => eliminar(persona_id)}/>
      
      </Route>

      <Route path="/">

      <h1> Componente APP</h1>
      
      </Route>

      <Route>

        <h1>Error 404</h1>

      </Route>

    </Switch>

    </Router>
      
    </>

/*     <div className="App">
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




    </div> */

  )/*  */
}
