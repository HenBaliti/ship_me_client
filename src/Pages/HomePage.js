import React from "react";
import Navbar from "../components/Navbar";
import ProfilePage from "./Profile";
import AccountPage from "./AccountPage";
import CompanyPage from "./Company";
import CompaniesPage from "./Companies";
import { BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Route path="/profile" component={ProfilePage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/companies" component={CompaniesPage} />
      </div>
    </Router>
  );
};

export default HomePage;
