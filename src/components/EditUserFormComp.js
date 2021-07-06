import React, { useState, useEffect } from "react";
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
import profileBlank from "../images/blank-profile-picture.png";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../state/actions/userActions";
import { getAllUsersOfCompany } from "../state/actions/accountActions";
import { useHistory } from "react-router-dom";

const EditCompUserForm = (props) => {
  let history = useHistory();

  //Redux - dispatch
  const dispatch = useDispatch();

  const { companyData } = useSelector((state) => state.GetCompanyData);

  const [newuser, setNewUser] = useState({
    userID: props.userID,
    firstName: props.firstName,
    lastName: props.lastName,
    jobTitle: props.jobTitle,
    email: props.email,
    phone: props.phone,
    oldPassword: props.password,
    newPassword: "",
    userAvatar: props.userAvatar,
  });

  const onChangeFilePic = (e) => {
    setNewUser({ ...newuser, userAvatar: e.target.files[0] });
  };

  const submitChanges = () => {
    dispatch(
      updateUser(
        newuser.userID,
        newuser.firstName,
        newuser.lastName,
        newuser.jobTitle,
        newuser.email,
        newuser.phone,
        newuser.oldPassword,
        newuser.newPassword
      )
    );
    dispatch(getAllUsersOfCompany(companyData.companyData._id)); /////////
    history.push("/account");
  };

  return (
    <ProfileContainer>
      <FrameForm>
        <FormContainer encType="multipart/form-data">
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
                type="firstname"
                placeholder="First Name"
                value={newuser.firstName}
                onChange={(data) => {
                  setNewUser({ ...newuser, firstName: data.target.value });
                }}
              />
              <InputName
                type="lastname"
                placeholder="Last Name"
                value={newuser.lastName}
                onChange={(data) => {
                  setNewUser({ ...newuser, lastName: data.target.value });
                }}
              />
            </div>
          </WrapRow>

          <InputName
            type="jobTitle"
            placeholder="Job Title"
            value={newuser.jobTitle}
            onChange={(data) => {
              setNewUser({ ...newuser, jobTitle: data.target.value });
            }}
          />

          <Input
            type="tel"
            placeholder="050-123-4567"
            value={newuser.phone}
            onChange={(data) => {
              setNewUser({ ...newuser, phone: data.target.value });
            }}
          />

          <Input
            type="email"
            placeholder="Email"
            value={newuser.email}
            onChange={(data) => {
              setNewUser({ ...newuser, email: data.target.value });
            }}
          />

          <Input
            disabled="true"
            type="password"
            placeholder="Old Password"
            value="12345678"
          />

          <Input
            type="password"
            placeholder="New Password"
            value={newuser.newPassword}
            onChange={(data) => {
              setNewUser({ ...newuser, newPassword: data.target.value });
            }}
          />

          <Button onClick={submitChanges}>Save Changes</Button>
        </FormContainer>
      </FrameForm>
    </ProfileContainer>
  );
};

export default EditCompUserForm;
