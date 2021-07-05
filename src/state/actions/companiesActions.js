import axios from "axios";
import {
  GET_COMPANIES_REQ,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
  GET_COMPANIE_DATA_REQ,
  GET_COMPANIE_DATA_SUCCESS,
  GET_COMPANIE_DATA_FAIL,
  UPDATE_COMPANY_REQ,
  UPDATE_COMPANY_SUCCESS,
  UPDATE_COMPANY_FAIL,
} from "../action-types/companies";

//Get Data of specific Companie
export const getCompanyData = (companyID) => async (dispatch) => {
  try {
    dispatch({ type: GET_COMPANIE_DATA_REQ });

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
      type: GET_COMPANIE_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: GET_COMPANIE_DATA_FAIL, payload: error });
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

//Update
export const updateCompany =
  (
    companyID,
    avatar,
    city,
    address,
    CompanyStateRes,
    zipCode,
    website,
    managersCompany,
    usersCompany,
    company_name,
    company_phone,
    company_email,
    primary_contact_id
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_COMPANY_REQ });

      const { data } = await axios.put(
        `http://localhost:4000/companies/editCompany/${companyID}`,
        null,
        {
          headers: {
            Authorization: `token ${localStorage.getItem("userToken")}`,
          },
          params: {
            avatar,
            city,
            address,
            CompanyStateRes,
            zipCode,
            website,
            managersCompany,
            usersCompany,
            company_name,
            company_phone,
            company_email,
            primary_contact_id,
          },
        }
      );

      dispatch({
        type: UPDATE_COMPANY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({ type: UPDATE_COMPANY_FAIL, payload: error });
    }
  };
