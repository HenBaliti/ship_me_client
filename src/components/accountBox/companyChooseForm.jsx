import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanies,
  getCompanyData,
} from "../../state/actions/companiesActions";
import {
  BoxContainer,
  FormContainer,
  SubmitButton,
  SelectCustome,
} from "./common";
import { Marginer } from "../marginer";
import { useHistory } from "react-router-dom";

export function CompanyChooseForm(props) {
  //Redux - dispatch
  const dispatch = useDispatch();

  const { loading, companyData } = useSelector((state) => state.GetCompanyData);

  const { arrayOfCompanies, error } = useSelector(
    (state) => state.GetCompaniesForUser
  );

  //state company managment
  const [companyChoose, setCompanyChoose] = useState("");

  let history = useHistory();

  useEffect(() => {
    dispatch(getCompanies());
    if (error) {
      console.error("There is a problem with the getting companies reducers");
    }
  }, []);

  const submitCompany = () => {
    dispatch(getCompanyData(companyChoose));
    history.push("/");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setCompanyChoose(event.target.value);
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
          <SelectCustome
            name="companies"
            id="companies"
            onChange={handleChange}
            value={companyChoose}
          >
            <option value="No Company Choose">Choose Company</option>
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
