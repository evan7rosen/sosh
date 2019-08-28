import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./users/reducer";
import statusesReducer from "./statuses/reducer";
import thunk from "redux-thunk";
import commentsReducer from "./comments/reducer";
import friendsReducer from "./friends/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  statuses: statusesReducer,
  comments: commentsReducer,
  friends: friendsReducer
});

const middleware = [thunk];

export default createStore(rootReducer, applyMiddleware(...middleware));
