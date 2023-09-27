import { combineReducers } from "redux";
import favoriteReducer from "./favouriteReducer";
import movieReducer from "./movieReducer";

const rootReducer = combineReducers({
  movieReducer,
  favoriteReducer,
});

export default rootReducer;
