import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  ProfileContainer,
  FormContainer,
  FrameForm,
  Input,
  Button,
  InputName,
  WrapRow,
  InputFile,
} from "./commonPages";
import ReactRoundedImage from "react-rounded-image";
import profileBlank from "../../src/images/blank-profile-picture.png";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";

const CompanyPage = () => {
  const [company, setCompany] = useState({
    companyName: "",
    companyAdress: "",
    city: "",
    phone: "",
    email: "",
    website: "",
    avatarCompany: "",
  });

  const onChangeFilePic = (e) => {
    setCompany({ ...company, avatarCompany: e.target.files[0] });
  };

  const submitChanges = (e) => {
    e.preventDefault();
    //Building the form Data - for sending to server
    const formData = new FormData();

    formData.append("companyName", company.companyName);
    formData.append("companyAdress", company.companyAdress);
    formData.append("city", company.city);
    formData.append("phone", company.phone);
    formData.append("email", company.email);
    formData.append("website", company.website);
    formData.append("companyAdress", company.companyAdress);
    formData.append("avatarCompany", company.avatarCompany);

    //axios->...
    // axios
    // .post(`${serverApi}/editCompany`, formData)
    // .catch((error) => console.log(error));
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

          <Input
            type="text"
            placeholder="City"
            value={company.city}
            onChange={(data) => {
              setCompany({ ...company, city: data.target.value });
            }}
          />
          <Input
            type="phone"
            placeholder="050-123-4567"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={company.phone}
            onChange={(data) => {
              setCompany({ ...company, phone: data.target.value });
            }}
          />
          <Input
            type="email"
            placeholder="Email"
            value={company.email}
            onChange={(data) => {
              setCompany({ ...company, email: data.target.value });
            }}
          />

          <Input
            type="text"
            placeholder="Website"
            value={company.website}
            onChange={(data) => {
              setCompany({ ...company, website: data.target.value });
            }}
          />
          <Input
            type="file"
            placeholder="Choose Picture"
            onChange={onChangeFilePic}
          />
          <Button type="submit">Save Changes</Button>
        </FormContainer>
      </FrameForm>
    </ProfileContainer>
  );
};

export default CompanyPage;
