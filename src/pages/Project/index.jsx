import React, { useState } from "react";
import TabNav from "@/components/TabNav";

const tabs = ["overview", "activity", "team", "files", "notes"];

const Project = () => {
    const [currentTab, setCurrentTab] = useState("overview");

    return (
        <div className="w-full flex flex-col items-center pt-4">
            <TabNav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
    );
};

export default Project;
