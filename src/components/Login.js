import React, { Component } from 'react';
import Auth from '../service/Auth';
import App from '../conf/App';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            msgError: ''
        };
        this._authService = new Auth();
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

        try {
            const accessToken = await this._authService.login(credenciais);
            localStorage.setItem(App.LOCALSTORAGE.KEY_AUTH_TOKEN, accessToken);
            this.props.history.push("/timeline");
        } catch(e) {
            this.setState({ msgError: "Não foi possível autenticar."});
            this.limparFormulario();
        }
    }

    render() {
        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <div>
                    <p style={{ "fontWeigth": "bold", "padding": "5px",
                     "fontFamily": "Arial" }} >{this.state.msgError}</p>
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