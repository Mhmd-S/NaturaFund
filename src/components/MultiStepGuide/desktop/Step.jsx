import React from "react";
import Title from "@/components/MultiStepGuide/Title";
import Paragraph from "@/components/MultiStepGuide/Paragraph";

const Step = ({ currentStep, item, ind }) => {
    return (
        <div
            className="w-full h-full p-3 flex flex-col rounded-lg transition-all duration-700 animate-fadeIn"
        >
            <div
                className="w-full justify-center mt-8 p-4 text-slate-700 text-lg grid grid-cols-2 grid-flow-row"
            >
                <Title title={item.title} ind={ind} />
                <Paragraph text={item.paragraph} />
                <div className="w-full row-start-3 row-span-2 col-start-1">
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
                        className="row-start-1 row-span-3 col-start-2"
                        alt="step"
                    />
                )}
            </div>
        </div>
    );
};

export default Step;
