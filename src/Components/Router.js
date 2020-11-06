import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react'
import EmpleadoDetalles from './RutasEmpleados/EmpleadosDetalles';
import Departamentos from './DepartamentosEmpleados/Departamentos';
import DepartamentosCrud from './Crud/Departamentos';
import InsetarDepartamento from './Crud/InsertarDepartamento';
import InsertarDepartamento from './Crud/InsertarDepartamento';
import DetallesDepartamento from './Crud/DetallesDepartamento';
import UpdateDepartamento from './Crud/UpdateDepartamento';
import EliminarDepartamento from './Crud/DeleteDepartamento'
import MenuDepartamentos from './Crud/MenuDepartamentos';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuDepartamentos />
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
                    <Route exact path="/delete/:id"
                        render={props => {
                            var iddept = props.match.params.id;
                            return <EliminarDepartamento iddepartamento={iddept} />
                        }}
                    />
                    <Route exact path="/update/:id/:nombre/:localidad"
                        render={props => {
                            var id = props.match.params.id;
                            var nom = props.match.params.nombre;
                            var loc = props.match.params.localidad;
                            console.log(id + " " + nom + " " + loc);
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
