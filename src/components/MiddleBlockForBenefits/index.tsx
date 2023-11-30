import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import {
  MiddleContentForBenefitsSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";
import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import { MiddleBlockSection } from "../MiddleBlock/styles";
import { Slide } from "react-awesome-reveal";

const MiddleContentForBenefitsSections = ({
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <MiddleContentForBenefitsSection>
      <Slide direction="right">
            <ContentWrapper>
              <h6>{(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </>
                      );
                    })}
              </ServiceWrapper>
            </ContentWrapper>
            </Slide>
    </MiddleContentForBenefitsSection>
  );
};

export default withTranslation()(MiddleContentForBenefitsSections);
