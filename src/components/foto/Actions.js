import FotoService from "../../service/FotoService";
import TokenService from "../../service/TokenService";
import App from "../../conf/App";

const fotoService = new FotoService();

const adicionarComentario = (idFoto, comment) => {
    return async (dispatch) => {
        const comentario = await fotoService.comment(
            idFoto, comment, TokenService.getAccessToken()
        );
        return dispatch({ 
            type: App.TYPE_ACTIONS.ADD_COMMENT,
            data: { idFotoComentada: idFoto, comentario 
        }});
    }
};

const likear = (idFoto) => {
    return async dispatch => {
        const dadosRetornados = await fotoService.like(idFoto, TokenService.getAccessToken());
        return dispatch({
            type: App.TYPE_ACTIONS.LIKE_OR_DESLIKE_PHOTO, 
            data: { idFotoComentada: idFoto, liker: dadosRetornados 
        }});
    }
};

export { adicionarComentario, likear };