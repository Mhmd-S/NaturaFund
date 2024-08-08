import React, { useState } from "react";

import VERIFICATION_STEPS from "@/modules/VerificationModule/VerificationSteps";

import { VerificationProvider } from "@/modules/VerificationModule/context/useVerificationContext";

import StageIndicator from "@/modules/VerificationModule/StageIndicator";
import VerificationForm from "@/modules/VerificationModule/VerificationForm";

// e-KYC
// ToDo: Implement Verification component
// ToDo: Make the step component reusable
// Notes: Proof of Address and Proof of Identity
// Notes: Add a button to upload the documents
/* User should first insert his details, goverment ID and lastly Facial Recogintion */

const Verification = () => {
    return (
        <div className="relative w-full py-4 grid grid-cols-[20%_80%]">
            <VerificationProvider>
                <StageIndicator steps={VERIFICATION_STEPS} />
                <VerificationForm />
            </VerificationProvider>
        </div>
    );
};

export default Verification;
