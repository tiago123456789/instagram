import React, { Component } from "react";
import { Link } from "react-router-dom";
import FotoService from "../../service/FotoService";
import TokenService from "../../service/TokenService";

export default class Atualizacao extends Component {

  constructor(props) {
    super(props);
    this._fotoService = new FotoService();
    this.state = {
      likeado: props.likeada
    };
    this.likear = this.likear.bind(this);
  }

  async likear(event, idFoto) {
    event.preventDefault();
    const dadosRetornados = await this._fotoService.like(idFoto, TokenService.getAccessToken());
    this.setState({ likeado: !this.state.likeado });
    this.props.actionTriggerLikeOuDeslike(dadosRetornados.login);
  }

  render() {
    return (
      <section className="fotoAtualizacoes">
        <a href="/" onClick={(event) => this.likear(event, this.props.idFoto) } 
         className={ this.state.likeado ? "fotoAtualizacoes-like-ativo" : "fotoAtualizacoes-like" } >Likar</a>
        <form className="fotoAtualizacoes-form">
          <input type="text" placeholder="Adicione um comentário..." 
          className="fotoAtualizacoes-form-campo" />
          <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
        </form>
      </section>
    );
  }
}