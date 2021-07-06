import React from "react";
import NewCompUserForm from "../components/NewUserFormComp";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const NewUserPage = () => {
  const { companyData } = useSelector((state) => state.GetCompanyData);

  if (!companyData) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Navbar />
      <NewCompUserForm
        companyID={companyData.companyData._id}
      ></NewCompUserForm>
    </div>
  );
};

export default NewUserPage;
