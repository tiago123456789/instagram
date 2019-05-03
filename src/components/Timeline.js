import React, { Component } from "react";
import Foto from "./foto/Foto";
import FotoService from "../service/FotoService";
import Header from "./Header";
import Auth from "../service/Auth";
import TokenService from "../service/TokenService";

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = {
            fotos: []
        };
        this._fotoService = new FotoService();
        this._authService = new Auth();
        this._tokenService = new TokenService();
    }


    carregarFotos(profile) {
        let login = profile || this.props.match.params.login;
        const foiInformadoLogin = (login && login.length > 0);

        if (foiInformadoLogin || this._authService.isAutenticado()) {
            login = login ? login : TokenService.getPayloadToken(TokenService.getAccessToken()).sub;

            this._fotoService
                .getPhotosProfiles(login)
                .then(photos => this.setState({ fotos: photos }));
        } else {
            this.props.history.push("/login");
        }

    }

    componentDidMount() {
        this.carregarFotos();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.login) {
            this.carregarFotos(nextProps.login);
        }
    }

    render() {
        return (
            <div className="main">
                <Header />
                { this.state.fotos.map((dados, indice) => ( <Foto key={indice} dados={dados} /> )) }
            </div>
        )
    }
}