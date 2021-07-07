import React, { useEffect } from "react";
import EditCompanyForm from "../components/EditCompanyFormComp";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const EditCompanyPage = () => {
  //Redux - Getting User Data
  const { companyData } = useSelector((state) => state.GetCompanyData);
  let history = useHistory();
  const { isAuth } = useSelector((state) => state.LoginAuth);

  useEffect(() => {
    if (!isAuth) {
      history.push("/auth");
    }
  }, []);

  if (!companyData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      <EditCompanyForm
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
      ></EditCompanyForm>
    </div>
  );
};

export default EditCompanyPage;
