import React from "react";
import styled from "styled-components";
import { ResetBtn } from "./Button";

const OutputWrapper = styled.div`
  width: 50%;
  margin: 1.5rem;
  background-color: #00494d;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
  flex-direction: column;

  @media (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const OutputLabels = styled.div`
  width: 83%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.9rem 0 1rem 0;
`;
const TitleDiv = styled.div``;

const Title = styled.p`
  color: white;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 0.7rem;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Disc = styled.p`
  font-size: 0.7rem;
  color: #268576;

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const Amt = styled.p`
  font-weight: 700;
  font-size: 2.8rem;
  color: #26c2ad;
`;

const OutputContainer = ({ reset, tip, ans }) => {
  return (
    <OutputWrapper>
      <OutputLabels>
        <TitleDiv>
          <Title>tip amount</Title>
          <Disc>/person</Disc>
        </TitleDiv>
        <Amt>{isNaN(tip) ? 0 : tip}</Amt>
      </OutputLabels>
      <OutputLabels>
        <TitleDiv>
          <Title>total</Title>
          <Disc>/person</Disc>
        </TitleDiv>
        <Amt>{isNaN(ans) ? 0 : ans}</Amt>
      </OutputLabels>
      <ResetBtn onClick={reset}>RESET</ResetBtn>
    </OutputWrapper>
  );
};

export default OutputContainer;
