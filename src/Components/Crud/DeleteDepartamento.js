import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { Redirect } from 'react-router-dom';

export default class DeleteDepartamento extends Component {
    state = { status: false };

    eliminarDepartamentos = () => {
        var url = Global.urlcruddept + "/api/Departamentos/" + this.props.iddepartamento;
        axios.delete(url).then(res => {
            this.setState({ status: true });
        })
    }

    render() {
        if (this.state.status == true) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1 style={{ color: "red" }}>¿Quiere eliminar el departamento
                    {this.props.iddepartamento} ?
                </h1>
                <button onClick={this.eliminarDepartamentos} className="btn btn-danger">
                    Eliminar
                </button>
            </div>
        )
    }
}
