import React from "react";
import styled from "styled-components";
import ReactRoundedImage from "react-rounded-image";
import profileBlank from "../../src/images/blank-profile-picture.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const AccountPage = () => {
  return (
    <Wrapper>
      <TwoInRow>
        <ShipmentsFutureDiv>
          <WillBeH1>Here Will Be Something...</WillBeH1>
        </ShipmentsFutureDiv>
        <LineDivider></LineDivider>
        <UsersListDiv>
          <Title>Users</Title>
          <TwoInRow>
            <SearchBarUsers className="ui search">
              <SearchBarInput type="text" placeholder="Search Users" />
              <SearchIcon />
            </SearchBarUsers>
            <Button to="/createnewuser">Add User</Button>
          </TwoInRow>
          <UserDiv>
            <TwoInRow>
              <ReactRoundedImage
                image={profileBlank}
                roundedColor="#447FFF"
                imageWidth="30"
                imageHeight="30"
                roundedSize="0"
                hoverColor="black"
              />
              <TwoInRow>
                <NameOfUser>Stam Shem</NameOfUser>
                <EmailOfUser>stam@gmail.com</EmailOfUser>
              </TwoInRow>
              <div>asdasd</div>
            </TwoInRow>
            <TwoInRow>
              <JobInfoUser>stammmmmm</JobInfoUser>
              <ManagerTag>#Manager</ManagerTag>
            </TwoInRow>
          </UserDiv>
          <UserDiv>
            <TwoInRow>
              <ReactRoundedImage
                image={profileBlank}
                roundedColor="#447FFF"
                imageWidth="30"
                imageHeight="30"
                roundedSize="0"
                hoverColor="black"
              />
              <TwoInRow>
                <NameOfUser>Stam Shem</NameOfUser>
                <EmailOfUser>stam@gmail.com</EmailOfUser>
              </TwoInRow>
            </TwoInRow>
            <JobInfoUser>stammmmmm</JobInfoUser>
          </UserDiv>
          <UserDiv>
            <TwoInRow>
              <ReactRoundedImage
                image={profileBlank}
                roundedColor="#447FFF"
                imageWidth="30"
                imageHeight="30"
                roundedSize="0"
                hoverColor="black"
              />
              <TwoInRow>
                <NameOfUser>Stam Shem</NameOfUser>
                <EmailOfUser>stam@gmail.com</EmailOfUser>
              </TwoInRow>
            </TwoInRow>
            <JobInfoUser>stammmmmm</JobInfoUser>
          </UserDiv>
        </UsersListDiv>
      </TwoInRow>
    </Wrapper>
  );
};

export const LineDivider = styled.div`
  border-left: 1px solid rgba(200, 200, 200, 0.3);
  margin-left: 6px;
  height: 350px;
  width: 10%;
`;

export const TwoInRow = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const SearchBarUsers = styled.div`
  margin-bottom: 10px;
`;

export const ManagerTag = styled.div`
  font-size: 0.6em;
  padding: 0.25em 1em;
  background-color: #e8e8e8;
  border-radius: 25px;
  align-self: center;
  margin-left: 45px;
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

export const ShipmentsFutureDiv = styled.form`
  width: 70%;
`;
export const UsersListDiv = styled.form`
  width: 40%;
`;

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: black;
`;

const WillBeH1 = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
`;

const NameOfUser = styled.h1`
  font-size: 0.9em;
  padding-left: 1rem;
  text-align: center;
  color: #096f9f;
`;
const EmailOfUser = styled.h1`
  font-size: 0.8em;
  padding-left: 1rem;
  text-align: center;
  color: black;
`;

const JobInfoUser = styled.h1`
  font-size: 0.75em;
  padding-left: 3rem;
  text-align: left;
  color: grey;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section``;

const UserDiv = styled.div`
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 1px 20px;
  background: white;
  width: 80%;
  height: 100%;
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

export default AccountPage;
