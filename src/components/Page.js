import React from "react";
import styled from "styled-components";
import { VeryDarkCyan } from "../styles/Colors";
import { LightGrayishCyan } from "../styles/Colors";
import Card from "./Card";

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${LightGrayishCyan};

  @media (max-width: 500px) {
    justify-content: flex-start;
    padding-top: 2rem;
  }
`;

const Title = styled.h2`
  letter-spacing: 0.4rem;
  color: ${VeryDarkCyan};

  @media (max-width: 500px) {
    font-size: 2rem;
    letter-spacing: 0.6rem;
  }
`;

const Page = () => {
  return (
    <PageContainer>
      <Title>SPLI</Title>
      <Title>TTER</Title>

      <Card />
    </PageContainer>
  );
};

export default Page;
