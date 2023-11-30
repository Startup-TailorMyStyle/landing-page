import { lazy } from "react";
import ThankYoutContent from "../../content/ThankYouContent.json";
import MiddleBlockForBenefits from "../../components/MiddleBlockForBenefits";

const Container = lazy(() => import("../../common/Container"));

const ThankYou = () => {
    return(
        <Container>
        <MiddleBlockForBenefits
            title={ThankYoutContent.title}
            content={ThankYoutContent.text}
            id="thank-you"
        />
        </Container>
    )
} 

export default ThankYou;