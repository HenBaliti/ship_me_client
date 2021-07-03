import React from "react";
import CompUserForm from "../components/UserFormComp";
import Navbar from "../components/Navbar";

const NewUserPage = () => {
  return (
    <div>
      <Navbar />
      <CompUserForm></CompUserForm>
    </div>
  );
};

export default NewUserPage;
