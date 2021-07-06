import React from "react";
import EditCompUserForm from "../components/EditUserFormComp";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const EditUserCompany = () => {
  //Redux - Getting User Data
  const { userData, loading, error } = useSelector(
    (state) => state.GetUserDataByID
  );

  if (!userData) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Navbar />
      <EditCompUserForm
        userID={userData._id}
        firstName={userData.first_name}
        lastName={userData.last_name}
        jobTitle={userData.job_title}
        email={userData.email}
        phone={userData.phone}
        password={userData.password}
        userAvatar={userData.avatar}
      ></EditCompUserForm>
    </div>
  );
};

export default EditUserCompany;
