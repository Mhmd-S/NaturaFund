import React from "react";
import {
    faLocation,
    faMobileScreenButton,
    faSackDollar,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyInvest = () => {
    return (
        <div className="w-fit p-12 flex flex-col items-center gap-8 bg-brand-50 rounded-xl shadow-xl">
            <h2 className="w-full text-center text-3xl text-brand-900 font-bold">
                Why invest with NaturaFund?
            </h2>
            <div className="h-fit flex flex-col gap-4 text-white md:grid md:grid-rows-[15rem_15rem] md:grid-cols-[25rem_25rem] md:gap-8">
                <div className="w-full h-full py-8 px-3 flex flex-col justify-evenly items-center bg-brand-600 rounded-lg">
                    <FontAwesomeIcon icon={faLocation} className="text-3xl md:text-6xl" />
                    <h3 className="font-bold text-xl md:text-2xl">Based Locally</h3>
                    <p className="text-lg md:text-xl text-center">
                        Our projects are made and managed by local teams.
                    </p>
                </div>
                <div className="w-full h-full py-8 px-3 flex flex-col justify-evenly items-center bg-slate-400 rounded-lg">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="text-3xl md:text-6xl" />
                    <h3 className="font-bold text-xl md:text-2xl">Real Time Tracking</h3>
                    <p className="text-lg md:text-xl text-center">
                        View and Manage your assets digitally.
                    </p>
                </div>
                <div className="w-full h-full py-8 px-3 flex flex-col justify-evenly items-center bg-green-800 rounded-lg">
                    <FontAwesomeIcon icon={faSackDollar} className="text-3xl md:text-6xl" />
                    <h3 className="font-bold text-xl md:text-2xl">Min. Initial Investment</h3>
                    <p className="text-lg md:text-xl text-center">Minimum invesmtment of 300 RM.</p>
                </div>
                <div className="w-full h-full py-8 px-3 flex flex-col justify-evenly items-center bg-slate-800 rounded-lg">
                    <FontAwesomeIcon icon={faHandshake} className="text-3xl md:text-6xl" />
                    <h3 className="font-bold text-xl md:text-2xl">Trusted</h3>
                    <p className="text-lg md:text-xl text-center">
                        Trusted by over 1000 investors.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyInvest;
