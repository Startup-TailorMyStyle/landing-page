import { Input } from "antd";
import styled from "styled-components";

export const MainPageBlockContainer = styled("section")`
  position: relative;
  padding: 5rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledInput = styled(Input)`
    width: 100%;
    padding: 12px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin-bottom: 10px;
    transition: border-color 0.3s;

    &:hover,
    &:focus {
      border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }

    &::placeholder {
      color: #a8a8a8;
    }
`;


export const FormGroup = styled("form")`
    width: 100%;
    max-width: 520px;
    display: flex;
    flex-direction: column;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const Span = styled("span")<any>`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonWrapper = styled("div")`
width: 100%;
  display: flex;
  justify-content: flex-start;  // Center the button horizontally
  margin-top: 10px;
  @media screen and (min-width: 1024px) {
    max-width: 100%;
  }

  button:last-child {
    margin-left: 0px;
  }
`;
