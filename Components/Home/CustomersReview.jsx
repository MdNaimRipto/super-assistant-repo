function CustomersReview() {
    return (
        <div className="hidden sm:block py-12 container mx-auto px-2 xl:px-0">
            <div className="mb-6 sm:px-12 text-center">
                <h4 className="text-2xl md:text-4xl font-semibold mb-2 capitalize flex items-center justify-center">Customers who are Trusting Us!{' '}
                    <img alt="" src="https://www.boloforms.com/_next/static/media/2764.8838f014.svg" className="h-12 ml-4" />
                </h4>
                <p className="text-base md:text-lg mb-8">
                    Customers’ Testimonials
                </p>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img alt="" src="https://www.boloforms.com/_next/static/media/timer_reviews.c0a05474.svg" className="w-full h-full" />
            </div>
        </div>
    );
}

export default CustomersReview;