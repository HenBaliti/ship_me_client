import React, { useState } from "react";
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

const ProfilePage = () => {
  const [newuser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    userAvatar: "",
  });

  const onChangeFilePic = (e) => {
    setNewUser({ ...newuser, userAvatar: e.target.files[0] });
  };

  const submitChanges = (e) => {
    e.preventDefault();
    //Building the form Data - for sending to server
    const formData = new FormData();

    formData.append("firstName", newuser.firstName);
    formData.append("lastName", newuser.lastName);
    formData.append("email", newuser.email);
    formData.append("phone", newuser.phone);
    formData.append("password", newuser.passowrd);
    formData.append("userAvatar", newuser.userAvatar);

    //axios->...
    // axios
    // .post(`${serverApi}/editUser`, formData)
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

          <Input
            type="tel"
            placeholder="050-123-4567"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
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
            type="password"
            placeholder="Password"
            value={newuser.passowrd}
            onChange={(data) => {
              setNewUser({ ...newuser, passowrd: data.target.value });
            }}
          />

          <Button type="submit">Save Changes</Button>
        </FormContainer>
      </FrameForm>
    </ProfileContainer>
  );
};

export default ProfilePage;
