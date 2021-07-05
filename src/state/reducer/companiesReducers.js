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

//  -  Get all companies  -
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

//  -  Get Data Of Company  -

export const getCompanyDataReducer = (
  state = { companyStateData: {} },
  action
) => {
  switch (action.type) {
    case GET_COMPANIE_DATA_REQ:
      return {
        loading: true,
      };
    case GET_COMPANIE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        companyData: action.payload,
      };
    case GET_COMPANIE_DATA_FAIL:
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

//Update Company

export const updateCompanyReducer = (
  state = { updatedCompany: {} },
  action
) => {
  switch (action.type) {
    case UPDATE_COMPANY_REQ:
      return {
        loading: true,
        isUpdated: false,
      };
    case UPDATE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        updatedCompany: action.payload,
        isUpdated: true,
      };
    case UPDATE_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        updatedCompany: null,
        error: action.payload,
        isUpdated: false,
      };
    default:
      return state;
  }
};
