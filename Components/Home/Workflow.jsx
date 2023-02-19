function Workflow() {
    return (
        <div className="border mb-12 p-10 rounded-xl container mx-auto">
            <h2 className="text-xl md:text-3xl font-semibold mb-3 text-center">
                Fully Automated Workflows
            </h2>
            <p className="pb-2 text-base md:text-lg text-center">
                No more painful manual approval management and wasting countless hours.
            </p>
            <div className="my-12 flex flex-col lg:flex-row justify-between items-center">
                <div className="w-[350px] p-5 flex flex-col justify-center rounded-xl relative left-nav">
                    <span className="py-4 px-8 bg-white rounded-xl text-gray-500 font-semibold flex flex-row">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" className="mr-4" /> {' '}Leave Application
                    </span>
                    <span className="py-4 px-8 my-6 bg-white rounded-xl text-gray-500 font-semibold flex flex-row">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" className="mr-4" />
                        {' '}Purchase Order
                    </span>
                    <span className="py-4 px-8 bg-white rounded-xl text-gray-500 font-semibold flex flex-row">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" className="mr-4" /> {' '}Fulfilment
                    </span>
                    <div className="border absolute h-24 lg:h-0 lg:w-24 lg:top-1/2 lg:right-0 -mr-24 bottom-0 left-1/2 lg:left-full -mb-24">
                    </div>
                </div>
                <div className="my-24 lg:my-0">
                    <img alt="" src="https://www.boloforms.com/_next/static/media/approvals.73c8d904.svg" className="h-28 sm:h-36 ml-6" />
                </div>
                <div className="w-[350px] p-5 flex flex-col justify-center rounded-xl relative right-nav">
                    <span className="py-4 px-8 bg-white rounded-xl text-gray-500 font-semibold flex flex-row">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" className="mr-4" />
                        {' '}Approve</span>
                    <span className="py-4 px-8 my-6 bg-white rounded-xl text-gray-500 font-semibold flex flex-row">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" className="mr-4" /> {' '}Reject</span>
                    <span className="py-4 px-8 bg-white rounded-xl text-gray-500 font-semibold flex flex-row">
                        <img alt="" src="https://www.boloforms.com/_next/static/media/purchase_request.e735191e.svg" className="mr-4" />
                        {' '}Send Pdf</span>
                    <div className="border absolute h-24 lg:h-0 lg:w-24  bottom-full lg:bottom-1/2 left-1/2 lg:left-0 lg:-ml-24 -mt-24 ">
                    </div>
                </div>
            </div>
            <p className="pt-2 text-base md:text-lg text-center">BoloForms workflows acts as a glue holding together all your approval processes.
            </p>
        </div>
    );
}

export default Workflow;