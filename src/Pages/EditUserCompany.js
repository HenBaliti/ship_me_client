import React, { useEffect } from "react";
import EditCompUserForm from "../components/EditUserFormComp";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const EditUserCompany = () => {
  //Redux - Getting User Data
  const { userData, loading, error } = useSelector(
    (state) => state.GetUserDataByID
  );
  let history = useHistory();
  const { isAuth } = useSelector((state) => state.LoginAuth);

  useEffect(() => {
    if (!isAuth) {
      history.push("/auth");
    }
  }, []);

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
