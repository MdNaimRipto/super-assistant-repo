"use-client"
import React, { useState, useEffect } from 'react'

function Features() {
    const [features, setFeatures] = useState([])
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])
    return (
        <div className="pt-20 pb-12 flex flex-col justify-center items-center container mx-auto">
            <h4 className="text-xl md:text-3xl font-semibold mb-2 text-center">
                Features
            </h4>
            <p className="text-base md:text-lg pb-16 text-center">
                Everything that your organisation will love, & more.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-16">
                {
                    features.map(f => (
                        <div key={f.id} className="w-full md:w-[360px] lg:w-full px-4 mb-12">
                            <img alt="" src={f.logo} className="mb-4" />
                            <h2 className="mb-2 text-2xl font-semibold">
                                {f.title}
                            </h2>
                            <p>
                                {f.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Features;