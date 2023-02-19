import TopReview from "../Shared/TopReview";

function ReviewThree() {
    const review = {
        img: "https://www.boloforms.com/_next/static/media/deepak.e041dab0.jpeg",
        name: "Deepak S (Solero Corporation)",
        review: "Easy to use interface and timely support...looking for more features"
    }
    return <TopReview review={review} />
}

export default ReviewThree;