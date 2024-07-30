import React from "react";

const TabNav = ({ tabs, currentTab, setCurrentTab }) => {
    return (
        <ul className="fixed flex gap-6 bg-white p-2 rounded-md shadow-md z-10" aria-label="Tabs">
            {tabs.map((tab) => {
                return (
                    <li
                        key={tab}
                        href="#"
                        className={`shrink-0 rounded-lg p-2 text-sm font-medium  cursor-pointer capitalize  ${
                            currentTab === tab
                                ? "bg-sky-100 text-sky-600"
                                : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                        }`}
                        onClick={() => setCurrentTab(tab)}
                    >
                        {tab}
                    </li>
                );
            })}
        </ul>
    );
};

export default TabNav;
