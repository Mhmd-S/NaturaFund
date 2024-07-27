import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faMoneyBillTransfer, faCheck } from "@fortawesome/free-solid-svg-icons";

const RevenueGenerated = () => {
    return (
        <div className="col-span-2 grid grid-cols-2 gap-2">
            <h2 className="col-span-2 text-3xl py-4 font-semibold text-center">Revenue Generated</h2>
            <article className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6">
                <FontAwesomeIcon
                    icon={faMoneyBill}
                    className="rounded-full bg-blue-100 p-3 text-blue-600"
                />
                <div>
                    <p className="text-2xl font-medium text-gray-900">$240.94</p>

                    <p className="text-sm text-gray-500">Total Revenue</p>
                </div>
            </article>
            <article className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-6">
                <FontAwesomeIcon
                    icon={faMoneyBillTransfer}
                    className="rounded-full bg-blue-100 p-3 text-blue-600"
                />
                <div>
                    <p className="text-2xl font-medium text-gray-900">$240.94</p>

                    <p className="text-sm text-gray-500">Latest Revenue</p>
                </div>
            </article>
            <ol className="col-span-2 overflow-y-auto h-96 p-4 bg-white rounded-lg border border-gray-200 mt-4">
                <li className="relative w-full grid grid-cols-[10%_50%_30%] items-center">
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="rounded-full bg-green-100 p-3 text-green-600"
                    />
                    <p className="pl-4 text-md font-bold">RM 240.94</p>
                    <p>
                        <span className="text-sm text-gray-500">Date:</span> 12/12/2021
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default RevenueGenerated;
