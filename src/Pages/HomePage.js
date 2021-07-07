import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  let history = useHistory();
  //Redux - dispatch
  const { isAuth } = useSelector((state) => state.LoginAuth);

  useEffect(() => {
    if (!isAuth) {
      history.push("/auth");
    }
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default HomePage;
