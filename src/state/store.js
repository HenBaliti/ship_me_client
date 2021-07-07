import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer } from "./reducer/authReducer";
import {
  createNewCompanyReducer,
  deleteCompanyReducer,
  getAllCompaniesReducer,
  getCompaniesReducer,
  getCompanyDataReducer,
  updateCompanyReducer,
} from "./reducer/companiesReducers";
import { getUserDataReducers, updateUserReducer } from "./reducer/userReducer";
import {
  createNewUserCompanyReducer,
  deleteUserReducer,
  getAllUsersReducer,
  getUserDataByIDReducer,
} from "./reducer/accountReducer";

const appReducer = combineReducers({
  LoginAuth: loginReducer,
  RegisterAuth: registerReducer,
  GetCompaniesForUser: getCompaniesReducer,
  GetCompanyData: getCompanyDataReducer,
  UpdateUserProfile: updateUserReducer,
  GetUserData: getUserDataReducers,
  UpdateCompany: updateCompanyReducer,
  GetAllUsersCompany: getAllUsersReducer,
  CreateNewUserCompany: createNewUserCompanyReducer,
  RemoveUser: deleteUserReducer,
  GetUserDataByID: getUserDataByIDReducer,
  RemoveCompany: deleteCompanyReducer,
  GetAllCompanies: getAllCompaniesReducer,
  CreateNewCompany: createNewCompanyReducer,
});

const shipMeState = (state, action) => {
  if (action.type === "LOGOUT_SUCCESS") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

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
