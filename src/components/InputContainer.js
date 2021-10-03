import React from "react";
import styled from "styled-components";
import Inputs from "./Inputs";
import { DarkGrayishCyan } from "../styles/Colors";
import { Button } from "./Button";
import { CustomButton } from "./Button";

const InputWrapper = styled.div`
  width: 45%;
  margin: 1.5rem;
  margin-right: 5px;
`;

const Labels = styled.label`
  color: ${DarkGrayishCyan};
  text-transform: capitalize;
  font-weight: 700;
  font-size: 0.8rem;
  margin-bottom: 10px;
`;

const BtnWrapper = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  /* border: 1px solid; */
`;

const InputContainer = ({ setBill, setPerson }) => {
  return (
    <InputWrapper>
      <Labels>bill</Labels>
      <Inputs icon="dollar" setBill={setBill} />

      <Labels>select tip %</Labels>
      <BtnWrapper>
        <Button>5%</Button>
        <Button>10%</Button>
        <Button>15%</Button>
      </BtnWrapper>
      <BtnWrapper>
        <Button>25%</Button>
        <Button>50%</Button>
        <CustomButton>Custom</CustomButton>
      </BtnWrapper>

      <Labels>number of people</Labels>
      <Inputs inputProp={{ onChange, value }} setPerson={setPerson} />
    </InputWrapper>
  );
};

export default InputContainer;
