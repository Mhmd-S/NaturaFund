import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/MultiStepGuide/Title";
import Paragraph from "@/components/MultiStepGuide/Paragraph";

const Step = ({ currentStep, item, ind, setCurrentStep, height }) => {
    return (
        <div
            className="w-full p-3 flex flex-col bg-brand-50 rounded-lg transition-all duration-700 overflow-y-hidden"
            onClick={() => setCurrentStep(ind)}
        >
            <h2 className="w-full pl-8 flex items-center justify-between font-semibold text-slate-600">
                <span
                    className={`px-3 py-2 md:text-3xl ${currentStep == ind && "bg-white rounded-lg"}`}
                >
                    Step {ind + 1}
                </span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transform transition-transform duration-700 md:hidden ${
                        currentStep === ind ? "rotate-180" : ""
                    }`}
                />
            </h2>
            <div
                className={`w-full justify-center overflow-y-hidden mt-8 p-4 text-sm text-slate-700 md:text-lg md:grid md:grid-cols-2 md:grid-flow-row ${currentStep == ind ? "block" : "hidden"}`}
            >
                <Title title={item.title} ind={ind} />
                <Paragraph text={item.paragraph} />
                <div className="w-full md:row-start-3 md:row-span-2 md:col-start-1">
                    {item.subpoints.map((subpoint, ind) => (
                        <div key={ind} className=" py-2 flex items-center">
                            {subpoint.icon}
                            <p className="pl-2">{subpoint.text}</p>
                        </div>
                    ))}
                </div>
                {item.img && (
                    <img
                        src={item.img}
                        className="md:row-start-1 md:row-span-3 md:col-start-2"
                        alt="step"
                    />
                )}
            </div>
        </div>
    );
};

export default Step;
