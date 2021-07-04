import {
  GET_COMPANIES_REQ,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAIL,
  GET_COMPANIEDATA_REQ,
  GET_COMPANIEDATA_SUCCESS,
  GET_COMPANIEDATA_FAIL,
} from "../action-types/companies";

export const getCompaniesReducer = (
  state = { arrayOfCompanies: [] },
  action
) => {
  switch (action.type) {
    case GET_COMPANIES_REQ:
      return {
        loading: true,
      };
    case GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        arrayOfCompanies: action.payload,
      };
    case GET_COMPANIES_FAIL:
      return {
        ...state,
        loading: false,
        arrayOfCompanies: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCompanyDataReducer = (
  state = { companyStateData: {} },
  action
) => {
  switch (action.type) {
    case GET_COMPANIEDATA_REQ:
      return {
        loading: true,
      };
    case GET_COMPANIEDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        companyData: action.payload,
      };
    case GET_COMPANIEDATA_FAIL:
      return {
        ...state,
        loading: false,
        companyData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
