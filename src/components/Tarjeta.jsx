import React from 'react'


const documento = "43323233";
const nombres = "Elio";
const apellidos = "Villarroel";
export default function Tarjeta({documento,apellidos,nombres}) {
  return (
    <div className='Tarjeta'>
        <h2>{documento}</h2>
        <h3>{apellidos},{nombres}</h3>

    </div>
  )
}