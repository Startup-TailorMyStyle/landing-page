import styled from "styled-components";

export const MiddleContentForBenefitsSection = styled("section")`
position: relative;
padding: 8rem 0 3rem;
text-align: center;
display: flex;
justify-content: center;

@media screen and (max-width: 1024px) {
  padding: 7rem 0 3rem;
}
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 1047px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  max-width: 100%;
`;

export const MinTitle = styled("h5")`
font-size: 24px;
font-weight: bold;
margin-bottom: 8px;
text-align: center;
`;

export const MinPara = styled("p")`
font-size: 18px;
text-align: center;
margin-bottom: 20px;
`;
