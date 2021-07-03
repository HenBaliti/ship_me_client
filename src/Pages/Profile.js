import React from "react";
import CompUserForm from "../components/UserFormComp";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <CompUserForm></CompUserForm>
    </div>
  );
};

export default ProfilePage;
