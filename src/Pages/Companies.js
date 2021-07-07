import React, { useEffect } from "react";
import styled from "styled-components";
import CustomizedTables from "../components/TabelCustComp";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllCompanies } from "../state/actions/companiesActions";
import { Marginer } from "./commonPages";

const CompaniesPage = () => {
  //Redux - dispatch
  const dispatch = useDispatch();
  const { arrayOfCompanies } = useSelector((state) => state.GetAllCompanies);
  let history = useHistory();
  const { isAuth, userObj } = useSelector((state) => state.LoginAuth);

  useEffect(() => {
    if (!isAuth) {
      history.push("/auth");
    } else {
      dispatch(getAllCompanies());
    }
  }, []);

  if (!arrayOfCompanies) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      {userObj.super_admin ? (
        <CompaniesContainer>
          <WrapRowSpace>
            <SearchBarCompanies className="ui search">
              <SearchBarInput type="text" placeholder="Search Users" />
              <SearchIcon />
            </SearchBarCompanies>
            <Button to="/createnewcompany">Add New Company</Button>
          </WrapRowSpace>
          <br></br>
          <br></br>
          <CustomizedTables
            arrayOfCompanies={arrayOfCompanies}
          ></CustomizedTables>
          <Marginer></Marginer>
        </CompaniesContainer>
      ) : (
        <NotAuth>
          You are not authorized to be here .<br></br>
          You Need to be super admin.
        </NotAuth>
      )}
    </div>
  );
};

export default CompaniesPage;

const CompaniesContainer = styled.div`
  margin-top: 30px;
`;

export const WrapRowSpace = styled.form`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Button = styled(Link)`
  width: 15%;
  color: white;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #096f9f;
  background-color: #096f9f;
  border-radius: 3px;
  align-items: center;
  text-decoration: none;
`;

export const SearchBarInput = styled.input`
  width: 200px;
  height: 10px;
  border-radius: 25px;
  border: 1px solid rgba(34, 36, 38, 0.15);
  padding: 15px 10px;
`;

export const searchLogo = styled.i`
  float: right;
  font-size: 20px;
  cursor: pointer;
`;

export const SearchBarCompanies = styled.div`
  margin-left: 30px;
`;

export const NotAuth = styled.div`
  margin-top: 100px;
  align-items: center;
  padding: 0 20rem;
  font-size: 20px;
  font-weight: 600;
`;
