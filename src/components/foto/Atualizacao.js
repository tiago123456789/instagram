import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { adicionarComentario, likear } from "./Actions"; 

class Atualizacao extends Component {

  constructor(props) {
    super(props);
    this.likear = this.likear.bind(this);
  }

  limparCampoComentario() {
    this.texto.value = "";
  }

  async adicionarComentario(event, idFoto) {
    event.preventDefault();
    const comment = { texto: this.texto.value };
    this.props.adicionarComentario(idFoto, comment);
    this.limparCampoComentario();
  }

  async likear(event, idFoto) {
    event.preventDefault();
    this.props.likear(idFoto);
  }

  render() {
    return (
      <section className="fotoAtualizacoes">
        <a href="/" onClick={(event) => this.likear(event, this.props.idFoto)}
          className={this.props.likeada ? "fotoAtualizacoes-like-ativo" : "fotoAtualizacoes-like"} >Likar</a>
        <form className="fotoAtualizacoes-form" onSubmit={(event) => this.adicionarComentario(event, this.props.idFoto)}>
          <input type="text" placeholder="Adicione um comentário..."
            className="fotoAtualizacoes-form-campo" ref={(input) => this.texto = input} />
          <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ adicionarComentario, likear }, dispatch);
export default connect(null, mapDispatchToProps)(Atualizacao);