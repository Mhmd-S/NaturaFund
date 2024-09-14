import React, { useState } from "react";
import TabNav from "@components/common/TabNav";
import Verification from "@modules/OnboardModule";
import PersonalDetails from "@modules/ProfileModule/PersonalDetails";
import PaymentDetails from "@modules/ProfileModule/PaymentDetails";
import TabbedWindow from "@components/common/TabbedWindow";

const tabs = ["Personal Info", "Payment Details"];

const Profile = () => {
    const [currentTab, setCurrentTab] = useState("Personal Info");

    const renderDetail = () => {
        switch (currentTab) {
            case "Personal Info":
                return <PersonalDetails />;
            case "Payment Details":
                return <PaymentDetails />;
            default:
                return <PersonalDetails />;
        }
    };

    return (
        <TabbedWindow currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={tabs}>
            {renderDetail()}
        </TabbedWindow>
    );
};

export default Profile;
