import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducer/authReducer";

const shipMeState = combineReducers({
  LoginAuth: loginReducer,
  RegisterAuth: registerReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  shipMeState,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
