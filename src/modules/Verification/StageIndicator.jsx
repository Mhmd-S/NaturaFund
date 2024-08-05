import React from "react";
import useVerificationContext from "@/modules/Verification/context/useVerificationContext";
import Steps from "@/components/common/Steps";
import VERIFICATION_STEPS from "@/modules/Verification/VerificationSteps";

const StageIndicator = ({ steps }) => {
    const { stage } = useVerificationContext();

    const currentStep = VERIFICATION_STEPS[stage]?.title;

    const stepsTitles = steps.map((step) => step?.title);

    return (
        <section className={`sticky left-2 ${stage === 3 && "hidden"} `}>
            <h2 className="text-3xl pb-4 font-semibold capatalize">Steps</h2>
            <Steps steps={stepsTitles} currentStep={currentStep} />
        </section>
    );
};

export default StageIndicator;
