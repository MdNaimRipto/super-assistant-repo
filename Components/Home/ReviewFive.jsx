import TopReview from "../Shared/TopReview";

function ReviewFive() {
    const review = {
        img: "https://www.boloforms.com/_next/static/media/john.39efe227.jpeg",
        name: "John M.",
        review: "Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."
    }
    return <TopReview review={review} />
}

export default ReviewFive;