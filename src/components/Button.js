import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 0 0.7rem;
  margin: 0 5px;
  border: none;
  outline: none;
  background-color: #00494d;
  color: white;
  border-radius: 5px;
  font-family: "Space Mono", monospace;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;

  :focus,
  :hover {
    background-color: #26c2ad;
    color: #00494d;
  }

  @media (max-width: 500px) {
    /* min-width: 40vw; */
  }
`;

export const CustomButton = styled(Button)`
  background-color: #f4fafa;
  color: #7f9c9f;
`;

export const ResetBtn = styled(Button)`
  width: 80%;
  padding: 0.5rem 0;
  background-color: #26c2ad;
  color: #00494d;
  font-size: 1rem;
  margin-top: 4.2rem;
  transition: 300ms ease-in-out;

  :active {
    background-color: #2a8276;
  }

  @media (max-width: 500px) {
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
`;
