// import logo from "../../asset/a.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io"

function Navbar() {
    const [mobileBtn, setMobileBtn] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = (
        <>
            <Link className="navHover flex items-center" href={"#"}>
                <span className="mr-2">Products</span>
                <IoIosArrowDown className="hidden lg:block" />
            </Link>
            <Link className="navHover" href={"#"}>
                Pricing
            </Link>
            <Link className="navHover block lg:hidden" href={"#"}>
                Blogs
            </Link>
            <Link className="navHover" href={"#"}>
                Guides
            </Link>
            <Link className="navHover" href={"#"}>
                Templates
            </Link>
            <Link className="navHover block lg:hidden mb-5" href={"#"}>
                About Us
            </Link>
        </>
    );

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <>
            <div className="px-4 md:px-8 h-20 flex items-center justify-center border-b-2 mb-4 sticky top-0 z-50 bg-white navbar">
                <div className="flex justify-between items-center relative container">
                    <div className="flex items-center">
                        <Link href={"/"} className="flex justify-center items-center mr-10">
                            <Image className="w-32 h-32" src="https://www.boloforms.com/_next/static/media/logo-text.e6f7617c.svg" width="500" height="500" alt="" />
                        </Link>
                        <div className="text-base space-x-7 hidden lg:flex font-medium ">
                            {menuItems}
                        </div>
                    </div>
                    <div className="text-md xl:text-xl  hidden lg:flex gap-4 justify-between items-center">
                        <button className="tracking-wider text-lg font-medium px-6 py-2 rounded-[10px] border-2 border-[#915bff] text-[#915bff] hover:bg-[#a97dff] hover:text-white transition-all duration-200">
                            Install Now
                        </button>
                        <button className="tracking-wider text-lg font-medium px-6 py-2 rounded-[10px] bg-[#915bff] text-white border-2 border-[#915bff]">
                            BoloForms Premium
                        </button>
                    </div>

                    {/* custom hamburger button */}
                    <div
                        className={`mobileBtn lg:hidden ${mobileBtn ? "mobileBtn" : "active"
                            } `}
                        onClick={() => setMobileBtn(!mobileBtn)}
                    >
                        <span></span>
                    </div>

                    {/* mobile menu */}
                    <div
                        className={` ${mobileBtn ? "hidden" : "block top-16"
                            } absolute  flex gap-5 flex-col text-lg font-medium lg:hidden bg-white w-full py-5 px-5 border-b-4 transition-all duration-500`}
                    >
                        {menuItems}
                        <div className="text-md xl:text-xl w-full">
                            <button className="tracking-wider text-lg font-medium w-full py-2 rounded-[10px] border-2 border-[#915bff] text-[#915bff] hover:bg-[#a97dff] hover:text-white transition-all duration-200 mb-3">
                                Install Now
                            </button>
                            <button className="tracking-wider text-lg font-medium w-full py-2 rounded-[10px] bg-[#915bff] text-white border-2 border-[#915bff]">
                                BoloForms Premium
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
