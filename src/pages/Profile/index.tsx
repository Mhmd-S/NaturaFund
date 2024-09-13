import React, { useState } from "react";
import TabNav from "@components/common/TabNav";
import Verification from "@modules/VerificationModule";
import PersonalDetails from "@modules/ProfileModule/PersonalDetails";
import PaymentDetails from "@modules/ProfileModule/PaymentDetails";
import TabbedWindow from "@components/common/TabbedWindow";

const tabs = ["Personal Info", "Payment Details", "Verification"];

const Profile = () => {
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
        <TabbedWindow currentTab={currentTab} setCurrentTab={setCurrentTab} tabs={tabs}>
            {renderDetail()}
        </TabbedWindow>
    );
};

export default Profile;
