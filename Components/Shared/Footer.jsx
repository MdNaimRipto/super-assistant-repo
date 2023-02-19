"use-client"
import { BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="relative z-50 mt-12 py-24 px-8 xs:px-20 sm:px-4 lg:px-12 xl:px-24 bg-gray-50 container mx-auto">
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-between">
                <div className="mb-6 sm:mb-0 w-full sm:w-fit md:w-full flex flex-col font-bold md:mr-12 xl:mr-0">
                    <a href="https://api.whatsapp.com/send/?phone=918830631677&amp;text=Need%20Help%20with%20BoloForms%20Approvals" className="text-2xl mb-4" target="_blank" rel="noreferrer">
                        <span className="mr-2">💬</span><span>Live Chat</span>
                    </a>
                    <a href="mailto:support@boloforms.com" className="text-2xl mb-4" target="_blank" rel="noreferrer">
                        <span className="mr-2">📨</span><span>Support Email</span>
                    </a>
                    <a href="http://approval-docs.boloforms.com/" target="_blank" className="text-2xl mb-4" rel="noreferrer">
                        <span className="mr-2">📚</span><span>Help Center</span>
                    </a>
                    <a href="https://calendly.com/boloforms/15min" className="text-2xl mb-4" target="_blank" rel="noreferrer">
                        <span className="mr-2">📅</span><span>Video Call</span>
                    </a>
                </div>
                <div className="mb-6 sm:mb-0 w-full sm:w-fit md:w-full flex flex-col text-sm">
                    <h2 className="font-medium mb-3">Pages</h2>
                    <a className="mb-2" href="/">Home</a>
                    <a className="mb-2" href="/form-approval/pricing/">Pricing</a>
                    <a className="mb-2" href="/blog/">Blogs</a>
                    <a className="mb-2" href="/about/">About us</a>
                </div>
                <div className="mb-6 sm:mb-0 w-full sm:w-fit md:w-full flex flex-col">
                    <h2 className="font-medium text-sm mb-3">Products</h2>
                    <a className="text-sm mb-2" href="/form-approval/">
                        Forms Approval
                    </a>
                    <a className="text-sm mb-2" href="/signature/">
                        Signature
                    </a>
                    <a href="https://sheetgod.boloforms.com" className="text-sm mb-2" target="_blank" rel="noreferrer">
                        Sheetgod
                    </a>
                    <a href="https://workspace.google.com/u/5/marketplace/app/boloforms_form_builder/959255309914" className="text-sm mb-2" target="_blank" rel="noreferrer">
                        Google Form UI Enhancer
                    </a>
                    <a href="https://workspace.google.com/marketplace/app/boloforms_form_publisher_document_studio/204560571245" className="text-sm mb-2" target="_blank" rel="noreferrer">
                        BoloForms Document Generator
                    </a>
                    <a className="text-sm mb-2" href="/timer-classroom/">
                        Timer + Proctor
                    </a>
                    <a href="https://chrome.google.com/webstore/detail/free-google-meet-attendan/bnpnjagfokmjkojcdafeodgfkimecajh?utm_source=website_landing" className="text-sm mb-2" target="_blank" rel="noreferrer">
                        Google Meet Attendence Tracker
                    </a>
                </div>
                <div className="mb-6 sm:mb-0 w-full sm:w-fit md:w-full flex flex-col text-sm">
                    <h2 className="font-medium mb-3">
                        Legal
                    </h2>
                    <a className=" mb-2" href="/terms-of-service/">
                        Terms of Service
                    </a>
                    <a className="mb-2" href="/privacy-policy/">
                        Privacy Policy
                    </a>
                    <a className="mb-2" href="/refund-policy/">
                        Refund Policy
                    </a>
                    <a href="https://data-policy.boloforms.com/" target="_blank" className="text-sm mb-2" rel="noreferrer">
                        Data Security &amp; Policy
                    </a>
                </div>
            </div>
            <p className="mt-2 text-sm flex flex-row">
                Made with{' '}
                <img alt="" src="https://www.boloforms.com/_next/static/media/1f525.a7bd71d6.svg" className="h-4 mx-2" />
                +<img alt="" src="https://www.boloforms.com/_next/static/media/2764.8838f014.svg" className="h-4 mx-2" />
                in India
            </p>
            <div className="py-3 w-fit md:ml-auto">
                <p className="text-sm mb-1">
                    Select Language
                </p>
                <div className="text-sm">
                    <div>
                        <div className="my-2 ml-[-2px]">
                            <select>
                                <option value="">Select Language</option>
                                <option value="zh-CN">Chinese (Simplified)</option>
                                <option value="nl">Dutch</option><option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="id">Indonesian</option>
                                <option value="pt">Portuguese</option>
                                <option value="es">Spanish</option>
                            </select>
                        </div>
                        <div>
                            <span>Powered by</span>
                            <span>
                                <a className="flex items-center mt-2" href="https://translate.google.com" target="_blank">
                                    <img className="mt-1 mr-1" src="https://www.gstatic.com/images/branding/googlelogo/1x/googlelogo_color_42x16dp.png" alt="" />
                                    <span>Translate</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-row justify-center text-2xl text-gray-600">
                <BsTwitter className="mx-4 cursor-pointer" />
                <BsYoutube className="mx-4 cursor-pointer" />
                <BsFacebook className="mx-4 cursor-pointer" />
            </div>
        </footer>
    );
};

export default Footer;