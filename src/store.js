import { applyMiddleware, createStore } from "redux";
import ReduxPromise from "redux-promise";

import rootReducer from "./shared/lib/reducers";

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(rootReducer);
export default store;
