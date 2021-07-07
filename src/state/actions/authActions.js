import axios from "axios";
import {
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_REQ,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGOUT_REQ,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from "../action-types/auth";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQ });

    const { data } = await axios.post(
      "http://localhost:4000/users/signin",
      { email, password },
      config
    );
    localStorage.setItem("userToken", data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

//Register
export const register =
  (firstName, lastName, email, phone, password, jobTitle) =>
  async (dispatch) => {
    try {
      dispatch({ type: REGISTER_REQ });

      const { data } = await axios.post(
        "http://localhost:4000/users/signup",
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          password,
          job_title: jobTitle,
        },
        config
      );
      localStorage.setItem("userToken", data.token);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data.user,
      });
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error });
    }
  };

// LogOut
export const logOut = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQ });

    localStorage.removeItem("userToken");
    localStorage.removeItem("state");
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: "Log Out Succeded",
    });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error });
  }
};
