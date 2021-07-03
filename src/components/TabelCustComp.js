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

function createData(id, companyName, phone, website, address, contactPhone) {
  return { id, companyName, phone, website, address, contactPhone };
}

const rows = [
  createData(
    "123",
    "Stam Company 1",
    "0504022208",
    "stam.co.il",
    "Ktovet Stam 123",
    "0504022208"
  ),
  createData(
    "1234",
    "Stam Company 1",
    "0504022208",
    "stam.co.il",
    "Ktovet Stam 123",
    "0504022208"
  ),
  createData(
    "12345",
    "Stam Company 1",
    "0504022208",
    "stam.co.il",
    "Ktovet Stam 123",
    "0504022208"
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
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
            <StyledTableCell>Contact Phone</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                <b>{row.id}</b>
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
                    <b>{row.companyName}</b>
                  </div>
                </WrapRow>
              </StyledTableCell>
              <StyledTableCell>{row.phone}</StyledTableCell>
              <StyledTableCell>{row.website}</StyledTableCell>
              <StyledTableCell>{row.address}</StyledTableCell>
              <StyledTableCell>{row.contactPhone}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
