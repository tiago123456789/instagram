import React, { Component } from "react";
import Foto from "./foto/Foto";
import FotoService from "../service/FotoService";
import Header from "./Header";

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = {
            fotos: []
        };
        this._fotoService = new FotoService();
    }

    componentDidMount() {
        this._fotoService
        .getPhotosProfiles("alots")
        .then(photos => this.setState({ fotos: photos }))
    }

    render() {
        return (
            <div className="main">
                <Header />
                { this.state.fotos.map((dados, indice) => ( <Foto key={indice} dados={dados} /> )) }
            </div>
        )
    }
}