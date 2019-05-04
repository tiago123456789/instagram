import { combineReducers } from "redux";
import authReducer from "./components/auth/Reducer";

export default combineReducers({
    auth: authReducer
});