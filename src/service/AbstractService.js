import App from "../conf/App";
import axios from "axios";

export default class AbstractService {

    constructor() {
        this._baseUrlApi = App.BASE_URL_API;
    }

    get(path) {
        return axios.get(`${this._baseUrlApi}${path}`).then(this._extractDatasReponse);
    }

    post(path, datas) {
        return axios.post(`${this._baseUrlApi}${path}`, datas).then(this._extractDatasReponse);
    }

    getClientHttp() {
        return axios;
    }

    _extractDatasReponse(response) {
        if (response.data) {
            return response.data;
        }
        return response;
    }

}