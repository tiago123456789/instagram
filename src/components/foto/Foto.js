import React, { Component } from "react";
import Header from "./Header";
import Info from "./Info";
import Atualizacao from "./Atualizacao";

export default class Foto extends Component {

    constructor(props) {
        super(props);
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
                <Info likers={this.props.dados.likers} 
                login={this.props.dados.loginUsuario} comentario={this.props.dados.comentario} 
                comentarios={this.props.dados.comentarios} />
                <Atualizacao idFoto={this.props.dados.id} 
                likeada={this.props.dados.likeada} 
                />
            </div>
        );
    }
}