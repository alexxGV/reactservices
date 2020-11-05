import logo from './logo.svg';
import './App.css';
import Customers from './../Customers';
import BuscarCustomers from './../BuscarCustomer';
import BuscadorCoches from './../BuscadorCoches';
import Departamentos from './../DepartamentosEmpleados/Departamentos';
import Router from './../Router';
import EmpleadosRouter from './../RutasEmpleados/EmpleadosRouter';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import Popper from 'popper.js'
import DepartamentosCrud from './../Crud/Departamentos';
import MenuDepartamentos from './../Crud/MenuDepartamentos';

function App() {
  return (
    <div className="App">
      {/* <Customers /> */}
      {/* <BuscarCustomers /> */}
      {/* <BuscadorCoches /> */}
      {/* <Departamentos /> */}
      {/* <EmpleadosRouter />
      <hr />
      <Router /> */}
      <MenuDepartamentos />
      <Router />
    </div>
  );
}

export default App;
