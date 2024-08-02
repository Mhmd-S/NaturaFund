import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronDown, faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const RevenueChart = () => {
    const [minimized, setMinimized] = useState(false);

    return (
        <div
            className={`relative w-full h-1/2 p-4 grid place-items-center transition-all `}
        >
            <div className={`w-full h-full grid grid-cols-2 grid-rows-3 grid-flow-col gap-1`}>
                <p className="text-sm">Revenue</p>
                <p className="text-lg font-semibold">$0.00</p>
                <p className="text-sm text-gray-med">
                    <span className="text-green-500">
                        <FontAwesomeIcon icon={faArrowUp} className="pr-1" />
                        0.00%
                    </span>{" "}
                    vs last month
                </p>
                {!minimized && (
                    <span className="w-28 mr-10 flex items-center justify-between justify-self-end row-start-3">
                        <FontAwesomeIcon icon={faChevronLeft}  className="p-2 text-brand-900 rounded-sm cursor-pointer hover:bg-slate-100"/>
                            <text className="text-gray-med">2024</text>
                        <FontAwesomeIcon icon={faChevronRight} className="p-2 text-brand-900 rounded-sm cursor-pointer hover:bg-slate-100"/>
                    </span>
                )}
            </div>
            <button
                className="absolute bottom-0 px-2 text-sm border-2 border-gray-200 border-b-0 rounded-t-md bg-white text-brand-500 cursor-pointer hover:text-brand-800"
                onClick={() => setMinimized(!minimized)}
            >
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${minimized ? "" : "rotate-180"}`}
                />
            </button>
        </div>
    );
};

export default RevenueChart;
