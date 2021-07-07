import React, { useEffect } from "react";
import NewCompanyFormComp from "../components/NewCompanyFormComp";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { NotAuth } from "./Companies";

const NewCompanyPage = () => {
  let history = useHistory();
  const { isAuth, userObj } = useSelector((state) => state.LoginAuth);

  useEffect(() => {
    if (!isAuth) {
      history.push("/auth");
    }
  }, []);

  if (!userObj) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      {userObj.super_admin ? (
        <NewCompanyFormComp></NewCompanyFormComp>
      ) : (
        <NotAuth>
          You are not authorized to be here .<br></br>
          You Need to be super admin.
        </NotAuth>
      )}
    </div>
  );
};

export default NewCompanyPage;
