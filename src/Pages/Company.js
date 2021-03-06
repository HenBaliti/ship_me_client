import React, { useEffect } from "react";
import CompanyForm from "../components/CompanyFormComp";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getCompanyData } from "../state/actions/companiesActions";
import { useHistory } from "react-router-dom";

const CompanyPage = () => {
  //Redux - Getting User Data
  const { companyData, error } = useSelector((state) => state.GetCompanyData);

  const dispatch = useDispatch();
  let history = useHistory();
  const { isAuth } = useSelector((state) => state.LoginAuth);

  useEffect(() => {
    if (!isAuth) {
      history.push("/auth");
    } else {
      dispatch(getCompanyData(companyData.companyData._id));
    }
  }, []);

  if (!companyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <CompanyForm
        companyID={companyData.companyData._id}
        avatar={companyData.companyData.avatar}
        city={companyData.companyData.city}
        address={companyData.companyData.address}
        CompanyStateRes={companyData.companyData.state}
        zipCode={companyData.companyData.zip}
        website={companyData.companyData.website}
        managersCompany={companyData.companyData.managers}
        usersCompany={companyData.companyData.users}
        company_name={companyData.companyData.name}
        company_phone={companyData.companyData.company_phone}
        company_email={companyData.companyData.company_email}
        primary_contact_id={companyData.companyData.primary_contact_id}
      ></CompanyForm>
    </div>
  );
};

export default CompanyPage;
