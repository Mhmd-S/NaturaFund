import React from "react";
import {
    faLocationDot,
    faMobileScreenButton,
    faSackDollar,
    faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
    {
        icon: faLocationDot,
        title: "Based Locally",
        content: "Our projects are made and managed by local teams.",
    },
    {
        icon: faMobileScreenButton,
        title: "Real Time Tracking",
        content: "View and Manage your assets digitally.",
    },
    {
        icon: faSackDollar,
        title: "Min. Initial Investment",
        content: "Minimum invesmtment of 300 RM.",
    },
    {
        icon: faHandshake,
        title: "Trusted",
        content: "Trusted by over 1000 investors.",
    },
];

const WhyInvest = () => {
    const renderItems = () => {
        return items.map((item, index) => (
            <div
                key={index}
                className="w-full h-full py-8 px-3 flex flex-col justify-evenly items-center bg-white border-2 border-brand-400 text-brand-900 shadow-lg rounded-lg transition-shadow duration-700 hover:shadow-2xl"
            >
                <FontAwesomeIcon icon={item.icon} className="text-3xl md:text-6xl" />
                <h3 className="font-bold text-xl md:text-2xl">{item.title}</h3>
                <p className="text-lg md:text-xl text-center">{item.content}</p>
            </div>
        ));
    };

    return (
        <div className="w-fit p-12 flex flex-col items-center gap-8 bg-brand-50 rounded-xl shadow-xl cursor-default">
            <h2 className="w-full text-center text-3xl text-brand-900 font-bold">
                Why invest with NaturaFund?
            </h2>
            <div className="h-fit flex flex-col gap-4 text-white md:grid md:grid-rows-[15rem_15rem] md:grid-cols-[25rem_25rem] md:gap-8">
                {renderItems()}
            </div>
        </div>
    );
};

export default WhyInvest;
