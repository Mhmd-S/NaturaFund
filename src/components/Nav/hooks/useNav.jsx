import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCompass, faCog, faGauge } from "@fortawesome/free-solid-svg-icons";

const items = [
    {
        name: "Home",
        icon: faHome,
    },
    {
        name: "Dashboard",
        icon: faGauge,
    },
    {
        name: "Explore",
        icon: faCompass,
    },
    {
        name: "Settings",
        icon: faCog,
    },
];

const useNav = () => {
    const renderNavItems = () => {
        return items.map((item, index) => (
            <li key={index} className="flex items-center gap-x-4 cursor-pointer hover:bg-[#A6ABC8]">
                <FontAwesomeIcon icon={item.icon} />
                <span className="ml-2">{item.name}</span>
            </li>
        ));
    };

    return { renderNavItems };
};

export default useNav;
