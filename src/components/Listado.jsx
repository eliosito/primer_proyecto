import React from 'react'
import Tarjeta from './Tarjeta'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Listado() {
  const [personas, setPersonas] = useState([])

  const actualizar = () => {
    const url = "https://backend-septimos.ctpoba.edu.ar/api/personas"

    const config = {
      headers: { Authorization: "48354750" }
    }

    axios.get(url, config)
      .then((resp) => {
        console.log(resp)
        setPersonas(resp.data.personas)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    actualizar()
  }, [])

  const eliminar = (persona_id) => {
    const url = `https://backend-septimos.ctpoba.edu.ar/api/personas/${persona_id}`
    const config = {
      headers: { Authorization: "48354750" }
    }

    axios.delete(url, config)
      .then((resp) => {
        console.log(resp.data);
        alert("Se elimino la persona")
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        actualizar()
      })
  }


  return (
    <div style={{ flex: 3 }}>
      <h1>Listado</h1>

      <div className='Listado'>
        {personas.map((persona, index) =>
          <Tarjeta
            key={persona.id}
            documento={persona.documento}
            apellidos={persona.apellidos}
            nombres={persona.nombres}
            alumno={persona.alumno}
            anio={persona.anio}
            division={persona.division}
            eliminar={() => eliminar(persona.id)}
          />
        )}

      </div>



    </div>
  )
}
