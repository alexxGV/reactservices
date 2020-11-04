import React, { Component } from 'react'
//Agregar la liberia de axios 
import axios from 'axios';

export default class Customers extends Component {
    //1. Almacenamos los clientes en state:
    urlcustomers = "http://northwind.netcore.io/customers?format=json";
    state = {
        customers: []
        , status: "success"
    }

    //El res y el data son generados: 
    cargarClientes = () => {
        //Realizo peticion con axios
        axios.get(this.urlcustomers).then(res => {
            console.log(res.data.customers);
            this.setState({
                customers: res.data.customers
            });
        });
    }

    componentWillMount = () => {
        this.cargarClientes();
    }

    render() {
        if (this.state.customers.length > 0) {
            //Tenemos clientes
            return (
                <div>
                    <h1 style={{ color: "red" }}> Servicio Api  Customers </h1>
                    {this.state.customers.map(clientes => {
                        return (<h2 key={clientes.id}> Customer : {clientes.contactName} </h2>);

                    })};

                </div>
            );
        } else if (this.state.customers.length == 0) {
            //No hemos cargado clientes
            return (<h1>No hay clientes</h1>);
        } else if (this.state.customers != "success") {
            //el servicio no ha terminado de procesar
            return (<h1> Cargando servicio...</h1>);
        } else {
            //otra opcion
            return (<h1> Algo ha ido mal...</h1>);
        }

    }
}