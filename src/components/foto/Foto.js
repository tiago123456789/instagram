import React from "react";
import Header from "./Header";
import Info from "./Info";
import Atualizacao from "./Atualizacao";

export default (props) => (
    <div className="foto">
        <Header urlPerfil={props.dados.urlPerfil} horario={props.dados.horario}
         login={props.dados.loginUsuario}/>
        <img alt="foto" 
        className="foto-src" 
        width="550px"
        src={props.dados.urlFoto} />
        <Info likers={props.dados.likers} 
        login={props.dados.loginUsuario} comentario={props.dados.comentario} 
        comentarios={props.dados.comentarios} />
        <Atualizacao />
    </div>
);