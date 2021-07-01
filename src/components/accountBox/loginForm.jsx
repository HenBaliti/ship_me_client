import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { switchToSignup } = useContext(AccountContext);

  const submitChanges = (e) => {
    e.preventDefault();

    //axios->...
    // axios
    // .post(`${serverApi}/login`, user)
    // .catch((error) => console.log(error));
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={submitChanges}>
        <Input
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={(data) => {
            setUser({ ...user, email: data.target.value });
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(data) => {
            setUser({ ...user, password: data.target.value });
          }}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />

      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
