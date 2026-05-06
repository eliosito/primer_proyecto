import {useState} from "react";

export default function usePersona () {


    const [documento, setDocumento] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [nombres, setNombres] = useState("");
    const [rol, setRol] = useState("-1");
    const [ano, setAno] = useState("")
    const [division, setDivision] = useState("")

    const cambiarDato = (campo, valor) => {

        const opciones = {
            documento : (valor) => setDocumento(valor),
            apellidos : (valor) => setApellidos(valor),
            nombres : (valor) => setNombres(valor),
            rol : (valor) => setRol(valor),
            division : (valor) => setDivision(valor),
            ano: (valor) => setAno(valor)

        }

        opciones[campo](valor);

    }

    return [
        {documento, apellidos, nombres , rol , ano, division},
        cambiarDato
    ]
}