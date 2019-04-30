import React from "react";
import Header from "./Header";
import Info from "./Info";
import Atualizacao from "./Atualizacao";

export default () => (
    <div className="foto">
        <Header />
        <img alt="foto" 
        className="foto-src" 
        width="550px"
        src="https://t4.ftcdn.net/jpg/01/50/93/63/240_F_150936311_wOYTkpWun364fYCbKEJPP01LO9O7QgXD.jpg" />
        <Info />
        <Atualizacao />
    </div>
);