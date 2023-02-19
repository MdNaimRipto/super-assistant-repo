function Faq() {
    return (
        <div className="pt-20 pb-12 container mx-auto px-2 xl:px-0">
            <h2 className="text-2xl sm:text-4xl font-semibold capitalize text-center">
                Frequently Asked Questions
            </h2>
            <div className="w-full mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-3 text-base sm:text-lg font-semibold">
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            What is the difference between email and request?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            A request needs to send multiple emails to different recipients and respondent (optional) for approval. This means that one request may costs lots of email quota.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            What will happen if I run out of email quota?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            When you run out of email quota, the addon will temporary stop running. You will have to wait for quota renewal to send email again. If you are Free user, you can purchase Individual Plan and enjoy much higher quotas (at least 5000 emails/month) and unlimited emails sent per day.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            What will happen to my data if I cancel my subscription?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            You data will still be stored in our database even after your subscription cancellation. If you want to remove your data, please contact to us via support@boloforms.com.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            I receive a permission error when I try to setup the Add-on
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            This is a known issue with Google permissions and it happens when you are logged in with more than one Google account. Try to sign out of all account except your main account. Alternatively, try Guest/Incognito mode.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            Can I use the addon if my organisation does not use Google accounts?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            Yes, but be aware that Form owner/adminstrator in particular still needs Google account. This is because the addon sends email on your Gmail behalf.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            How can I contact support?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            For any additional questions, you can contact us on support@boloforms.com or on WhatsApp at +91-8830631677 anytime.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            Why does the approval workflow sometimes work smoothly and other times throws errors?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            If you suddenly have an error running when using an add-on, please let us know by sending an email to support@boloforms.com. Our team will contact you as soon as possible to look into the issue. If you need an expedited support, feel free to message us on WhatsApp at +91-8830631677.
                        </p>
                    </details>
                </div>
                <div className="space-y-3 text-base sm:text-lg font-semibold">
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            How to calculate the number of requests based on email quota?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            Emails & Requests are different. For examples, if you set up a workflow with 2 recipients, a form respondent submit a request then 2 emails counted to be sent to 2 recipients. In average, a request from our users consists of 4 emails. That is why free plan (500 emails) is calculated to be approximately 125 requests per month. The smaller number of recipient you set up in the workflow, the more request you have with a fixed email quota and vice versa.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            Why the addon requires access to my Google Drive?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            Permission to Google Drive is only necessary for the addon to perform actions related to your connected Google Form and spreadsheet on your behalf. In no circumstance that we will use those files for any other purposes or sharing to third parties.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            How does approval workflow feature work?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            When a Form Respondent sends a request, the addon will automatically send approval notification email to your specified recipient(s). Recipient can make One-click approve/reject decision on email, or, approve/reject & comment on BoloForms Approvals website. Finally, an email will be sent to all recipients notifying the final result.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            Does recipient need Google Account?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            No. Recipients do not need Google account. They also do not need to have access to your Google Form or spreadsheet. When a request is sent, recipient will receive an email which includes: One-click Approve & One-click Reject button: to approve/reject immediately. Approve/Reject & Comment button: to open BoloForms Website where you can approve/reject & give comment on the request.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            How many recipients can I add?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            There is no limit to the number of recipients. However, be aware that the higher number of recipients is, the quicker your emails quota may run out.
                        </p>
                    </details>
                    <details className="w-full border rounded-lg px-4 pb-4">
                        <summary className="leading-10">
                            Can Form Respondent or Recipients edit a form submission?
                        </summary>
                        <p className="text-sm md:text-base mt-2 font-normal">
                            You can have option to allow Form Respondents to edit their own submission. However, Recipients can not edit submissions from Respondent.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}

export default Faq;