import React from "react";
import styled from "styled-components";
import CustomizedTables from "../components/TabelCustComp";

const CompaniesPage = () => {
  return (
    <CompaniesContainer>
      <CustomizedTables></CustomizedTables>
    </CompaniesContainer>
  );
};

const CompaniesContainer = styled.div`
  margin-top: 30px;
`;

export default CompaniesPage;
