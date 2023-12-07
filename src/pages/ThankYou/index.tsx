import { lazy, useEffect, useState } from "react";
import ThankYoutContent from "../../content/ThankYouContent.json";
import MiddleBlockForBenefits from "../../components/MiddleBlockForBenefits";

const Container = lazy(() => import("../../common/Container"));

declare const window: any;

const ThankYou = () => {

    useEffect(() => {
        window.analytics.track("ThankYou")
    }, [])

    const[age, setAge] = useState(0)
    const[gender, setGender] = useState('')
    const[size, setSize] = useState('')

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