import React, { Component } from 'react'

export default class UpdateDepartamento extends Component {
    render() {
        return (
            <div>
                <h2>Modificar departamento
                    {this.props.iddepartamento},
                    {this.props.nombre},
                    {this.props.localidad}
                </h2>

            </div>
        )
    }
}
