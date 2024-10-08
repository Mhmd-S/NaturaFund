import React, { useState } from "react";
import Tab from "@components/MultiTabGuide/mobile/Tab";

const MultiTabGuide = ({ title, items }) => {
    const [currentStep, setCurrentStep] = useState(0);

    const renderItems = () => {
        return items.map((item, index) => {
            return (
                <Tab
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
        <div className="w-full mt-4 grid grid-cols-1 grid-flow-row items-center gap-4">
            <h2 className="w-full text-center text-3xl text-brand-900 font-bold">{title}</h2>
            {renderItems()}
        </div>
    );
};

export default MultiTabGuide;
