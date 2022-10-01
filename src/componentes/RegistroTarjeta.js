import React, { Component } from 'react';
import Registros from './Registros';


class RegistroTarjeta extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardHolderName: "",
            creditCardNumber: "",
            expirationDate: "",
            paymentNetworks: "",
            cvv: ""
        }
    }



    registrarTarjeta = (e) => {
        e.preventDefault();
        console.log("Se registra tarjeta");
        console.log(this.state);

        fetch('http://localhost:8080/api/creditcards', {
            method: 'POST',
            body: JSON.stringify({
                cardHolderName: this.state.cardHolderName,
                creditCardNumber: this.state.creditCardNumber,
                cvv: this.state.cvv,
                expirationDate: this.state.expirationDate,
                paymentNetworks: this.state.paymentNetworks
            }),
            headers: {
                "Content-type": "Application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
            console.log("Creacion de tarjeta de forma correcta");
            console.log(json)
            this.limpiarDatos();
        })
    }


    limpiarDatos = () => {
        console.log("Limpia datos del formulario");
        this.setState({cardHolderName: ""})
        this.setState({creditCardNumber: ""})
        this.setState({expirationDate: ""})
        this.setState({paymentNetworks: ""})
        this.setState({cvv: ""})

        console.log("Datos limpios")
    }


    render (){
        return (
        <div>
            <form onSubmit={this.registrarTarjeta}>
                <h1>Registrar tarjeta de Credito</h1>
               
                <div>
                    <label>Card Holder Name</label>
                    <input type="text" 
                           id="name" 
                           value={this.state.cardHolderName} 
                           onChange={ev => this.setState({cardHolderName: ev.target.value})}/>

                </div>

                <div>
                    <label>Credit Card Number </label>
                    <input type="text" 
                           id="cardNumber" 
                           value={this.state.creditCardNumber} 
                           onChange={ev => this.setState({creditCardNumber: ev.target.value})}/>

                </div>

                <div>
                    <label>Expiration Date</label>
                    <input type="text" 
                           id="expiracion" 
                           value={this.state.expirationDate} 
                           onChange={ev => this.setState({expirationDate: ev.target.value})}/>
                </div>

                <div>
                    <label>Payment Networks</label>
                    <input type="text" 
                           id="paymentNetwork" 
                           value={this.state.paymentNetworks} 
                           onChange={ev => this.setState({paymentNetworks: ev.target.value})}/>

                </div>

                <div>
                    <label>Cvv</label>
                    <input type="text" 
                           id="expiracion" 
                           value={this.state.cvv} 
                           onChange={ev => this.setState({cvv: ev.target.value})}/>

                </div>

                <input type="submit" value="Enviar" />
            </form>

            <Registros />

            </div>

         
        )
    }

}


export default RegistroTarjeta;