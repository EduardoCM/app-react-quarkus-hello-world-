import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [nombre, asignarNombre] = useState('');

  const [saludo, asignarSaludo] = useState('Sin recibir respuesta a saludo');

  function evtInputText(e){
    asignarNombre(e.target.value);
  }

  const saludar = () => {
    console.log("Bienvenido Quarkus a React " + nombre);

    axios.get('http://localhost:8080/hello/' + nombre)
    .then(resultado => {
      console.log('Resultado: ' + resultado.data);
      asignarSaludo(resultado.data);
    }).catch(error => {
      console.log(error);
    })

  }

  return (
    <div className="App">
      <h1>Creando mi primer plataforma digital con React y Quarkus</h1>
      <br/>
      Ingresa tu nombre: <input name="nombre" type="text" value={nombre} onChange={evtInputText} />
      <br/>
      <button onClick={() => saludar()}> Saludar a Quarkus </button>

      <br/>
      <strong>{saludo}</strong>


    </div>
  );
}

export default App;
