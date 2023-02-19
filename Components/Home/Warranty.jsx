function Warranty() {
    return (
        <div
            style={{ boxShadow: '0px 10px 50px 0px rgb(0 7 40 / 23%)' }}
            className="my-12 p-4 sm:p-10 flex flex-col sm:flex-row rounded-xl w-4/5 md:w-[96%] lg:w-4/5 container mx-auto">
            <div className="w-12 mb-4 sm:w-40 mr-4 sm:mr-10">
                <img src="https://www.boloforms.com/_next/static/media/moneyback-gurantee.8417d885.png" alt="" />
            </div>
            <div>
                <p className="text-sm sm:text-base mb-3 font-semibold text-gray-600">
                    MY 100% NO-RISK DOUBLE-GUARANTEE
                </p>
                <h2 className="mb-4 text-base sm:text-xl font-bold">
                    If you don’t like BoloForms over the next 30 days, I will happily
                    refund 100% of your purchase. No questions asked.
                </h2>
                <div className="text-sm sm:text-base">
                    <p className="mb-5">Here's why I'm offering this -</p>
                    <p className="mb-5">
                        I have seen the power of automating your business workflows. Take some
                        time out of your busy schedule today and see what all things can be
                        automated in your workflows.
                    </p>
                    <p className="mb-5">
                        You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!
                    </p>
                    <p className="mb-5">
                        Start with automating small workflow and then gradually you will love
                        it!!
                    </p>
                    <p className="mb-5">
                        Thank you, and I hope we'll get the opportunity to be a part of your
                        growth journey soon!
                    </p>
                </div>
                <div>
                    <img
                        className="h-16 mt-10 ml-[-32px] -mb-4"
                        src="https://www.boloforms.com/_next/static/media/paresh-signature.ffbb67b9.png" alt="" />
                    <h2 className="font-semibold">Paresh Deshmukh</h2>
                    <h3 className="text-xs text-black">Co-Founder BoloForms</h3>
                </div>
            </div>
        </div>
    );
}

export default Warranty;