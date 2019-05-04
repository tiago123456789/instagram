import React, { Component } from "react";
import { Link } from "react-router-dom"

export default class Info extends Component {
    
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div className="foto-in fo">
                <div className="foto-info-likes">
                    { this.props.likers.map(liker => ( <Link >{liker.login}</Link> )) }
                    &nbsp;
                    curtiram
                </div>
        
                <p className="foto-info-legenda" style={{ "textIndent": "10px" }}>
                    <Link to={`/timeline/${this.props.login}`} className="foto-info-autor">{this.props.login}</Link>&nbsp;
                    {this.props.comentario}
                </p>
        
                <ul className="foto-info-comentarios">
                    { this.props.comentarios.map(comentario => (
                        <li className="comentario" style={{ "text-indent": "10px" }}>
                        <Link to={`/timeline/${comentario.login}`} className="foto-info-autor">{comentario.login} </Link>
                            {comentario.texto}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}