import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import {
  Content,
  ContentWrapper,
  ServiceWrapper,
  QaSection,
  Answer,
  Question,
} from "./styles";
import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import { Slide } from "react-awesome-reveal";

const ContentForQaSection = ({
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <QaSection>
      <Slide direction="left">
            <ContentWrapper>
              <h6>{(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                  {
                    section.map((item: any, id: number) => {
                      return (
                          <>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <Question>{t(item.question)}</Question>
                          <Answer>{t(item.answer)}</Answer>
                            </>
                      );
                    })}
              </ServiceWrapper>
            </ContentWrapper>
            </Slide>
    </QaSection>
  );
};

export default withTranslation()(ContentForQaSection);
