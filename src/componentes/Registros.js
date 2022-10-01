import React, { Component } from 'react';


class Registros extends Component {
    constructor(props){
        super(props);
        this.state = {
            registros: []
        }
    }

    componentDidMount()  {
        fetch('http://localhost:8080/api/creditcards')
        .then(res => res.json())
        .then(data => {
            this.setState({registros: data})

            console.log("Se recuperan registros ")
            console.log(this.state.registros)
        })
    }

    render() {
        return(
            <div>
              <h1>Mostrar Lista de Tarjetas</h1>

              <ul>
                {

                    this.state.registros.map((registro, indice) => 
                    <li key={indice}><strong>Name:</strong> {registro.cardHolderName}  <strong>Card Number: </strong> {registro.creditCardNumber}</li>

                    )

                }
              </ul>
           
            </div>
        )
    }

}


export default Registros;