import { combineReducers } from "redux";
import authReducer from "./components/auth/Reducer";
import timelineReducer from "./components/Reducer";

export default combineReducers({
    auth: authReducer,
    timeline: timelineReducer
});