import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  return (
    <HeaderSection>
      <Container>
          <LogoContainer to="/" aria-label="homepage">
          <SvgIcon src="mainLogo.jpeg" width="401px" height="150px" />
          </LogoContainer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
