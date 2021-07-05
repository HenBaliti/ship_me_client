import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyData } from "../state/actions/companiesActions";

const HomePage = () => {
  //Redux - dispatch
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.LoginAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(getCompanyData());
    } else {
      return <div>You Have No ACCSESS</div>;
    }
  }, [isAuth]);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomePage;
