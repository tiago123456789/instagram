import React from "react";
import { Link } from "react-router-dom"

export default (props) => (
    <div className="foto-in fo">
        <div className="foto-info-likes">
            { props.likers.map(liker => ( <Link >{liker.login}</Link> )) }
            &nbsp;
            curtiram
        </div>

        <p className="foto-info-legenda" style={{ "textIndent": "10px" }}>
            <Link to={`/timeline/${props.login}`} className="foto-info-autor">{props.login}</Link>&nbsp;
            {props.comentario}
        </p>

        <ul className="foto-info-comentarios">
            { props.comentarios.map(comentario => (
                <li className="comentario" style={{ "text-indent": "10px" }}>
                <Link to={`/timeline/${comentario.login}`} className="foto-info-autor">seguidor </Link>
                    {comentario.texto}
                </li>
            ))}
        </ul>
    </div>
);