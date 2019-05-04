import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Auth from "../../service/Auth";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "./Actions";

class Logout extends Component {

    constructor() {
        super();
        this._authService = new Auth();
    }

    componentWillMount() {
        this.props.logout();
    }

    render() {
        return <Redirect to="/login" />
    }
}

const mapDispathToProps = (dispatch) => bindActionCreators({ logout }, dispatch);
export default connect(null, mapDispathToProps)(Logout);