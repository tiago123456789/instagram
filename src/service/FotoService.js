import AbstractService from "./AbstractService";

export default class FotoService extends AbstractService {

    getPhotosProfiles(login) {
        return this.get("public/fotos/" + login);
    }

    like(idFoto, accessToken) {
        return this.post(`fotos/${idFoto}/like?X-AUTH-TOKEN=${accessToken}`);
    }
}