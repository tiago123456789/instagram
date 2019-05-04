import React, { Component } from "react";
import Foto from "./foto/Foto";
import FotoService from "../service/FotoService";
import Header from "./Header";
import Auth from "../service/Auth";
import TokenService from "../service/TokenService";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = {
            fotos: []
        };
        this._fotoService = new FotoService();
        this._authService = new Auth();
        this._tokenService = new TokenService();
        this.carregarFotos = this.carregarFotos.bind(this);
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
        const login = nextProps.match.params.login; 
        if (login) {
            this.carregarFotos(login);
        }
    }

    render() {
        return (
            <div className="main">
                <Header {...this.props} />
                <ReactCSSTransitionGroup
                    transitionName="timeline"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    { this.state.fotos.map((dados, indice) => ( <Foto key={indice} dados={dados} /> )) }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}