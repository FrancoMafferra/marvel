import { combineReducers } from "redux";
import comicReducer from "./reducers/comicReducer";

const rootReducer = combineReducers({
comic: comicReducer,
});

export default rootReducer;