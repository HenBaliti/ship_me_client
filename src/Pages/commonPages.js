import styled from "styled-components";

//Styling

export const SelectCustome = styled.select`
  width: 15%;
  height: 35px;
  background: #ffffff;
  color: gray;
  padding-left: 5px;
  font-size: 14px;

  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const ProfileContainer = styled.div`
  margin-top: 50px;
`;
export const Marginer = styled.div`
  margin-bottom: 60px;
`;
export const FrameForm = styled.div`
  padding: 0em 20em;
`;

export const Button = styled.button`
  width: 30%;
  color: white;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #096f9f;
  background-color: #096f9f;
  border-radius: 3px;
  align-items: center;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const WrapRow = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Input = styled.input`
  margin: 10px;
  width: 80%;
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

export const InputName = styled.input`
  margin: 10px;
  width: 80%;
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
  display: "none";
`;

export const InputFile = styled.input`
  background-image: no-repeat scroll 7px 7px;
  margin: 10px;
  width: 15%;
  height: 100%;
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
