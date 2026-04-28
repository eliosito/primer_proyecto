import React from 'react'


const documento = "43323233";
const nombres = "Elio";
const apellidos = "Villarroel";
export default function Tarjeta({documento,apellidos,nombres,alumno}) {
  return (
    <div className='Tarjeta'
    style={{backgroundColor: alumno ?"aquamarine" : "blueviolet",
      color: nombres === "Elio" ? "grey" : "red",
      color: alumno ? "black" : "white"
    }}
    >
        <h2>{documento}</h2>
        <h3>{apellidos},{nombres}</h3>

    </div>
  )
}