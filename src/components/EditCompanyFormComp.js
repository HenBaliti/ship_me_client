import React from "react";
import { useState, useEffect } from "react";
import {
  ProfileContainer,
  FormContainer,
  FrameForm,
  Input,
  Button,
  InputName,
  WrapRow,
  InputFile,
} from "../Pages/commonPages";
import ReactRoundedImage from "react-rounded-image";
import profileBlank from "../images/profile-company-blank.jpg";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import {
  getCompanyData,
  updateCompany,
} from "../state/actions/companiesActions";
import { useHistory } from "react-router-dom";

const EditCompanyForm = (props) => {
  //Redux - dispatch
  const dispatch = useDispatch();

  let history = useHistory();

  const { companyData, primaryManagerData } = useSelector(
    (state) => state.GetCompanyData
  );

  const [company, setCompany] = useState({
    companyID: props.companyID,
    avatarCompany: props.avatar,
    city: props.city,
    companyAdress: props.address,
    CompanyStateRes: props.CompanyStateRes,
    zipCode: props.zipCode,
    website: props.website,
    managersCompany: props.managersCompany,
    usersCompany: props.usersCompany,
    companyName: props.company_name,
    phone: props.company_phone,
    email: props.company_email,
    primary_contact_id: props.primary_contact_id,
  });

  const onChangeFilePic = (e) => {
    setCompany({ ...company, avatarCompany: e.target.files[0] });
  };

  const submitChanges = () => {
    dispatch(
      updateCompany(
        company.companyID,
        company.avatar,
        company.city,
        company.companyAdress,
        company.CompanyStateRes,
        company.zipCode,
        company.website,
        company.managersCompany,
        company.usersCompany,
        company.companyName,
        company.phone,
        company.email,
        company.primary_contact_id
      )
    );
    history.push("/companies");
  };

  return (
    <ProfileContainer>
      <FrameForm>
        <FormContainer onSubmit={submitChanges} encType="multipart/form-data">
          <WrapRow>
            <ReactRoundedImage
              image={profileBlank}
              roundedColor="#447FFF"
              imageWidth="150"
              imageHeight="150"
              roundedSize="0"
              hoverColor="black"
            />

            <InputFile
              type="file"
              placeholder="Edit"
              onChange={onChangeFilePic}
              style={{ display: "none" }}
            />
            <label htmlFor="icon-button-file">
              <IconButton
                color="#447FFF"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <div>
              <InputName
                type="text"
                placeholder="Company Name"
                value={company.companyName}
                onChange={(data) => {
                  setCompany({ ...company, companyName: data.target.value });
                }}
              />
              <InputName
                type="text"
                placeholder="Company Address"
                value={company.companyAdress}
                onChange={(data) => {
                  setCompany({ ...company, companyAdress: data.target.value });
                }}
              />
            </div>
          </WrapRow>
          <WrapRow>
            <Input
              type="text"
              placeholder="City"
              value={company.city}
              onChange={(data) => {
                setCompany({ ...company, city: data.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="State"
              value={company.CompanyStateRes}
              onChange={(data) => {
                setCompany({ ...company, CompanyStateRes: data.target.value });
              }}
            />
            <Input
              type="text"
              placeholder="Zip Code"
              value={company.zipCode}
              onChange={(data) => {
                setCompany({ ...company, zipCode: data.target.value });
              }}
            />
          </WrapRow>
          <Input
            type="phone"
            placeholder="050-123-4567"
            value={company.phone}
            onChange={(data) => {
              setCompany({ ...company, phone: data.target.value });
            }}
          />
          <Input
            type="email"
            placeholder="Company Email"
            value={company.email}
            onChange={(data) => {
              setCompany({ ...company, email: data.target.value });
            }}
          />
          <Input
            type="text"
            placeholder="Company Website"
            value={company.website}
            onChange={(data) => {
              setCompany({ ...company, website: data.target.value });
            }}
          />
          <br></br>
          <br></br>

          <Button type="submit">Save Changes</Button>
        </FormContainer>
      </FrameForm>
    </ProfileContainer>
  );
};

export default EditCompanyForm;
