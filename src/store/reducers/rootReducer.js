import {combineReducers} from "redux";
import appSideReducer from "./appSideReducer";

export default combineReducers({
    appSide: appSideReducer
})
