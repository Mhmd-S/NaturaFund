import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/MultiStepGuide/MultiStepGuideMobile/Title";
import Paragraph from "@/components/MultiStepGuide/MultiStepGuideMobile/Paragraph";
import Subpoint from "@/components/MultiStepGuide/MultiStepGuideMobile/SubPoint";

const Step = ({ currentStep, item, ind, setCurrentStep }) => {
    return (
        <div
            className="w-full p-3 flex flex-col bg-brand-50 rounded-lg transition-all duration-700 overflow-y-hidden"
            onClick={() => setCurrentStep(ind)}
        >
            <h2 className="w-full pl-8 flex items-center justify-between font-semibold text-slate-600">
                <span className={`px-3 py-2 ${currentStep == ind && "bg-white rounded-lg"}`}>
                    Step {ind + 1}
                </span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transform transition-transform duration-700 ${
                        currentStep === ind ? "rotate-180" : ""
                    }`}
                />
            </h2>
            <div className={`overflow-y-hidden mt-8 p-4 text-sm text-slate-700 ${currentStep == ind ? "block" : "hidden"}`}>
                <Title title={item.title} ind={ind} />
                <Paragraph text={item.paragraph} />
                {item.subpoints.map((subpoint) => (
                    <Subpoint
                        key={subpoint.iconName}
                        iconName={subpoint.iconName}
                        text={subpoint.text}
                    />
                ))}
                {item.img && <img src={item.img} alt="step" />}
            </div>
        </div>
    );
};

export default Step;
