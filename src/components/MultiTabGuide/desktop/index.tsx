import React, { useState } from "react";
import Tab from "@/components/MultiTabGuide/desktop/Tab";

const MultiStepGuide = ({ title, items }) => {
    const [currentTab, setCurrentTab] = useState(0);

    const renderHeader = () => {
        return items.map((item, index) => {
            return (
                <h2
                    key={item.title}
                    className="w-full flex items-center justify-between text-slate-400 cursor-pointer"
                    onClick={() => setCurrentTab(index)}
                >
                    <span
                        className={`w-full px-3 py-2 text-center ${currentTab == index && "text-brand-800 font-semibold bg-white rounded-t-lg"}`}
                    >
                        {item.title}
                    </span>
                </h2>
            );
        });
    };

    const renderItem = () => {
        return (
            <Tab
                key={items[currentTab].name}
                item={items[currentTab]}
                ind={currentTab}
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
