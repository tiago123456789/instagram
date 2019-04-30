import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <section className="fotoAtualizacoes">
              <Link className="fotoAtualizacoes-like">Likar</Link>
              <form className="fotoAtualizacoes-form">
                <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo"/>
                <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit"/>
              </form>
    </section>   
);