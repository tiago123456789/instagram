import React from "react";
import { Link } from "react-router-dom"

export default (props) => (
    <div className="foto-in fo">
        <div className="foto-info-likes">
            { props.likers.map(liker => ( <Link >{liker}</Link> )) }
            &nbsp;
            curtiram
        </div>

        <p className="foto-info-legenda" style={{ "textIndent": "10px" }}>
            <Link className="foto-info-autor">{props.login}</Link>&nbsp;
            {props.comentario}
        </p>

        <ul className="foto-info-comentarios">
            { props.comentarios.map(comentario => (
                <li className="comentario" style={{ "text-indent": "10px" }}>
                <Link to="" className="foto-info-autor">seguidor </Link>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem ad, molestiae.
                </li>
            ))}
        </ul>
    </div>
);