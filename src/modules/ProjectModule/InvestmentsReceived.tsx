import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const InvestmentsReceived = () => {
    return (
        <div className="col-span-2 flex flex-col items-center justify-center gap-6">
            <h2 className="col-span-2 text-3xl font-semibold">Received Investments</h2>
            <span id="ProgressLabel" className="sr-only">
                Investment Recieved
            </span>
            <div className="flex justify-between items-center">
                <dd className="">Total Investments Received:</dd>
                <dt className=" text-brand-900">{" "} 240.94 RM</dt>
            </div>

            <ol className="overflow-y-auto w-1/2 h-96 p-4 flex flex-col gap-4 border border-gray-200 rounded-lg">
                <li className="relative w-full grid grid-cols-[10%_50%_30%] items-center">
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="rounded-full bg-green-100 p-3 text-green-600"
                    />
                    <p className="text-md  justify-self-center">RM 240.94</p>
                    <p className="text-gray-light text-sm justify-self-end text-right">
                        12/12/2021
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default InvestmentsReceived;
