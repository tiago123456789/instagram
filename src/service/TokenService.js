import App from "../conf/App";

export default class TokenService {

    static getAccessToken() {
        return localStorage.getItem(App.LOCALSTORAGE.KEY_AUTH_TOKEN);
    }

    static getPayloadToken(token) {
        token = token.split(".");
        return JSON.parse(atob(token[1]));
    }

}