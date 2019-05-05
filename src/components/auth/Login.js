import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux"; 

import App from '../../conf/App';
import { autenticar } from "./Actions";

class Login extends Component {

    constructor() {
        super();
        this.autenticar = this.autenticar.bind(this);
    }

    limparFormulario() {
        this.login.value = "";
        this.password.value = "";
    }

    async autenticar(event) {
        event.preventDefault();
        const credenciais = {
            login: this.login.value,
            senha: this.password.value
        };

        this.props.autenticar(credenciais);
    }

    componentWillReceiveProps(nextProps) {
        const { auth } = nextProps;
        if (auth.isAutenticato && auth.msgError == null) {
            this.props.history.push("/timeline");
        }
        this.limparFormulario();
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <div>
                    <p style={{ "fontWeigth": "bold", "padding": "5px",
                     "fontFamily": "Arial" }} >{this.props.auth.msgError}</p>
                </div>
                <form onSubmit={this.autenticar}>
                    <input type="text" ref={(input) => this.login = input }/>
                    <input type="password" ref={(input) => this.password = input }/>
                    <input type="submit" value="login" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ auth: state.auth });
const mapDispatchToProps = (dispatch) => bindActionCreators({ autenticar }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Login);