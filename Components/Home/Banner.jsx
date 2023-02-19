const Banner = () => {
    return (
        <div className="px-4 py-16 mx-auto container md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
                    <div className="max-w-xl mb-6">
                        <h2
                            style={{ lineHeight: "55px" }}
                            className="text-3xl md:text-[32px] font-semibold mb-2 sm:mb-4 capitalize">
                            Transform Google Forms Into Interactive Workflows
                        </h2>
                        <p
                            style={{ lineHeight: "30px" }}
                            className="text-base md:text-lg mb-8 xl:mr-[50px]">
                            BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.
                        </p>
                        <button className="w-full sm:w-fit flex flex-row justify-center items-center text-base sm:text-lg md:text-xl bg-[#915bff] text-white hover:opacity-90  font-semibold py-3 px-4 md:px-6 rounded-lg">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="mr-4 text-lg md:text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
                            <span className="tracking-wide">Install For Free</span>
                        </button>
                    </div>
                </div>
                <div className="relative lg:w-1/2">
                    <iframe loading="lazy" className="w-[290px] h-[315px] md:w-[560px] lg:w-[476px] xl:w-[560px] border-4 rounded-2xl border-[#9a6afd]" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen=""></iframe>
                </div>
            </div>
        </div>
    );
};

export default Banner;