import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.buscar = this.buscar.bind(this);
    }

    buscar(event) {
        event.preventDefault();
        this.props.history.push(`/timeline/${this.login.value}`);
    }

    render() {
        return (
            <header className="header container">
                <h1 className="header-logo">
                    Instalura
                </h1>
        
                <form className="header-busca" onSubmit={this.buscar}>
                    <input type="text" name="search" placeholder="Pesquisa" 
                    className="header-busca-campo" ref={(input) => this.login = input }/>
                    <input type="submit" value="Buscar" className="header-busca-submit" />
                </form>
        
        
                <nav>
                    <ul className="header-nav">
                        <li className="header-nav-item">
                            <Link to="/logout" style={{ "fontSize": "1em" }}>
                                Sair
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        ); 
    }
}