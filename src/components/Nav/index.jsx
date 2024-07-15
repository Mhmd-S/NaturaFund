import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHome, faCompass, faCog, faGauge, faQuestion, faUser, faFunnelDollar } from "@fortawesome/free-solid-svg-icons";

const itemsMenu = [
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
        name: "Sponsor Tab",
        icon: faFunnelDollar,
    },
];

const itemsOthers = [
    {
        name: "Profile",
        icon: faUser,
    },
    {
        name: "Settings",
        icon: faCog,
    },
    {
        name: "Help",
        icon: faQuestion,
    },
]

const Nav = () => {
    const location = useLocation();

    return (
        <div className="w-full h-full flex flex-col items-center gap-y-5 bg-brand-50 bg-opacity-45 row-span-full border-r-[1px] border-brand-800">
            <Link
                to="/"
                className="w-full p-4 flex items-center font-serif text-brand-800 text-xl cursor-pointer md:text-xl md:border-r-brand-800"
            >
                <FontAwesomeIcon
                    icon={faLeaf}
                    className="mr-1 p-2 rounded-md text-white md:text-brand-800"
                />
                <span>NaturaFund</span>
            </Link>
            <div className="w-full flex flex-col px-4 text-[0.8rem] text-[#A6ABC8]">
                <p className="pl-5 text-[0.75rem]">MENU</p>
                {itemsMenu.map((item, index) => (
                    <Link
                        key={index}
                        to={`/${item.name.toLowerCase()}`}
                        className={`w-full px-5 py-3 flex items-center gap-x-4 cursor-pointer rounded-md hover:bg-brand-100 hover:bg-opacity-50 ${location.pathname === `/${item.name.toLowerCase()}` ? "bg-brand-100 bg-opacity-40 text-brand-800" : ""}`}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <span className="ml-2">{item.name}</span>
                    </Link>
                ))}
            </div>
            <div className="w-full flex flex-col px-4 text-[0.8rem] text-[#A6ABC8]">
                <p className="pl-5 text-[0.75rem]">OTHERS</p>
                {itemsOthers.map((item, index) => (
                    <Link
                        key={index}
                        to={`/${item.name.toLowerCase()}`}
                        className={`w-full px-5 py-3 flex items-center gap-x-4 cursor-pointer rounded-md hover:bg-brand-100 hover:bg-opacity-50 ${location.pathname === `/${item.name.toLowerCase()}` ? "bg-brand-100 bg-opacity-40 text-brand-800" : ""}`}
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <span className="ml-2">{item.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Nav;
