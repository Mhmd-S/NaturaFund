import React from "react";
import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";
import Steps from "@components/common/Steps";

const StageIndicator = ({ steps }) => {
    const { stage } = useOnboardContext();

    const currentStep = steps[stage]?.title;

    const stepsTitles = steps.map((step) => step?.title);

    return (
        <section className={`sticky left-2 ${stage === 3 && "hidden"} `}>
            <h2 className="text-3xl pb-4 font-semibold capatalize">Steps</h2>
            <Steps steps={stepsTitles} currentStep={currentStep} />
        </section>
    );
};

export default StageIndicator;
