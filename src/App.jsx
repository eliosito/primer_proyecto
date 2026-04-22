import Listado from "./components/Listado";

import './App.css';

const personas = [
    {documento:"2323232sd",apellidos:"Perez",nombres:"Juan"},
    {documento:"345354545242",apellidos:"Perez",nombres:"Juan"},
    {documento:"3676767242",apellidos:"Perez",nombres:"Juan"},
    {documento:"4343434",apellidos:"Perez",nombres:"Juan"}
];

export default function App () {

  return (
    <div className="App">
      <h1> Componente app</h1>
      <Listado
      personas={personas}
        
      />

      
    </div>

  )
}
