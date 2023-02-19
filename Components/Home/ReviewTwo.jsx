import TopReview from "../Shared/TopReview";

function ReviewTwo() {
    const review = {
        img: "https://www.boloforms.com/_next/static/media/alaa.a9f02030.jpeg",
        name: "Alaa Khaled",
        review: "Boloforms has changed the way my team and I work.We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time.Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"
    }
    return <TopReview review={review} />
}

export default ReviewTwo;