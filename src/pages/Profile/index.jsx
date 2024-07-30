import React, { useState } from "react";
import TabNav from "@/components/TabNav"

const tabs = ["Personal Info", "Payment Details", "Tax Details"];

const Profile = () => {
  const [currentTab, setCurrentTab] = useState("Personal Info");

    const renderDetail = () => {
        switch (currentTab) {
            case "Personal Info":
                return <PersonalDetails />;
            case "Payment Details":
                return <PaymentDetails />;
            case "Tax Details":
                return <TaxDetails />;
            default:
                return <PersonalDetails />;
        }
    };

    return (
        <div className="w-full overflow-y-auto flex flex-col items-center pt-4">
            <TabNav
                tabs={tabs}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <div className="w-full px-12 my-20 grid gap-16">{renderDetail()}</div>
        </div>
    );
};

export default Profile;
