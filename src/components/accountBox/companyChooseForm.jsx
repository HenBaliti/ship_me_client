import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanies } from "../../state/actions/companiesActions";
import {
  BoxContainer,
  FormContainer,
  SubmitButton,
  SelectCustome,
} from "./common";
import { Marginer } from "../marginer";
import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login } from "../../state/actions/authActions";

export function CompanyChooseForm(props) {
  //Redux - dispatch
  const dispatch = useDispatch();

  const { arrayOfCompanies, error } = useSelector(
    (state) => state.GetCompaniesForUser
  );
  let history = useHistory();

  useEffect(() => {
    dispatch(getCompanies());
    if (error) {
      console.error("There is a problem with the getting companies reducers");
    }
  }, []);

  const submitCompany = () => {
    // dispatch(login(user.email, user.password));
    // history.push("/choose");
  };

  if (!arrayOfCompanies) {
    return <div>still no companies from reducer</div>;
  }

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin={30} />
      <FormContainer>
        <Marginer direction="vertical" margin={20} />
        <div>
          <label for="cars">Company Name:</label>
          <SelectCustome name="companies" id="companies">
            {arrayOfCompanies.map((company) => {
              return <option value={company._id}>{company.name}</option>;
            })}
          </SelectCustome>
        </div>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={submitCompany}>Get In</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
