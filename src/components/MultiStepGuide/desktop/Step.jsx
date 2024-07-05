import React from "react";
import Title from "@/components/MultiStepGuide/Title";
import Paragraph from "@/components/MultiStepGuide/Paragraph";

const Step = ({ currentStep, item, ind }) => {
    return (
        <div
            className="w-full h-full p-3 flex flex-col rounded-lg transition-all duration-700 overflow-y-hidden animate-fadeIn duration-300"
        >
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
