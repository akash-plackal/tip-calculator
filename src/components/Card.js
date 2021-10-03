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
`;
const Card = () => {
  const [Bill, setBill] = useState(0);
  const [Person, setPerson] = useState(1); // for second input

  console.log(Bill);
  console.log(Person);

  return (
    <CardContainer>
      <InputContainer setBill={setBill} setPerson={setPerson} />
      <OutputContainer />
    </CardContainer>
  );
};

export default Card;
