import React, { useState } from "react";

import { VerificationProvider } from "@/modules/Verification/context/useVerificationContext";

import ResultPage from "@/modules/Verification/ResultPage";
import StageIndicator from "@/modules/Verification/StageIndicator";

import PersonalDetails from "@/forms/Verification/PersonalDetails";
import ProofOfIdentity from "@/forms/Verification/ProofOfIdentity";
import ProofOfAddress from "@/forms/Verification/ProofOfAddress";

import { faCheck, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";

// e-KYC
// ToDo: Implement Verification component
// ToDo: Make the step component reusable
// Notes: Proof of Address and Proof of Identity
// Notes: Add a button to upload the documents
/* User should first insert his details, goverment ID and lastly Facial Recogintion */

const VERIFICATION_STEPS = [
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
        title: "Proof of Address",
        description:
            "Please upload a valid proof of address document, such as a utility bill or bank statement. This document should clearly show your name and residential address, and it should be recent (within the last 3 months).",
    },
];

const RESULTS = {
    pending: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Verification <span className="text-orange-600 capitalize">Pending</span>
            </h1>
        ),
        description:
            "Your documents have been submitted successfully. Our team will review them shortly.",
        icon: faPause,
        buttonText: "Go To Dashboard",
        onclick: () => alert("Go To Dashboard"),
    },
    approved: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Verification <span className="text-brand-800 capitalize">Approved</span>
            </h1>
        ),
        description: "Congratulations! Your identity has been successfully verified.",
        icon: faCheck,
        buttonText: "Go To Dashboard",
        onclick: () => alert("Go To Dashboard"),
    },
    rejected: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Verification <span className="text-pink-800 capitalize">Rejected</span>
            </h1>
        ),
        description:
            "We're sorry, but your identity verification has been rejected. Please review your documents and try again.",
        icon: faTimes,
        buttonText: "Try Again",
        onclick: () => alert("Try Again"),
    },
};

const Verification = () => {
    return (
        <div className="w-full grid grid-cols-[20%_80%]">
            <VerificationProvider>
                <StageIndicator steps={VERIFICATION_STEPS} />
                {/* <PersonalDetails /> */}
                {/* <ProofOfIdentity /> */}
                {/* <ProofOfAddress /> */}
                <ResultPage {...RESULTS.pending} />
            </VerificationProvider>
        </div>
    );
};

export default Verification;
