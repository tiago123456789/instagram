import AbstractService from "./AbstractService";
import App from "../conf/App";

export default class Auth extends AbstractService {


    login(credenciais) {
        return this.post("public/login", credenciais);
    }

    isAutenticado() {
        const accessToken = localStorage.getItem(App.LOCALSTORAGE.KEY_AUTH_TOKEN);
        console.log(accessToken);
        if (accessToken && accessToken.length > 0) {
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem(App.LOCALSTORAGE.KEY_AUTH_TOKEN);
    }

}