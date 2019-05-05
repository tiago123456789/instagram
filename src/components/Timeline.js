import React, { Component } from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Foto from "./foto/Foto";
import Header from "./Header";
import TokenService from "../service/TokenService";
import { carregarFotos } from "./Actions";

class Timeline extends Component {

    constructor() {
        super();
        this.login = null;
        this.carregarFotos = this.carregarFotos.bind(this);
    }


    carregarFotos(profile) {
        let login = profile || this.props.match.params.login;
        const foiInformadoLogin = (login && login.length > 0);

        if (foiInformadoLogin || this._authService.isAutenticado()) {
            login = login ? login : TokenService.getPayloadToken(TokenService.getAccessToken()).sub;
            this.props.carregarFotos(login);
        } else {
            this.props.history.push("/login");
        }

    }

    componentDidMount() {
        this.carregarFotos();
    }

    componentWillReceiveProps(nextProps) {
        const login = nextProps.match.params.login || TokenService.getPayloadToken(TokenService.getAccessToken()).sub; 
        if (!this.login || this.login != login) {
            this.login = login;
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
                    { this.props.fotos.map((dados, indice) => ( <Foto key={indice} dados={dados} /> )) }
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ fotos: state.timeline.fotos, reload: state.timeline.reload });
const mapDispatchToProps = (dispatch) => bindActionCreators({ carregarFotos: carregarFotos }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);