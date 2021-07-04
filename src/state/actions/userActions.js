import axios from "axios";
import {
  UPDATE_USER_REQ,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  GET_USER_DATA_REQ,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
} from "../action-types/user";

//Update
export const updateUser =
  (
    userID,
    firstName,
    lastName,
    jobTitle,
    email,
    phone,
    oldPassword,
    newPassword
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_USER_REQ });

      const { data } = await axios.put(
        `http://localhost:4000/users/editUser/${userID}`,
        null,
        {
          headers: {
            Authorization: `token ${localStorage.getItem("userToken")}`,
          },
          params: {
            firstName,
            lastName,
            jobTitle,
            email,
            phone,
            oldPassword,
            newPassword,
          },
        }
      );

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAIL, payload: error });
    }
  };

//Get User Data
export const getUserData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_DATA_REQ });

    const { data } = await axios.get(
      `http://localhost:4000/users/getUserData/${localStorage.getItem(
        "userToken"
      )}`,
      {
        headers: {
          Authorization: `token ${localStorage.getItem("userToken")}`,
        },
      }
    );

    dispatch({
      type: GET_USER_DATA_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({ type: GET_USER_DATA_FAIL, payload: error });
  }
};
