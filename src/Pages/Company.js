import React from "react";
import CompanyForm from "../components/CompanyFormComp";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

//Redux - Getting User Data
const { companyData, error } = useSelector((state) => state.GetCompanyData);

if (!companyData) {
  return <div>Loading....</div>;
}

const CompanyPage = () => {
  return (
    <div>
      <Navbar />
      <CompanyForm></CompanyForm>
    </div>
  );
};

export default CompanyPage;
