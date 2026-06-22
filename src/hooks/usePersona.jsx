import {useState} from "react";

export default function usePersona () {


    const [documento, setDocumento] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [rol, setRol] = useState("-1");
    const [anio, setAnio] = useState("")
    const [division, setDivision] = useState("")
3

    const cambiarDato = (campo, valor) => {

        const opciones = {
            documento : (valor) => setDocumento(valor),
            apellidos : (valor) => setApellidos(valor),
            nombres : (valor) => setNombres(valor),
            rol : (valor) => setRol(valor),
            division : (valor) => setDivision(valor),
            ano: (valor) => setAnio(valor)

        }

        opciones[campo](valor);

    }

    return [
        {documento, apellidos, nombres , rol , anio, division},
        cambiarDato
    ]
}