import TopReview from "../Shared/TopReview";

function ReviewOne() {
    const review = {
        img: "https://www.boloforms.com/_next/static/media/repa.483a1471.jpeg",
        name: "Repa Mandala",
        review: "Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!"
    }
    return <TopReview review={review} />
}

export default ReviewOne;