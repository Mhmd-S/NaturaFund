import React, { useState } from "react";
import Step from "@/components/MultiStepGuide/desktop/Step";

const MultiStepGuide = ({ title, items }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const renderHeader = () => {
        return items.map((item, index) => {
            return (
                <h2
                    key={item.title}
                    className="w-full flex items-center justify-between text-slate-600 cursor-pointer"
                    onClick={() => setCurrentStep(index)}
                >
                    <span
                        className={`w-full px-3 py-1 text-2xl text-center ${currentStep == index && "text-brand-800 font-semibold bg-white rounded-lg"}`}
                    >
                        Step {index + 1}
                    </span>
                </h2>
            );
        });
    };

    const renderItem = () => {
        return (
            <Step
                key={items[currentStep].name}
                currentStep={currentStep}
                item={items[currentStep]}
                ind={Object.keys(items).indexOf(items)}
                setCurrentStep={setCurrentStep}
            />
        );
    };

    return (
        <div className="w-5/6 flex flex-col gap-16">
            <h2 className="w-full text-center text-3xl text-brand-900 font-bold">{title}</h2>
            <div className="w-full p-4 flex flex-col items-center bg-brand-50 rounded-lg">
                <div className="w-full flex items-center justify-center ">{renderHeader()}</div>
                {renderItem()}
            </div>
        </div>
    );
};

export default MultiStepGuide;
