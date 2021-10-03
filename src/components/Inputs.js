import React from "react";
import styled from "styled-components";
import { LightGrayishCyan2 } from "../styles/Colors";
import { VeryDarkCyan } from "../styles/Colors";
import Person from "../assets/images/icon-person.svg";
import Dollar from "../assets/images/icon-dollar.svg";

const InputDiv = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  bottom: 15px;
  left: 10px;
  height: 1rem;
`;

const Input = styled.input`
  background-color: ${LightGrayishCyan2};
  width: 100%;
  color: ${VeryDarkCyan};
  border-radius: 2px;
  padding: 0.1rem 0.7rem;
  margin: 5px 0;
  text-align: right;
  border: none;
  outline: none;
  font-size: 1.3rem;
  font-weight: 600;
  cursor: pointer;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ::placeholder {
    text-align: right;
    color: #7f9c9f;
  }

  :focus {
    outline: 2px solid #26c0ab;
  }
`;

const Inputs = ({ icon, setBill, setPerson, inputProps }) => {
  return (
    <InputDiv>
      <Image src={icon === "dollar" ? Dollar : Person} alt="icon" />
      <Input
        type="number"
        placeholder="0"
        onChange={(e) =>
          setBill ? setBill(e.target.value) : setPerson(e.target.value)
        }
        {...inputProps}
      />
    </InputDiv>
  );
};

export default Inputs;
