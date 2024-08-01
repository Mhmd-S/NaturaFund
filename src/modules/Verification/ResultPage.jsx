import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Has three modes: success, failed and pending

const ResultPage = ({ title, description, icon, buttonText, onClick }) => {
    return (
        <div className="mt-14 flex flex-col items-center gap-5">
            <div className="flex items-center justify-center size-24 rounded-full bg-brand-100">
                <FontAwesomeIcon icon={icon} className="text-brand-800 text-3xl" />
            </div>
            {title}
            <p className="w-1/2 text-center text-gray-500">{description}</p>
            <button
                onClick={onClick}
                className="p-2 text-white bg-brand-800 border-2 border-brand-800 rounded-md transition-colors hover:text-brand-800 hover:bg-white"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default ResultPage;
