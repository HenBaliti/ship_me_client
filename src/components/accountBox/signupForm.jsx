import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  Button,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
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
    <BoxContainer>
      <FormContainer onSubmit={submitChanges}>
        <Input
          type="text"
          placeholder="First Name"
          value={newuser.firstName}
          onChange={(data) => {
            setNewUser({ ...newuser, firstName: data.target.value });
          }}
        />
        <Input
          type="text"
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
          type="phone"
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
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
