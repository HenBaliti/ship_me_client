import axios from "axios";
import {
  GET_COMPANIES_REQ,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
  GET_COMPANIEDATA_REQ,
  GET_COMPANIEDATA_SUCCESS,
  GET_COMPANIEDATA_FAIL,
} from "../action-types/companies";

//Get Data of specific Companie
export const getCompanyData = (companyID) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMPANIEDATA_REQ });

    const { data } = await axios.get(
      "http://localhost:4000/companies/getCompanyData",
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
      type: GET_COMPANIEDATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_COMPANIEDATA_FAIL, payload: error });
  }
};

//Get All Companies of specific user
export const getCompanies = () => async (dispatch) => {
  try {
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
