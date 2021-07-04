import axios from "axios";
import {
  GET_COMPANIES_REQ,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
} from "../action-types/companies";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("userToken")}`,
  },
};

//Get Al Companies of specific user
export const getCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COMPANIES_REQ });

    const { data } = await axios.get(
      "http://localhost:4000/companies/getCompanies",
      config
    );

    dispatch({
      type: GET_COMPANIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_COMPANIES_FAIL, payload: error });
  }
};
