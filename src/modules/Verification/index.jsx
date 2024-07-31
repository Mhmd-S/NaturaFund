import React, { useState } from "react";

import { VerificationProvider } from "@/modules/Verification/context/useVerificationContext";

import StageIndicator from "@/modules/Verification/StageIndicator";
import PersonalDetails from "@/forms/Verification/PersonalDetails";
import ProofOfIdentity from "@/forms/Verification/ProofOfIdentity";

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

const Verification = () => {
    return (
        <div className="w-full grid grid-cols-[20%_80%]">
            <VerificationProvider>
                <StageIndicator steps={VERIFICATION_STEPS} />
                {/* <PersonalDetails /> */}
                <ProofOfIdentity />
            </VerificationProvider>
        </div>
    );
};

export default Verification;
