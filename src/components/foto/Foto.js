import React, { Component } from "react";
import Header from "./Header";
import Info from "./Info";
import Atualizacao from "./Atualizacao";

export default class Foto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likers: props.dados.likers
        };
        this.adicionarOuRemoveListaLiker = this.adicionarOuRemoveListaLiker.bind(this);
    }
    
    adicionarOuRemoveListaLiker(login) {
        const usuario = this.state.likers.find(like => like.login == login);
        if (usuario) {
            const likers = this.state.likers.filter(like => like.login != usuario.login);
            this.setState({ likers });
        } else {
            const likers = this.state.likers.concat({ login });
            this.setState({ likers });
        }
    }

    render() {
        return (
            <div className="foto">
                <Header urlPerfil={this.props.dados.urlPerfil} horario={this.props.dados.horario}
                 login={this.props.dados.loginUsuario}/>
                <img alt="foto" 
                className="foto-src" 
                width="550px"
                src={this.props.dados.urlFoto} />
                <Info likers={this.state.likers} 
                login={this.props.dados.loginUsuario} comentario={this.props.dados.comentario} 
                comentarios={this.props.dados.comentarios} />
                <Atualizacao idFoto={this.props.dados.id} 
                likeada={this.props.dados.likeada} 
                actionTriggerLikeOuDeslike={this.adicionarOuRemoveListaLiker}/>
            </div>
        );
    }
}