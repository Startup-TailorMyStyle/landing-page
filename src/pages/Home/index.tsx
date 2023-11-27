import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import QAContent from "../../content/QaContent.json";
import ContactContent from "../../content/ContactContent.json";
import MiddleBlockForBenefits from "../../components/MiddleBlockForBenefits";
import MiddleBlockForQA from "../../components/MiddleBlockForQA";
import { MainPageBlockContainer } from "../../components/ContentBlock/MainContentBlock/styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MainContentBlock = lazy(() => import("../../components/ContentBlock/MainContentBlock"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <MainContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        defaultInputText={IntroContent.defaultInputText}
        icon="WhenShoppingFitsPerfectly.png"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        icon="SizingUptheCompetition.png"
        id="middle"
      />
      <MiddleBlockForBenefits
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        id="benefits"
      />
      <MiddleBlockForQA
        title={QAContent.title}
        content={QAContent.text}
        section={QAContent.section}
        id="QA"
      /> 
      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
