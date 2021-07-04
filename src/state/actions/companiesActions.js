import axios from "axios";
import {
  GET_COMPANIES_REQ,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
} from "../action-types/companies";

//Get All Companies of specific user
export const getCompanies = () => async (dispatch) => {
  try {
    console.log("This is the Token:");
    console.log(localStorage.getItem("userToken"));
    dispatch({ type: GET_COMPANIES_REQ });

    const { data } = await axios.get(
      "http://localhost:4000/companies/getCompanies",
      {
        headers: {
          Authorization: `token ${localStorage.getItem("userToken")}`,
        },
      }
    );

    dispatch({
      type: GET_COMPANIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_COMPANIES_FAIL, payload: error });
  }
};
