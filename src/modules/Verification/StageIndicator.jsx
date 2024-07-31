import React from "react";
import useVerificationContext from "@/modules/Verification/context/useVerificationContext";
import Steps from "@/components/common/Steps";

const StageIndicator = ({ steps }) => {
    const { stage } = useVerificationContext();

    const stepsTitles = steps.map((step) => step.title);

    return (
        <section>
            <h2 className="text-3xl py-4 font-semibold capatalize">Steps</h2>
            <div>
                <Steps steps={stepsTitles} currentStep={stage} />
            </div>
        </section>
    );
};

export default StageIndicator;
