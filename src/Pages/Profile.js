import React, { useState } from "react";
import styled from "styled-components";

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
      <div style={{ marginTop: 200 }}>
        <FormContainer onSubmit={submitChanges} encType="multipart/form-data">
          <Input
            type="firstname"
            placeholder="First Name"
            value={newuser.firstName}
            onChange={(data) => {
              setNewUser({ ...newuser, firstName: data.target.value });
            }}
          />
          <Input
            type="lastname"
            placeholder="Last Name"
            value={newuser.lastName}
            onChange={(data) => {
              setNewUser({ ...newuser, lastName: data.target.value });
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
            type="tel"
            placeholder="050-123-4567"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={newuser.phone}
            onChange={(data) => {
              setNewUser({ ...newuser, phone: data.target.value });
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

          <Input
            type="file"
            placeholder="Choose Picture"
            onChange={onChangeFilePic}
          />
          <Button type="submit">Save Changes</Button>
        </FormContainer>
      </div>
    </ProfileContainer>
  );
};

//Styling

const ProfileContainer = styled.div``;

const Button = styled.button`
  color: rgb(68, 127, 255);
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid rgb(68, 127, 255);
  border-radius: 3px;
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(68, 127, 255);
  }
`;

export default ProfilePage;
