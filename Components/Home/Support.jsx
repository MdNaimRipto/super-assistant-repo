"use-client"
import React, { useState, useEffect } from "react"
function Support() {
    const [supports, setSupports] = useState([])
    useEffect(() => {
        fetch('support.json')
            .then(res => res.json())
            .then(data => setSupports(data))
    }, [])
    return (
        <div className="py-12 flex flex-col justify-center items-center px-4 xxl:-mx-12 container mx-auto">
            <div className="h-10 mb-4">
                <img className="h-full" src="https://www.boloforms.com/_next/static/media/stars.6ce54309.png" alt="" />
            </div>
            <h2 className="text-center text-3xl sm:text-5xl font-bold mb-4">
                Award-winning support
            </h2>
            <p className="text-center text-base sm:text-xl mb-4">
                Best-in-class support. We’re always here to help – here’s how to connect.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    supports.map(sp => (
                        <div
                            key={sp.id}
                            style={{ boxShadow: "rgb(0 0 0 / 4%) 0 1px 0, rgb(0 0 0 / 5%) 0 2px 7px, rgb(0 0 0 / 6%) 0 12px 22px" }}
                            className="w-full md:w-[90%] lg:w-full p-8 mb-6 rounded-xl">
                            <div>
                                <div className="mb-4">
                                    <img alt="support" src={sp.img} />
                                </div>
                                <h2 className="text-2xl lg:text-lg xl:text-2xl font-bold mb-2">?{' '}{sp.title}</h2>
                                <p className="mb-2 lg:text-[13px] xl:text-base">{sp.desc}</p>
                            </div>
                            <button className="w-full text-sm font-medium border-2 border-[#9C6CFF] hover:bg-[#9C6CFF] hover:text-white py-1.5 rounded-lg mt-6 lg:mt-2 xl:mt-6">
                                Start a chat
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Support;