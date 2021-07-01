import React from "react";
import { useState } from "react";
import styled from "styled-components";

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
    <div style={{ marginTop: 200 }}>
      <FormContainer onSubmit={submitChanges} encType="multipart/form-data">
        <Input
          type="text"
          placeholder="Company Name"
          value={company.companyName}
          onChange={(data) => {
            setCompany({ ...company, companyName: data.target.value });
          }}
        />
        <Input
          type="text"
          placeholder="Company Address"
          value={company.companyAdress}
          onChange={(data) => {
            setCompany({ ...company, companyAdress: data.target.value });
          }}
        />
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
    </div>
  );
};

const CompanyContainer = styled.div``;

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

export default CompanyPage;
