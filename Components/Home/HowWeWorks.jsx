function HowWeWorks() {
    return (
        <div className="pt-20 pb-12 flex flex-col justify-center items-center text-center container mx-auto">
            <h4 className="text-xl md:text-3xl font-semibold mb-2 text-center">
                How does BoloForms work?
            </h4>
            <p className="text-xs xs:text-sm">
                Set up your first workflow in just 3 easy steps.
            </p>
            <div className="flex flex-col lg:flex-row mt-8">
                <div className="flex flex-col-reverse md:flex-col">
                    <img src="https://www.boloforms.com/_next/static/media/2.2709e204.svg" alt="" className="hover:-translate-y-3 transition-transform duration-300 ease-out" loading="lazy" />
                    <div className="text-center mt-6 mb-4">
                        <h2 className="text-xl xs:text-2xl font-bold mb-2">Step 1:</h2>
                        <p className="text-sm xs:text-base">
                            Choose a template or add questions to create your Google Form.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-col">
                    <img src="https://www.boloforms.com/_next/static/media/1.b2cc23b0.svg" alt="" className="hover:-translate-y-3 transition-transform duration-300 ease-out" loading="lazy" />
                    <div className="text-center mt-6 mb-4">
                        <h2 className="text-xl xs:text-2xl font-bold mb-2">Step 2:</h2>
                        <p className="text-sm xs:text-base">
                            Enable Single/Multi Step approval and add necessary approvers!
                        </p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-col">
                    <img src="https://www.boloforms.com/_next/static/media/3.1a7ec00e.svg" alt="" className="hover:-translate-y-3 transition-transform duration-300 ease-out" loading="lazy" />
                    <div className="text-center mt-6 mb-4">
                        <h2 className="text-xl xs:text-2xl font-bold mb-2">Step 3:
                        </h2>
                        <p className="text-sm xs:text-base">
                            Now you can enable the workflow and share the Google Form.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowWeWorks;