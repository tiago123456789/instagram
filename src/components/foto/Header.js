import React from "react";
import{ Link } from "react-router-dom";

export default (props) => (
    <header className="foto-header">
        <figure className="foto-usuario">
            <img src={props.urlPerfil} alt="foto do usuario" />
            <figcaption className="foto-usuario">
                <Link to={`/timeline/${props.login}`}>
                    {props.login}
                  </Link>
            </figcaption>
        </figure>
        <time className="foto-data">{props.horario}</time>
    </header>
);