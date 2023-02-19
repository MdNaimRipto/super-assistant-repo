import TopReview from "../Shared/TopReview";

function ReviewFour() {
    const review = {
        img: "https://www.boloforms.com/_next/static/media/raman.e5477e92.jpeg",
        name: "Raman R",
        review: "I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!"
    }
    return <TopReview review={review} />
}

export default ReviewFour;