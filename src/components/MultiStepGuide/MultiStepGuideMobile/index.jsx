import React, { useState } from "react";
import Step from "@/components/MultiStepGuide/MultiStepGuideMobile/Step";

const MultiStepGuide = ({ title, items }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <Step
                    key={item.name}
                    currentStep={currentStep}
                    item={item}
                    ind={index}
                    setCurrentStep={setCurrentStep}
                />
            );
        });
    };

    return (
        <div className="w-full mt-4 grid grid-cols-1 items-center grid-flow-row gap-4">
            <h2 className="w-full text-center text-2xl text-brand-900 font-bold">{title}</h2>
            {renderItems()}
        </div>
    );
};

export default MultiStepGuide;
