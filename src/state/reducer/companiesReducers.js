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
  DELETE_COMPANY_REQ,
  DELETE_COMPANY_SUCCESS,
  DELETE_COMPANY_FAIL,
  GET_ALL_COMPANIES_REQ,
  GET_ALL_COMPANIES_SUCCESS,
  GET_ALL_COMPANIES_FAIL,
  CREATE_NEW_COMPANY_REQ,
  CREATE_NEW_COMPANY_SUCCESS,
  CREATE_NEW_COMPANY_FAIL,
} from "../action-types/companies";

//  -  Get all companies of specific user  -
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

//  -  Delete Company -
export const deleteCompanyReducer = (
  state = { deletedCompany: {} },
  action
) => {
  switch (action.type) {
    case DELETE_COMPANY_REQ:
      return {
        loading: true,
      };
    case DELETE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };
    case DELETE_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

//  -  Get all companies  -
export const getAllCompaniesReducer = (
  state = { arrayOfCompanies: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_COMPANIES_REQ:
      return {
        loading: true,
      };
    case GET_ALL_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        arrayOfCompanies: action.payload,
      };
    case GET_ALL_COMPANIES_FAIL:
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

//  -  Creating New Company -
export const createNewCompanyReducer = (
  state = { newCompanyCreating: {} },
  action
) => {
  switch (action.type) {
    case CREATE_NEW_COMPANY_REQ:
      return {
        loading: true,
      };
    case CREATE_NEW_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreated: true,
      };
    case CREATE_NEW_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        isCreated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
