import logo from './logo.svg';
import './App.css';
import Customers from './../Customers';
import BuscarCustomers from './../BuscarCustomer';
import BuscadorCoches from './../BuscadorCoches';
import Departamentos from './../DepartamentosEmpleados/Departamentos';

function App() {
  return (
    <div className="App">
      {/* <Customers /> */}
      {/* <BuscarCustomers /> */}
      {/* <BuscadorCoches /> */}
      <Departamentos />
    </div>
  );
}

export default App;
