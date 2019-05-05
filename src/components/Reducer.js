import App from "../conf/App";

const INITIAL_STATE = {
    fotos: [],
};


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case App.TYPE_ACTIONS.LOADING_PHOTOS:
            return {...state, fotos: action.data.fotos };
        case App.TYPE_ACTIONS.LIKE_OR_DESLIKE_PHOTO:
        state.fotos = state.fotos.map(foto => {
            if (foto.id == action.data.idFotoComentada) {
                foto.likeada = !foto.likeada;
                if (foto.likeada) {
                    foto.likers.push(action.data.liker);
                } else {
                    foto.likers = foto.likers.filter(foto => foto.login != action.data.liker.login)   
                }
            }
            return foto;
        });
            return {...state};
        case App.TYPE_ACTIONS.ADD_COMMENT:
            state.fotos = state.fotos.map(foto => {
                if (foto.id == action.data.idFotoComentada) {
                    foto.comentarios.push(action.data.comentario);
                }
                return foto;
            });
            return {...state};
        default:
            return state;
    }
}