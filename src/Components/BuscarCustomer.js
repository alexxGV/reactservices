import React, { Component } from 'react'
import axios from 'axios';
import Global from './../Global';

export default class BuscarCustomer extends Component {
    cajaCustomer = React.createRef();

    state = {
        customer: {},
        status: false
    }

    buscarCliente = e => {
        e.preventDefault();
        var idcliente = this.cajaCustomer.current.value;
        var request = "customers/" + idcliente + ".json";
        var url = Global.urlnorthwind + request; //AQUI JUNTAMOS LA URL DEL GLOBAL CON LA PETICION QUE VAMOS A HACER
        axios.get(url).then(res => {
            this.setState({
                customer: res.data.customer,
                status: true
            })
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.buscarCliente}>
                    <label>ID customers:</label>
                    <input type="text" name="cajacustomer" ref={this.cajaCustomer} />
                    <button>Buscar cliente</button>
                </form>
                {this.state.status == true &&
                    (<div>
                        <h1 style={{ color: "blue" }}>
                            Name: {this.state.customer.contactName}
                        </h1>
                        <h2>Company: {this.state.customer.companyName}</h2>
                        <h3>Ciudad: {this.state.customer.city}</h3>
                        <h3>Oficio: {this.state.customer.contactTitle}</h3>
                    </div>)
                }
            </div>
        )
    }
}
