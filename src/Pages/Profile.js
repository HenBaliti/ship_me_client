import React from "react";
import CompUserForm from "../components/UserFormComp";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  //Redux - Getting User Data
  const { userData, error } = useSelector((state) => state.GetUserData);

  if (!userData) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <Navbar />
      <CompUserForm
        userID={userData._id}
        firstName={userData.first_name}
        lastName={userData.last_name}
        jobTitle={userData.job_title}
        email={userData.email}
        phone={userData.phone}
        password={userData.password}
        userAvatar={userData.avatar}
      ></CompUserForm>
    </div>
  );
};

export default ProfilePage;
