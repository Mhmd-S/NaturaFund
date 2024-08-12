import React, { useState } from "react";

import {
    VERIFICATION_STEPS_INDIVIDUAL,
    VERIFICATION_STEPS_COMPANY,
} from "@/modules/VerificationModule/VerificationSteps";

import { VerificationProvider } from "@/modules/VerificationModule/context/useVerificationContext";

import StageIndicator from "@/modules/VerificationModule/StageIndicator";
import VerificationFormIndividual from "@/modules/VerificationModule/VerificationFormIndividual";
import VerificationFormCompany from "@/modules/VerificationModule/VerificationFormCompany";

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
                <StageIndicator steps={VERIFICATION_STEPS_COMPANY} />
                <VerificationFormCompany />
                {/* <VerificationFormIndividual /> */}
            </VerificationProvider>
        </div>
    );
};

export default Verification;
