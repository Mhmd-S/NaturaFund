import React from "react";
import Login from "@/components/Login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faMapLocationDot, faSackDollar, faSun } from "@fortawesome/free-solid-svg-icons";

const index = () => {
    return (
        <div className="w-full h-screen py-4 flex flex-col items-center gap-y-16 md:grid md:grid-cols-[35%_65%] md:grid-rows-1 md:py-0">
            <div className="w-full h-full flex flex-col justify-center md:bg-brand-800 md:text-white md:gap-y-16 md:pl-16">
                <h1 className="h-fit pt-3 flex items-center font-serif text-brand-800 text-3xl md:py-2 md:flex md:items-center md:text-4xl md:border-r-brand-800 md:text-white md:px-6">
                    <FontAwesomeIcon
                        icon={faLeaf}
                        className="mr-3 text-6xl rounded-md bg-brand-800 text-white md:bg-white md:text-brand-800 p-2"
                    />
                    NaturaFund
                </h1>
                <div className="hidden md:flex md:items-center">
                    <FontAwesomeIcon
                        icon={faSun}
                        className="mr-3 w-6 h-6 rounded-md bg-white text-yellow-400 p-3"
                    />
                    <div className="text-sm">
                        <p className="font-semibold">Invest In Solar</p>
                        <p className="text-slate-300">
                            Investing in solar projects can provide attractive financial returns.
                        </p>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center">
                    <FontAwesomeIcon
                        icon={faMapLocationDot}
                        className="mr-3 w-6 h-6 rounded-md bg-white text-red-800 p-3"
                    />
                    <div className="text-sm">
                        <p className="font-semibold">Based Lcoally</p>
                        <p className="text-slate-300">Our projects are managed by local teams</p>
                    </div>
                </div>
                <div className="hidden md:flex md:items-center">
                    <FontAwesomeIcon
                        icon={faSackDollar}
                        className="mr-3 w-6 h-6 rounded-md bg-white text-yellow-400 p-3"
                    />

                    <div className="text-sm">
                        <p className="font-semibold">Min. Initial Investment</p>
                        <p className="text-slate-300">Minimum investment of RM 300</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-col items-center justify-center gap-y-8">
                <h2 className="text-brand-900 text-xl font-semibold md:text-4xl">Welcome back!</h2>
                <Login />
            </div>
        </div>
    );
};

export default index;
