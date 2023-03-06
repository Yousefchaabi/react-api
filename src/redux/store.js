import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import postReducer from "./reducers/postReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import userReducer from "./reducers/userReducer";

export const store = createStore(
  combineReducers({ postReducer, userReducer }),

  composeWithDevTools(applyMiddleware(thunk))
);
