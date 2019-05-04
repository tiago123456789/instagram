import Auth from "../../service/Auth";
import App from "../../conf/App";

const authService = new Auth();

const logout = () => {
    authService.logout();
    return { type: App.TYPE_ACTIONS.LOGOUT, data: { isAutenticato: false }};
}

const autenticar = (credenciais) => {
    return async dispatch => {
        try {
            const accessToken = await authService.login(credenciais);
            localStorage.setItem(App.LOCALSTORAGE.KEY_AUTH_TOKEN, accessToken);
            dispatch({ type: App.TYPE_ACTIONS.AUTH, data: { isAutenticato: true } })
        } catch(e) {
            dispatch({ 
                type: App.TYPE_ACTIONS.AUTH_FAILED, 
                data: { msgError: "Não foi possível autenticar." }
            })
        }
    }
}

export { autenticar, logout };