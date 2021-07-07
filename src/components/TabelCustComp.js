import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ReactRoundedImage from "react-rounded-image";
import profileBlank from "../../src/images/profile-company-blank.jpg";
import { WrapRow } from "../Pages/commonPages";
import MenuListCompositionCompany from "./DotsCompCompany";

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.black,
    fontWeight: 700,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function CustomizedTables(props) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Company Name</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Website</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Primary Contact Name</StyledTableCell>
            <StyledTableCell>Primary Contact Phone</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.arrayOfCompanies.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                <b>{row._id}</b>
              </StyledTableCell>
              <StyledTableCell>
                <WrapRow>
                  <ReactRoundedImage
                    image={profileBlank}
                    roundedColor="#447FFF"
                    imageWidth="40"
                    imageHeight="40"
                    roundedSize="0"
                    hoverColor="black"
                  />
                  <div style={{ marginLeft: 10 }}>
                    <b>{row.name}</b>
                  </div>
                </WrapRow>
              </StyledTableCell>
              <StyledTableCell>{row.company_phone}</StyledTableCell>
              <StyledTableCell>{row.website}</StyledTableCell>
              <StyledTableCell>{row.address}</StyledTableCell>
              <StyledTableCell>ssssssssss</StyledTableCell>
              <StyledTableCell>ssssssssss</StyledTableCell>
              <StyledTableCell>
                <MenuListCompositionCompany companyID={row._id} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
