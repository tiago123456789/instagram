import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../../service/Auth";

export default class Logout extends Component {

    constructor() {
        super();
        this._authService = new Auth();
    }

    componentWillMount() {
        this._authService.logout();
    }

    render() {
        return <Redirect to="/login" />
    }
}