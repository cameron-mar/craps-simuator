import styled from "@emotion/styled";
import * as React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface CustomInputProps {
  defaultValue?: string;
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  type?: string;
}

const StyledDiv = styled.div`
  margin: 5px;
  flex: 1 0 100%;
`;

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
`;

const StyledInput = styled.input`
  border-radius: 4px;
  float: right;
  padding: 5px;
  text-align: center;
  width: 100px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const CustomInput = (props: CustomInputProps) => {
  return (
    <StyledDiv>
      <StyledLabel htmlFor={props.id}>{props.label}:</StyledLabel>
      <StyledInput
        type={props.type || "text"}
        defaultValue={props.defaultValue || ""}
        id={props.id}
        {...props.register(props.id)}
      />
    </StyledDiv>
  );
};

export default CustomInput;
