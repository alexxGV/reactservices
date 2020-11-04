import React, { Component } from 'react'
import axios from 'axios';
import Global from '../../Global';
import Empleados from './Empleados';

export default class Departamentos extends Component {

    selectDepartamentosRef = React.createRef();

    state = {
        departamentos: [],
        status: false,
        empleados: [],
        iddepartamento: 0
    }

    guardarDepartamentos = () => {
        var request = "/api/departamentos";
        var url = Global.departamentos + request;
        axios.get(url).then(res => {
            this.setState({
                departamentos: res.data,
                status: true
            });
        });
    }

    componentDidMount = () => {
        this.guardarDepartamentos();
    }

    buscarEmpleados = (e) => {
        e.preventDefault();
        var iddepartamento = this.selectDepartamentosRef.current.value;
        var url = Global.empleados + "api/Empleados/EmpleadosDepartamento/" + iddepartamento;

        axios.get(url).then(res => {
            this.setState({
                empleados: res.data,
                iddepartamento: iddepartamento
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Departamentos Empleados Components Api</h1>
                <form>
                    <select name="selectdepartamentos" ref={this.selectDepartamentosRef}>
                        {this.state.status == true && (
                            this.state.departamentos.map((dept, index) => {
                                return (<option key={index} value={dept.Numero}>
                                    {dept.Nombre}
                                </option>)
                            })
                        )}
                    </select>
                    <button onClick={this.buscarEmpleados}>Mostrar departamentos</button>
                </form>

                {this.state.iddepartamento != 0 &&
                    (<Empleados iddepartamento={this.state.iddepartamento} />)
                }
                {/* {this.state.empleados.length > 0 && (
                    <ul>
                        {this.state.empleados.map((emp, index) => {
                            return (
                                <li key={index}>{emp.apellido}</li>
                            )
                        })}
                    </ul>
                )} */}

            </div >
        )
    }
}
