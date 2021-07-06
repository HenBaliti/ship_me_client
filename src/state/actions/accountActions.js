import axios from "axios";
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

//Get All Users Of Specific Company
export const getAllUsersOfCompany = (companyID) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMPANY_USERS_REQ });

    const { data } = await axios.get(
      "http://localhost:4000/companies/getCompanyUsers",
      {
        headers: {
          Authorization: `token ${localStorage.getItem("userToken")}`,
        },
        params: {
          companyID: companyID,
        },
      }
    );

    dispatch({
      type: GET_COMPANY_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_COMPANY_USERS_FAIL, payload: error });
  }
};

//Create New User
export const createNewUserAction =
  (
    companyID,
    firstName,
    lastName,
    email,
    phone,
    password,
    jobTitle,
    typeUser
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_COMPANY_NEW_USER_REQ });

      const { data } = await axios.post(
        `http://localhost:4000/companies/createNewUser/${companyID}`,
        null,
        {
          headers: {
            Authorization: `token ${localStorage.getItem("userToken")}`,
          },
          params: {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            password,
            job_title: jobTitle,
            typeUser: typeUser,
          },
        }
      );

      dispatch({
        type: CREATE_COMPANY_NEW_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: CREATE_COMPANY_NEW_USER_FAIL, payload: error });
    }
  };

//Delete User
export const deleteUserAction = (userID) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQ });

    const { data } = await axios.delete(
      `http://localhost:4000/users/delete/${userID}`,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("userToken")}`,
        },
      }
    );

    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: DELETE_USER_FAIL, payload: error });
  }
};

//Get User Data By ID
export const getUserDataByIDAction = (userID) => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_DATA_BY_ID_REQ });

    const { data } = await axios.get(
      `http://localhost:4000/users/getUserDataById/${userID}`,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("userToken")}`,
        },
      }
    );

    dispatch({
      type: GET_USER_DATA_BY_ID_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({ type: GET_USER_DATA_BY_ID_FAIL, payload: error });
  }
};
