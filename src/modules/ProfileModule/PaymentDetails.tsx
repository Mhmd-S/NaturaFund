import React from "react";
import EmptyState from "@/components/common/EmptyState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faUser, faCheck, faRemove } from "@fortawesome/free-solid-svg-icons";

// ToDo: Maybe modularize it?
// ToDo: If there is only one bank account, the remove button should be disabled.
// ToDo: Change to bank details instead of payment details

const PaymentDetails = () => {
    return (
        <div className="w-full">
            <h2 className="text-3xl py-4 font-semibold">Payment Details</h2>
            {/* ToDo: Render if no state found */}
            {/* <div className="mt-16"> 
                <EmptyState
                    title={"No Bank Accounts"}
                    description="Please add a bank account to receive payments."
                    icon={faBank}
                    buttonLabel="Add Bank Account"
                    handleClick={() => console.log("Add Bank Account")}
                />
            </div> */}
            <ol className="w-full h-80 p-3 grid grid-cols-3 gap-3 border border-gray-200 rounded-lg">
                <li className="w-full bg-[rgb(249,250,251)] grid grid-rows-[30%_45%_25%] grid-cols-1 rounded-md border-[1px] shadow-sm divide-y divide-gray-300">
                    <div className="relative px-4 flex flex-col justify-center">
                        <dt className="text-sm font-semibold">Account Number</dt>
                        <dd>DE68500105178297336485</dd>
                        <FontAwesomeIcon
                            icon={faRemove}
                            className="absolute right-2 top-2 text-red-500 cursor-pointer"
                        />
                    </div>
                    <div className="h-full px-4 flex flex-col justify-center gap-3 text-sm text-gray-500">
                        <text>
                            <FontAwesomeIcon icon={faBank} className="mr-3" />
                            MayBank
                        </text>
                        <text>
                            <FontAwesomeIcon icon={faUser} className="mr-3" />
                            John Doe
                        </text>
                        <text>
                            <FontAwesomeIcon icon={faBank} className="mr-3" />
                            MayBank
                        </text>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="w-1/3 bg-brand-800 text-white py-2 border border-brand-800 rounded-md transition-colors hover:bg-white hover:text-brand-800">
                            Select
                        </button>
                    </div>
                </li>
                <li className="w-full bg-[rgb(249,250,251)] grid grid-rows-[30%_45%_25%] grid-cols-1 rounded-md border-[1px] shadow-sm divide-y divide-gray-300">
                    <div className="px-4 flex flex-col justify-center">
                        <dt className="text-sm font-semibold">Account Number</dt>
                        <dd>DE68500105178297336485</dd>
                    </div>
                    <div className="h-full px-4 flex flex-col justify-center gap-3 text-sm text-gray-500">
                        <text>
                            <FontAwesomeIcon icon={faBank} className="mr-3" />
                            MayBank
                        </text>
                        <text>
                            <FontAwesomeIcon icon={faUser} className="mr-3" />
                            John Doe
                        </text>
                        <text>
                            <FontAwesomeIcon icon={faBank} className="mr-3" />
                            MayBank
                        </text>
                    </div>
                    <div className="flex items-center justify-center">
                        <button className="w-1/3 text-brand-800 py-2 border border-brand-800 rounded-md cursor-not-allowed">
                            Selected
                            <FontAwesomeIcon icon={faCheck} className="ml-2" />
                        </button>
                    </div>
                </li>
                <li className="w-full flex flex-col items-center justify-center rounded-md border-[1px] shadow-sm">
                    <button className="w-1/3  py-2 border bg-white text-brand-800 border-brand-800 rounded-md transition-colors hover:bg-brand-800 hover:text-white">
                        Add
                    </button>
                </li>
            </ol>
        </div>
    );
};

export default PaymentDetails;
