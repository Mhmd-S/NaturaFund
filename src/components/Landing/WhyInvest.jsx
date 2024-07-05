import React from "react";
import { faLocation, faMobileScreenButton, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhyInvest = () => {
    return (
        <div className="w-fit p-12 flex flex-col items-center gap-8 bg-brand-50 rounded-xl shadow-xl">
            <h2 className="w-full text-center text-3xl text-brand-900 font-bold">
                Why invest with NaturaFund?
            </h2>
            <div className="h-fit flex flex-col text-white md:grid md:grid-rows-[15rem_15rem] md:grid-cols-[25rem_25rem] md:gap-8">
                <div className="w-full h-full flex flex-col justify-evenly items-center bg-brand-600 rounded-lg">
                    <FontAwesomeIcon icon={faLocation} className="text-6xl" />
                    <h3 className="font-bold text-2xl">Based Locally</h3>
                    <p className="text-xl text-center">
                        Our projects are made and managed by local teams.
                    </p>
                </div>
                <div className="w-full h-full flex flex-col justify-evenly items-center bg-brand-400 rounded-lg">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="text-6xl" />
                    <h3 className="font-bold text-2xl">Real Time Tracking</h3>
                    <p className="text-xl text-center">View and Manage your assets digitally.</p>
                </div>
                <div className="w-full h-full flex flex-col justify-evenly items-center bg-brand-800 rounded-lg">
                    <FontAwesomeIcon icon={faSackDollar} className="text-6xl" />
                    <h3 className="font-bold text-2xl">Minimal Initial Investment</h3>
                    <p className="text-xl text-center">
                        Our projects are made and managed by local teams.
                    </p>
                </div>
                <div className="w-full h-full flex flex-col justify-evenly items-center bg-brand-200 rounded-lg">
                    <FontAwesomeIcon icon={faSackDollar} className="text-6xl" />
                    <h3 className="font-bold text-2xl">Made and Managed Locally</h3>
                    <p className="text-xl text-center">
                        Our projects are made and managed by local teams.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyInvest;
