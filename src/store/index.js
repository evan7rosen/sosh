import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./users/reducer";
import statusesReducer from "./statuses/reducer";
import thunk from "redux-thunk";
import commentsReducer from "./comments/reducer";
import friendsReducer from "./friends/reducer";
import messagesReducer from "./messages/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  statuses: statusesReducer,
  comments: commentsReducer,
  friends: friendsReducer,
  messages: messagesReducer
});

const middleware = [thunk];

export default createStore(rootReducer, applyMiddleware(...middleware));
