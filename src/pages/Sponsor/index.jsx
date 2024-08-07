import React, { useState } from "react";
import TabNav from "@/components/common/TabNav";
import Verification from "@/modules/Verification";
import PersonalDetails from "@/modules/Profile/PersonalDetails";
import PaymentDetails from "@/modules/Profile/PaymentDetails";

const tabs = ["Personal Info", "Payment Details", "Verification"];

const Sponsor = () => {
    const [currentTab, setCurrentTab] = useState("Personal Info");

    const renderDetail = () => {
        switch (currentTab) {
            case "Personal Info":
                return <PersonalDetails />;
            case "Payment Details":
                return <PaymentDetails />;
            case "Verification":
                return <Verification />;
            default:
                return <PersonalDetails />;
        }
    };

    return (
        <div className="w-full overflow-y-auto p-6 bg-gray-300/20">
            <div className="flex flex-col bg-white p-6 rounded-3xl">
                <TabNav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
                <div className="min-h-[26rem] p-4 grid grid-cols-1 gap-16 bg-white rounded-3xl">
                    {renderDetail()}
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
