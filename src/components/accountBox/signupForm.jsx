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
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../state/actions/authActions";

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

  const onChangeFilePic = (e) => {
    setNewUser({ ...newuser, userAvatar: e.target.files[0] });
  };

  const submitRegister = () => {
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
    history.push("/");

    // e.preventDefault();
    // //Building the form Data - for sending to server
    // const formData = new FormData();

    // formData.append("first_name", newuser.first_name);
    // formData.append("last_name", newuser.last_name);
    // formData.append("email", newuser.email);
    // formData.append("phone", newuser.phone);
    // formData.append("password", newuser.password);
    // formData.append("job_title", newuser.job_title);
    // formData.append("userAvatar", newuser.userAvatar);

    // axios
    //   .post(`http://localhost:4000/users/signup`, newuser)
    //   .then((res) => {
    //     console.log("Successfully Registered\n");
    //     console.log(res.data);
    //     history.push("/");
    //   })
    //   .catch((error) =>
    //     console.log("There was an error with login \n" + error)
    //   );
  };

  return (
    <BoxContainer>
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
    </BoxContainer>
  );
}
