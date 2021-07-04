import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../state/actions/companiesActions";
import { useHistory } from "react-router-dom";

const ChooseCompanyPage = () => {
  let history = useHistory();

  //Redux - dispatch
  const dispatch = useDispatch();

  const { loading, arrayOfCompanies, error } = useSelector(
    (state) => state.GetCompaniesForUser
  );

  useEffect(() => {
    dispatch(getCompanies());
    if (error) {
      console.error("There is a problem with the getting companies reducers");
    }
  }, []);

  if (!arrayOfCompanies) {
    return <div>still no companies from reducer</div>;
  }

  return (
    <div>
      <label for="cars">Choose a Company:</label>
      <select name="companies" id="companies">
        {arrayOfCompanies.map((company) => {
          return <option value={company._id}>{company.name}</option>;
        })}
      </select>
    </div>
  );
};

export default ChooseCompanyPage;
