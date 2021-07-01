import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import ProfilePage from "./Profile";
import AccountPage from "./Account";
import CompanyPage from "./Company";
import CompaniesPage from "./Companies";
import { BrowserRouter as Router, Route } from "react-router-dom";

const HomePage = () => {
  return (
    <Router>
      <HomeContainer>
        <Navbar />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/companies" component={CompaniesPage} />
      </HomeContainer>
    </Router>
  );
};

const HomeContainer = styled.div`
  background-color: white;
`;

export default HomePage;
