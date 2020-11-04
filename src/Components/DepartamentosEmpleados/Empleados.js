import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class Empleados extends Component {

    state = {
        empleados: []
    }

    buscarEmpleados = () => {
        var url = Global.empleados + "/api/Empleados/EmpleadosDepartamento/" + this.props.iddepartamento;
        console.log(this.props.iddepartamento)
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data
            });
        })
    }

    componentDidMount = () => {
        this.buscarEmpleados();
    }

    componentDidUpdate = () => {
        this.buscarEmpleados();
    }

    render() {
        return (
            <div>
                {this.state.empleados.length > 0 && (

                    this.state.empleados.map((empleado, index) => {
                        console.log("dentro del map")
                        return (<h2 key={index}>{empleado.apellido}</h2>)
                    })
                )}
            </div>
        )
    }
}
