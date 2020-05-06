import { combineReducers } from "redux";
import user from "./user";
import checkout from "./checkout";
import restaurants from "./restaurants";

const rootReducer = combineReducers({
  user,
  checkout,
  restaurants,
});

export default rootReducer;
