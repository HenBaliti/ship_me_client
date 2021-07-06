import {
  GET_COMPANY_USERS_REQ,
  GET_COMPANY_USERS_SUCCESS,
  GET_COMPANY_USERS_FAIL,
  CREATE_COMPANY_NEW_USER_REQ,
  CREATE_COMPANY_NEW_USER_SUCCESS,
  CREATE_COMPANY_NEW_USER_FAIL,
  DELETE_USER_REQ,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  GET_USER_DATA_BY_ID_REQ,
  GET_USER_DATA_BY_ID_SUCCESS,
  GET_USER_DATA_BY_ID_FAIL,
} from "../action-types/account";

//  -  Get all Users Of Company  -
export const getAllUsersReducer = (state = { UsersOfCompany: [] }, action) => {
  switch (action.type) {
    case GET_COMPANY_USERS_REQ:
      return {
        loading: true,
      };
    case GET_COMPANY_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        arrayOfManagers: action.payload.CompanyManagers,
        arrayOfUsers: action.payload.CompanyUsers,
      };
    case GET_COMPANY_USERS_FAIL:
      return {
        ...state,
        loading: false,
        arrayOfManagers: [],
        arrayOfUsers: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

//  -  Creating New User For Company -
export const createNewUserCompanyReducer = (
  state = { newUserCreating: {} },
  action
) => {
  switch (action.type) {
    case CREATE_COMPANY_NEW_USER_REQ:
      return {
        loading: true,
      };
    case CREATE_COMPANY_NEW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreated: true,
      };
    case CREATE_COMPANY_NEW_USER_FAIL:
      return {
        ...state,
        loading: false,
        isCreated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//  -  Delete User -
export const deleteUserReducer = (state = { deletedUser: {} }, action) => {
  switch (action.type) {
    case DELETE_USER_REQ:
      return {
        loading: true,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//Get User Data By id
export const getUserDataByIDReducer = (
  state = { UserDataByID: {} },
  action
) => {
  switch (action.type) {
    case GET_USER_DATA_BY_ID_REQ:
      return {
        loading: true,
      };
    case GET_USER_DATA_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case GET_USER_DATA_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        userData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
