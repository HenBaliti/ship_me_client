import React from "react";
import styled from "styled-components";

const AccountPage = () => {
  return (
    <Wrapper>
      <Title>Hello World!</Title>
      <UserDiv>asdfasd</UserDiv>
      <UserDiv>asdfasd</UserDiv>
      <UserDiv>asdfasd</UserDiv>
    </Wrapper>
  );
};

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  margin-top: 100px;
  padding: 4em;
  background: papayawhip;
`;

const UserDiv = styled.div`
  padding: 4em;
  border-radius: 20px;
  background: white;
  width: 200px;
  height: 30px;
`;

export default AccountPage;
