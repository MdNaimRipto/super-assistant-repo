"use-client"
function TopReview({ review }) {
    return (
        <>
            <div className="my-12 w-full flex flex-row items-center p-4 sm:p-10 rounded-3xl container mx-auto">
                <div className="h-16 w-16 md:h-32 md:w-36 xl:w-40 xl:h-36 rounded-full overflow-hidden">
                    <img alt="" src={review.img} className="h-full w-full object-cover" />
                </div>
                <div className="pl-4 sm:pl-12 review">
                    <div className="h-6 mb-4">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/Stars.885edd0c.svg" width="380" height="65" decoding="async" data-nimg="1" className="w-32 h-full" />
                    </div>
                    <p className="mb-2 text-sm sm:text-base">
                        {review.review}
                    </p>
                    <h3 className="text-base sm:text-lg font-semibold">
                        {review.name}
                    </h3>
                </div>
            </div>
        </>
    );
}

export default TopReview;