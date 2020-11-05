import axios from 'axios';
import React, { Component } from 'react'
import Global from '../../Global';

export default class EmpleadosDetalles extends Component {
    //VAMOS A RECIBIR PROPS CON UN CONSTRUCTOR
    constructor(props) {
        super(props);
        //RECIBIMOS IDEMPLEADOS
        console.log("Props Detalle" + this.props.idempleado);
    }

    state = {
        empleado: {},
        status: false
    }
    mostrarEmpleado = () => {
        var request = "/api/empleados/" + this.props.idempleado;
        var url = Global.empleados + request;
        axios.get(url).then(res => {
            this.setState({
                empleado: res.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.mostrarEmpleado();
    }

    render() {
        return (
            <div>
                <h2>Detalles empleados</h2>
                {this.state.status == true && (
                    <div>
                        <h1>Apellido: {this.state.empleado.apellido}</h1>
                        <h1>Oficio: {this.state.empleado.oficio}</h1>
                    </div>
                )}
            </div>
        )
    }
}
