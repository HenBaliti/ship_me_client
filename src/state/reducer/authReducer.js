import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQ,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_REQ,
} from "../action-types/auth";

export const loginReducer = (state = { userObj: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        loading: true,
        isAuth: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        userObj: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuth: false,
        userObj: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const registerReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REGISTER_REQ:
      return {
        loading: true,
        isAuth: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        userObj: action.payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        isAuth: false,
        userObj: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const logOutReducer = (state = { logOutObj: {} }, action) => {
  switch (action.type) {
    case LOGOUT_REQ:
      return {
        loading: true,
        isLogOut: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogOut: true,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        isLogOut: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
