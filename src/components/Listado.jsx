import React from 'react'
import Tarjeta from './Tarjeta'



export default function Listado({personas}) {
  return (
    <div>
        <h1>Listado</h1>

        <div className='Listado'>
            {personas.map((persona, index) =>
             <Tarjeta
        documento={persona.documento}
        apellidos={persona.apellidos}
        nombres={persona.nombres}
        />
        )}
       
        </div>


        
        </div>
  )
}
