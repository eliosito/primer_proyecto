import React, { use } from 'react'
import { useState } from 'react';
export default function Formulario({guardar}) {

    const hanlderSubmit = (e) => {
        e.preventDefault();
        console.log({documento,apellidos,nombres,rol,ano,division})

        const alumno = rol == "alumno";

        const persona = {
            documento,
            apellidos,
            nombres,
            alumno,
            ano,
            division
        }

        guardar(persona);

    }

    const [documento, setDocumento] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [rol, setRol] = useState("-1");
    const [ano, setAno] = useState("")
    const [division, setDivision] = useState("")

  return (
    <div className='Formulario'>
        <h1>Componente Formulario</h1>

        <form onSubmit={hanlderSubmit}> 

            <input 
            type="text"
            placeholder='Documento'
            onChange={(e) => setDocumento(e.target.value)}
            value={documento}
            />
            <input 
            type="text"
            placeholder='Apellidos'
            onChange={(e) => setApellidos(e.target.value)}
            value={apellidos}


            />
            <input 
            type="text"
            placeholder='Nombres'
            onChange={(e) => setNombres(e.target.value)}
            value={nombres}
            />

            <select
            onChange={(e) => setRol(e.target.value)}
            value={rol}
            >
                <option value="-1" disabled>Seleccionar rol</option>
                
                <option value="alumno">Alumno</option>
                <option value="docente">Docente</option>
            </select>

            <label>Año</label>

            <select 
            onChange={(e) => setAno(e.target.value)}
            value={ano}
             >
                <option value="1ro">1ro</option>
                <option value="2do">2do</option>
                <option value="3ro">3ro</option>
                <option value="4to">4to</option>
            </select>
            <label>Division</label>
            <select 
            onChange={(e) => setDivision(e.target.value)}
            value={division}
             >
                <option value="1ra">1ra</option>
                <option value="2da">2da</option>
                <option value="3ra">3ra</option>
                <option value="4ta">4ta</option>
                <option value="5ta">5ta</option>
                <option value="6ta">6ta</option>


            </select>


            <button type='submit'>Guardar</button>
        </form>

    </div>
  )
}
