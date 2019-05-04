import App from "../../conf/App";

const INITAL_STATE = {
    isAutenticato: false,
    msgError: null
}

export default (state = INITAL_STATE, action) => {
    switch(action.type) {
        case App.TYPE_ACTIONS.AUTH:
        case App.TYPE_ACTIONS.LOGOUT:
            state.isAutenticato = action.data.isAutenticato;
            return {...state};
        case App.TYPE_ACTIONS.AUTH_FAILED:
            state.msgError = action.data.msgError;
            return {...state};
        default:
            return state;
    }
}