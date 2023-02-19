import Advertisement from "../Shared/Advertisement";
import Banner from "./Banner";
import BestReview from "./BestReview";
import CompanySlider from "./CompanySlider";
import CustomersReview from "./CustomersReview";
import Faq from "./Faq";
import Features from "./Features";
import HowWeWorks from "./HowWeWorks";
import ReviewFive from "./ReviewFive";
import ReviewFour from "./ReviewFour";
import ReviewOne from "./ReviewOne";
import ReviewThree from "./ReviewThree";
import ReviewTwo from "./ReviewTwo";
import Support from "./Support";
import Warranty from "./Warranty";
import Workflow from "./Workflow";

const HomeContainer = () => {
    return (
        <div>
            <Banner />
            <CompanySlider />
            <HowWeWorks />
            <ReviewOne />
            <Advertisement />
            <Features />
            <ReviewTwo />
            <Advertisement />
            <ReviewThree />
            <BestReview />
            <Workflow />
            <ReviewFour />
            <Advertisement />
            <ReviewFive />
            <Warranty />
            <Support />
            <Faq />
            <CustomersReview />
        </div>
    );
};

export default HomeContainer;