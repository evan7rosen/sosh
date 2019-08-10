import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./users/reducer";
import statusesReducer from "./statuses/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  users: userReducer,
  statuses: statusesReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));
