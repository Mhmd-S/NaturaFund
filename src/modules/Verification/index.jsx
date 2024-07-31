import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";
import PersonalDetails from "@/forms/Verification/PersonalDetails";
import { VerificationProvider } from "@/modules/Verification/context/useVerificationContext"

// e-KYC
// ToDo: Implement Verification component
// ToDo: Make the step component reusable
// Notes: Proof of Address and Proof of Identity
// Notes: Add a button to upload the documents
/* User should first insert his details, goverment ID and lastly Facial Recogintion */

const statuses = [
    {
        title: "Personal Details",
        description:
            "Please provide your personal information, such as your full name, date of birth, and contact details. This will help us verify your identity and ensure the security of your account.",
    },
    {
        title: "Proof of Identity",
        description:
            "Please upload a valid proof of identity document, such as your passport or driver's license. This document should clearly show your photo, full name, and other relevant details.",
    },
    {
        title: "Liveness Test",
        description:
            "Please complete the facial recognition test to verify that you are a real person. Follow the instructions on the screen and make sure your face is well-lit and clearly visible.",
    },
    {
        title: "Proof of Address",
        description:
            "Please upload a valid proof of address document, such as a utility bill or bank statement. This document should clearly show your name and residential address, and it should be recent (within the last 3 months).",
    },
];

const Verification = () => {
    const isPastStatus = (index) => {
        return index < statuses.findIndex((item) => item.title === status);
    };

    return (
        <div className="w-full grid grid-cols-[30%_70%]">
            <section className="">
                <h2 className="text-3xl py-4 font-semibold capatalize">Steps</h2>
                <div>
                    <ol className="h-full flex flex-col gap-2 text-md font-medium text-gray-500 sm:gap-4">
                        {statuses.map((item, index) => (
                            <li key={item.title} className="relative mt-4 flex items-center">
                                <div
                                    className={`${index + 1 == Object.keys(statuses).length && "hidden"} ${isPastStatus(index) ? "bg-green-600" : "bg-gray-300"} absolute w-[1px] h-14 top-1/2 left-5`}
                                />
                                <span className="flex items-center justify-center mr-2 size-10 rounded-full bg-gray-50 text-center text-lg font-bold z-10">
                                    {item.title === status ? (
                                        <FontAwesomeIcon
                                            icon={faCircle}
                                            className="text-blue-600"
                                        />
                                    ) : isPastStatus(index) ? (
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-green-600"
                                        />
                                    ) : null}
                                </span>
                                <span
                                    className={`hidden sm:block ${
                                        item.title === status
                                            ? "text-blue-500"
                                            : isPastStatus(index)
                                              ? "text-green-600"
                                              : "text-gray-500"
                                    }`}
                                >
                                    {item.title}
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <section>
            </section>
        </div>
    );
};

export default Verification;
