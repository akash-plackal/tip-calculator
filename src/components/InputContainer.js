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
`;

const InputContainer = ({ setBtnVal, setBill, setPerson }) => {
  const setValues = (e) => setBtnVal(e.target.value);

  return (
    <InputWrapper>
      <Labels>bill</Labels>
      <Inputs icon="dollar" setBill={setBill} />

      <Labels>select tip %</Labels>
      <BtnWrapper>
        <Button value={5} onClick={setValues}>
          5%
        </Button>
        <Button value={10} onClick={setValues}>
          10%
        </Button>
        <Button value={15} onClick={setValues}>
          15%
        </Button>
      </BtnWrapper>
      <BtnWrapper>
        <Button value={25} onClick={setValues}>
          25%
        </Button>
        <Button value={50} onClick={setValues}>
          50%
        </Button>
        <CustomButton>Custom</CustomButton>
      </BtnWrapper>

      <Labels>number of people</Labels>
      <Inputs setPerson={setPerson} />
    </InputWrapper>
  );
};

export default InputContainer;
