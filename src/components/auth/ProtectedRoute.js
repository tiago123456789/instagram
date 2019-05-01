import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../../service/Auth";

const auth = new Auth();
console.log(auth.isAutenticado());
const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      auth.isAutenticado() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
)

export default ProtectedRoute;