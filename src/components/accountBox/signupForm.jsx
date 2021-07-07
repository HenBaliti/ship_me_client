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
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../state/actions/authActions";
import { getUserData } from "../../state/actions/userActions";
import { getCompanyData } from "../../state/actions/companiesActions";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePhone,
  validatePassword,
  validateJobTitle,
} from "../../util/formCheck";

export function SignupForm(props) {
  //Redux - dispatch
  const dispatch = useDispatch();
  const { loading, isAuth, userObj, error } = useSelector(
    (state) => state.RegisterAuth
  );
  let history = useHistory();

  const { switchToSignin } = useContext(AccountContext);
  const [newuser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    userAvatar: "",
    job_title: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    firstNameMessage: "",
    lastNameMessage: "",
    emailMessage: "",
    phoneMessage: "",
    passwordMessage: "",
    jobTitleMessage: "",
  });

  //-- Validate Form --

  const validateDetails = () => {
    const vEmail = validateEmail(newuser.email);
    const vFirstName = validateFirstName(newuser.first_name);
    const vLastName = validateLastName(newuser.last_name);
    const vPhone = validatePhone(newuser.phone);
    const vPassword = validatePassword(newuser.password);
    const vJobTitle = validateJobTitle(newuser.job_title);

    console.log(vFirstName);
    console.log(vLastName);
    console.log(vJobTitle);
    console.log(vEmail);
    console.log(vPhone);
    console.log(vPassword);

    messagesErrors(vEmail, vFirstName, vLastName, vPhone, vPassword, vJobTitle);
    return (
      vEmail && vFirstName && vLastName && vPhone && vPassword && vJobTitle
    );
  };

  const messagesErrors = (
    vEmail,
    vFirstName,
    vLastName,
    vPhone,
    vPassword,
    vJobTitle
  ) => {
    if (vEmail && vPassword && vFirstName && vLastName && vPhone) {
      setErrorMessage({
        ...errorMessage,
        jobTitleMessage: "",
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        jobTitleMessage:
          "Please fill all the fields and enter a valid information",
      });
    }
    console.log(errorMessage);
  };

  useEffect(() => {
    if (isAuth) {
      history.push("/");
      dispatch(login(newuser.email, newuser.password));
      dispatch(getUserData());
      dispatch(getCompanyData(userObj.companies[0]));
    }
  }, [isAuth]);

  const onChangeFilePic = (e) => {
    setNewUser({ ...newuser, userAvatar: e.target.files[0] });
  };

  const submitRegister = () => {
    if (!validateDetails()) return;
    else {
      dispatch(
        register(
          newuser.first_name,
          newuser.last_name,
          newuser.email,
          newuser.phone,
          newuser.password,
          newuser.job_title
        )
      );
    }
  };

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin={30} />
      <FormContainer>
        <Input
          type="text"
          placeholder="First Name"
          value={newuser.firstName}
          onChange={(data) => {
            setNewUser({ ...newuser, first_name: data.target.value });
          }}
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={newuser.lastName}
          onChange={(data) => {
            setNewUser({ ...newuser, last_name: data.target.value });
          }}
        />

        <Input
          type="text"
          placeholder="Job Title"
          value={newuser.jobTitle}
          onChange={(data) => {
            setNewUser({ ...newuser, job_title: data.target.value });
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
            setNewUser({ ...newuser, password: data.target.value });
          }}
        />

        <Input
          type="file"
          placeholder="Choose Picture"
          onChange={onChangeFilePic}
        />
        <span style={{ color: "red", fontSize: 13 }}>
          {errorMessage.jobTitleMessage}
        </span>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={submitRegister}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin={30} />
    </BoxContainer>
  );
}
