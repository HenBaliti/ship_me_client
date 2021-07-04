import {
  UPDATE_USER_REQ,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  GET_USER_DATA_REQ,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
} from "../action-types/user";

export const updateUserReducer = (state = { updatedUser: {} }, action) => {
  switch (action.type) {
    case UPDATE_USER_REQ:
      return {
        loading: true,
        isUpdated: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedUser: action.payload,
        isUpdated: true,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        updatedUser: null,
        error: action.payload,
        isUpdated: false,
      };
    default:
      return state;
  }
};

export const getUserDataReducers = (state = { UserData: {} }, action) => {
  switch (action.type) {
    case GET_USER_DATA_REQ:
      return {
        loading: true,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case GET_USER_DATA_FAIL:
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
