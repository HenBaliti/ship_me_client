import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducer/authReducer";
import {
  getCompaniesReducer,
  getCompanyDataReducer,
} from "./reducer/companiesReducers";

const shipMeState = combineReducers({
  LoginAuth: loginReducer,
  RegisterAuth: registerReducer,
  GetCompaniesForUser: getCompaniesReducer,
  GetCompanyData: getCompanyDataReducer,
});

//Saving the redux state to local storage and updates the redux managment
function saveToLocalStorage(state = {}) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (err) {
    console.error(err);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    console.error(err);

    return undefined;
  }
}

let initialState = loadFromLocalStorage();

const middleware = [thunk];
const store = createStore(
  shipMeState,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
