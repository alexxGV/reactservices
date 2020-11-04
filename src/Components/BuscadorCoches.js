import React, { Component } from 'react'
import axios from 'axios';
import Global from './../Global';
import './BuscadorCoches.css';

export default class BuscadorCoches extends Component {

    buscarMarca = React.createRef();

    state = {
        coches: []
    }

    cagarCoches = () => {
        var request = "webresources/coches";
        var url = Global.coches + request;
        axios.get(url).then(res => {
            console.log(res.data);
            this.setState({
                coches: res.data
            });
        });
    }

    componentDidMount = () => {
        this.cagarCoches();
        console.log(this.state.coches);
    }

    cochesMarca = e => {
        e.preventDefault();

        var marca = this.buscarMarca.current.value;
        console.log("variable input")
        console.log(marca);

        var cochesMarca = [];
        this.state.coches.map(coche => {
            if (coche.marca == marca) {
                console.log("Igual a la marca")
                console.log(coche.marca);
                cochesMarca.push(coche);
            }
        });
        this.setState({
            coches: cochesMarca
        });
        console.log("SOLO LOS DE LA BUSQUEDA");
        console.log(this.state.coches);
    }

    render() {
        return (
            <div id="pagina">
                <form onSubmit={this.cochesMarca}>
                    <input type="text" name="cojamarca" ref={this.buscarMarca} />
                    <button>Buscar coches</button>
                </form>

                <table name="tabla" >
                    {this.state.coches.map(coche => {
                        return (
                            <tr key={coche.idcoche}>
                                <td>{coche.marca}</td>
                                <td>{coche.modelo}</td>
                                <td>
                                    <img src={coche.imagen} />
                                </td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}
