import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';

export default class Empleados extends Component {

    cambios = 0;

    state = {
        empleados: [],
        iddepartamento: "" //IDDEPARTAMENTO QUE NOS LLEGA EN LA PRIMERA INSTANCIA
    }

    buscarEmpleados = () => {
        var url = Global.empleados + "/api/Empleados/EmpleadosDepartamento/" + this.props.iddepartamento;
        console.log(this.props.iddepartamento)
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data,
                iddepartamento: this.props.iddepartamento //GUARDO DEPARTAMENTO PARA QUE EN EL UPDATE SEA UNA UNICA VEZ
            });
        })
    }

    componentDidMount = () => {
        this.buscarEmpleados();
    }

    componentDidUpdate = () => {

        //HAGO UN IF DEL IDDEPARTAMENTO PARA COMPARAR QUE FUESE DIFERENTE
        if (this.props.iddepartamento != this.state.iddepartamento) {
            this.buscarEmpleados();
            this.cambios++;

        }
    }

    render() {
        return (
            <div>
                {this.state.empleados.length > 0 && (

                    this.state.empleados.map((empleado, index) => {
                        console.log("dentro del map")
                        console.log(this.cambios);
                        return (<h2 key={index}>{empleado.apellido}</h2>)
                    })
                )}
            </div>
        )
    }
}
