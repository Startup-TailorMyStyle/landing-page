import { useState } from "react";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
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
          <LogoContainer to="/landing-page" aria-label="homepage">
            <SvgIcon src="mainLogo.png" width="300px" height="100px" />
          </LogoContainer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
