import React from 'react'
import { Link } from 'wouter'

export default function Header() {
  return (
    <div className='Header'>
        <Link className='Opcion' href='/'>Inicio</Link>
        <Link className='Opcion' href='/nueva'>Nueva Persona</Link>
        <Link className='Opcion' href='/listado'>Listado</Link>



    </div>
  )
}
