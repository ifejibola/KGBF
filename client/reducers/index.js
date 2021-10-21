// Combine reducers
import { combineReducers } from "redux";
import common from "./common";
import shop from './shop';
export default combineReducers({
    common,
    shop,
});