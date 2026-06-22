import Listado from "./components/Listado";
import { useState , useEffect} from "react";
import axios from "axios";
import './App.css';
import Formulario from "./components/Formulario";
import {Router,Route , Switch } from 'wouter'
import Header from "./components/Header";



export default function App() {


  useEffect(() =>{
    const url = "https://backend-septimos.ctpoba.edu.ar/api";
    axios.get(url)
    .then((resp) => {
      console.log(resp)
    })
    .catch((error) => {
      console.error(error)
    })

  }, [])


  return (
    <div className="App">
      <Header/>
    <Router>
    <Switch>
      <Route path="/nueva">
      <Formulario
          
        />
      
      </Route>

      <Route path="/listado">

        <Listado
        />
      
      </Route>

      <Route path="/">

      <h1> Componente APP</h1>
      
      </Route>

      <Route>

        <h1>Error 404</h1>

      </Route>

    </Switch>

    </Router>
      
    </div>


  )/*  */
}
