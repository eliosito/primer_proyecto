
import usePersona from '../hooks/usePersona';
import axios from 'axios';

export default function Formulario() {

    const [persona, setDatoPersona] = usePersona();

    const hanlderSubmit = (e) => {
        e.preventDefault();

        const url = "https://backend-septimos.ctpoba.edu.ar/api/personas"

        const config = {
            headers: { Authorization: "48354750" }
        }

        axios.post(url, persona, config)
            .then((resp) => {
                console.log(resp);
                alert("Persona guarda")
            })
            .catch((error) => {
                console.error(error)
                alert("Error al guardar")

            })
    }



    return (
        <div className='Formulario'>
            <h1>Componente Formulario</h1>

            <form onSubmit={hanlderSubmit}>

                <input
                    type="text"
                    placeholder='Documento'
                    onChange={(e) => setDatoPersona("documento", e.target.value)}
                    value={persona.documento}
                />
                <input
                    type="text"
                    placeholder='Apellidos'
                    onChange={(e) => setDatoPersona("apellidos", e.target.value)}
                    value={persona.apellidos}


                />
                <input
                    type="text"
                    placeholder='Nombres'
                    onChange={(e) => setDatoPersona("nombres", e.target.value)}
                    value={persona.nombres}
                />

                <select
                    onChange={(e) => setDatoPersona("rol", e.target.value)}
                    value={persona.rol}
                >
                    <option value="-1" disabled>Seleccionar rol</option>

                    <option value="alumno">Alumno</option>
                    <option value="docente">Docente</option>
                </select>

                <label>Año</label>

                <select
                    onChange={(e) => setDatoPersona("anio", e.target.value)}
                    value={persona.anio}
                >
                    <option value="1ro">1ro</option>
                    <option value="2do">2do</option>
                    <option value="3ro">3ro</option>
                    <option value="4to">4to</option>
                </select>
                <label>Division</label>
                <select
                    onChange={(e) => setDatoPersona("division", e.target.value)}
                    value={persona.division}
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
