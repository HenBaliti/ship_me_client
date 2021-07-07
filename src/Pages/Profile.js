import React, { useEffect } from "react";
import CompUserForm from "../components/UserFormComp";
import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../state/actions/userActions";
import { useHistory } from "react-router-dom";

const ProfilePage = () => {
  //Redux - Getting User Data
  const { userData, error } = useSelector((state) => state.GetUserData);
  let history = useHistory();
  const { isAuth } = useSelector((state) => state.LoginAuth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      dispatch(getUserData(userData._id));
    }

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
