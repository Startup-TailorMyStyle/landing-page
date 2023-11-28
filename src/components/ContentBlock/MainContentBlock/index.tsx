import { Row, Col, Input } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  MainPageBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  FormGroup,
  StyledInput
} from "./styles";
import { useState } from "react";

const MainPageBlock = ({
  title,
  content,
  button,
  icon,
  defaultInputText,
  t,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
        const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [message, setMessage] = useState('Initial value');

  
  const handleSubmit = ($event: any) => {
    console.log(document.getElementById('emailInput'));
  }

  const handleChange = () => {
    console.log('fds')
  }
  
  return (
    <MainPageBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Row justify="space-between" align="middle">
            <Col lg={12} md={12} sm={24} xs={24}>
              <Col span={24}>
              <FormGroup autoComplete="off">
              <StyledInput
                name="emailInput"
                placeholder="Please enter your email"
                onChange={handleChange}
              />
            </FormGroup>
              </Col>
        </Col>

      </Row>
              <ButtonWrapper>
                      <Button
                        color={button.color}
                        fixedWidth={true}
                        onClick={() => handleSubmit("contact")}
                      >
                        {(button.title)}
                      </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </MainPageBlockContainer>
  );
};

export default withTranslation()(MainPageBlock);
