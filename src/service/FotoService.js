import AbstractService from "./AbstractService";

export default class FotoService extends AbstractService {

    constructor() {
        super();
    }

    getPhotosProfiles(login) {
        return this.get("public/fotos/" + login);
    }
}