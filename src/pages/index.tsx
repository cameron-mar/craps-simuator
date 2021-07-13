import styled from "@emotion/styled";
import * as React from "react";
import { useForm } from "react-hook-form";
import CustomInput from "../components/customInput";

const StyledForm = styled.form`
  border-right: 1px solid #000000;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 50%;
`;

const IndexPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(submitHandler)}>
        <CustomInput
          label="Table Minimum $"
          type="number"
          defaultValue="10"
          id="tableMin"
          register={register}
        />
        <CustomInput
          label="Bankroll $"
          type="number"
          defaultValue="1000"
          id="bankroll"
          register={register}
        />
        <input type="submit" value="Roll!" />
      </StyledForm>
    </div>
  );
};

export default IndexPage;
