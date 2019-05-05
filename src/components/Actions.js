import FotoService from "../service/FotoService";
import App from "../conf/App";

const fotoService = new FotoService();

const carregarFotos = (loginProfile) => {
    return async (dispatch) => {
        try {
            const fotos = await fotoService.getPhotosProfiles(loginProfile);
            return dispatch({ type: App.TYPE_ACTIONS.LOADING_PHOTOS, data: { fotos }})
        } catch(e) {
            return dispatch({ type: App.TYPE_ACTIONS.LOADING_PHOTOS_FAILED, data: {} })
        }
    };
};


export { carregarFotos };