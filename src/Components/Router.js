import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import EmpleadoDetalles from './RutasEmpleados/EmpleadosDetalles';
import Departamentos from './DepartamentosEmpleados/Departamentos';
import DepartamentosCrud from './Crud/Departamentos';
import InsetarDepartamento from './Crud/InsertarDepartamento';
import InsertarDepartamento from './Crud/InsertarDepartamento';
import DetallesDepartamento from './Crud/DetallesDepartamento';
import UpdateDepartamento from './Crud/UpdateDepartamento';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"
                        component={DepartamentosCrud} />
                    <Route exact path="/create"
                        component={InsertarDepartamento} />
                    <Route exact path="/details/:id"
                        render={props => {
                            var id = props.match.params.id;
                            return <DetallesDepartamento iddepartamento={id} />
                        }} />
                    <Route exact path="/udpate/:id/:nombre/:localidad"
                        render={props => {
                            var id = props.match.params.id;
                            var nom = props.match.params.nombre;
                            var loc = props.match.params.localidad;
                            return <UpdateDepartamento iddepartamento={id} nombre={nom} localidad={loc} />;
                        }}
                    />
                    <Route exact path="/empleadosdetalle/:idempleado"
                        render={props => {
                            var idemp = props.match.params.idempleado;
                            console.log("id " + idemp);
                            return <EmpleadoDetalles idempleado={idemp} />
                        }}
                    />
                </Switch>
            </BrowserRouter>
        )
    }
}
