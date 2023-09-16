import { combineReducers } from "redux";
import comicReducer from "./comicReducer";

const rootReducer = combineReducers({
comic: comicReducer,
});

export default rootReducer;