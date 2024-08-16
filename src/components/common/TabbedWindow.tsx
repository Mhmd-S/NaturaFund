import React, { Children } from "react";

import TabNav from "@/components/common/TabNav";

const TabbedWindow = ({ currentTab, setCurrentTab, tabs, children }) => {
    return (
        <div className="w-full overflow-y-auto flex flex-col p-8">
            <TabNav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div className="min-h-96 my-10 grid grid-cols-2 gap-14">{children}</div>
        </div>
    );
};

export default TabbedWindow;
