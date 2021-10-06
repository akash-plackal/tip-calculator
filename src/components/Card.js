import React, { useState } from "react";
import styled from "styled-components";
import { White } from "../styles/Colors";
import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";

const CardContainer = styled.div`
  background-color: ${White};
  width: 55%;
  height: 57vh;
  box-shadow: 0px 3px 9.4px -8px rgba(0, 0, 0, 0.042),
    0px 4.3px 13.9px -8px rgba(0, 0, 0, 0.064),
    0px 5px 32px -8px rgba(0, 0, 0, 0.16);
  border-radius: 1.2rem;
  margin-top: 3rem;
  display: flex;

  @media (max-width: 1100px) {
    width: 65%;
  }

  @media (max-width: 970px) {
    width: 70%;
  }

  @media (max-width: 870px) {
    width: 80%;
  }

  @media (max-width: 670px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    border-radius: 1.7rem;
  }
`;

// =====================

const Card = () => {
  const [Bill, setBill] = useState(0);
  const [Person, setPerson] = useState(1); // for second input

  const [btnVal, setBtnVal] = useState(0);

  let total = Bill / Person;
  let dec = btnVal / 100;

  let tip = dec * total;
  let ans = total + tip;

  const reset = () => setBill(0) && setPerson(1);

  return (
    <CardContainer>
      <InputContainer
        Bill={Bill}
        setBtnVal={setBtnVal}
        setBill={setBill}
        setPerson={setPerson}
      />
      <OutputContainer
        reset={reset}
        tip={tip.toFixed(2)}
        ans={ans.toFixed(2)}
      />
    </CardContainer>
  );
};

export default Card;
