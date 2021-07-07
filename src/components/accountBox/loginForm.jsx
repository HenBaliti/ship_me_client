import React, { useContext, useState, useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/actions/authActions";
import { getUserData } from "../../state/actions/userActions";
import { getCompanyData } from "../../state/actions/companiesActions";

export function LoginForm(props) {
  //Redux - dispatch
  const dispatch = useDispatch();
  const { isAuth, userObj } = useSelector((state) => state.LoginAuth);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { switchToSignup, switchToCompanies } = useContext(AccountContext);

  useEffect(() => {
    if (isAuth) {
      switchToCompanies();
      dispatch(getUserData());
      dispatch(getCompanyData(userObj.companies[0]));
    }
  }, [isAuth]);

  const submitLogin = () => {
    dispatch(login(user.email, user.password));
  };

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin={30} />
      <FormContainer>
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
      <SubmitButton onClick={submitLogin}>Signin</SubmitButton>
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
