import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global'
import { Redirect } from 'react-router-dom';
export default class UpdateDepartamento extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = {
        mensaje: "",
        status: false
    }

    modificarDepartamento = (e) => {
        e.preventDefault();
        var url = Global.urlcruddept + "/api/Departamentos";
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadRef.current.value;

        var dept = {
            numero: num,
            nombre: nom,
            localidad: loc
        };
        console.log(dept);
        axios.put(url, dept).then(res => {
            console.log("dentro del put");
            this.setState({
                mensaje: "El departamento " + num + " a sido modificado",
                status: true
            });
        });
    }

    render() {
        if (this.state.status == true) {
            return <Redirect to="/" />
        }
        return (

            <div>
                <h2>{this.state.mensaje}</h2>
                <form onSubmit={this.modificarDepartamento}>
                    <label>Numero: </label>
                    <input type="number" name="cajanumero"
                        className="form-control"
                        ref={this.cajaNumeroRef}
                        defaultValue={this.props.iddepartamento}
                        readOnly />
                    <br />
                    <label>Nombre: </label>
                    <input type="text" name="cajanumero"
                        className="form-control"
                        ref={this.cajaNombreRef}
                        defaultValue={this.props.nombre} />
                    <br />
                    <label>Localidad: </label>
                    <input type="text" name="cajanumero"
                        className="form-control"
                        ref={this.cajaLocalidadRef}
                        defaultValue={this.props.localidad} />
                    <br />
                    <button className="btn-success">
                        Modificar departamento
                    </button>
                </form>

            </div>
        )
    }
}
