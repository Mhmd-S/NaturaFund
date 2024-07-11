import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faHome, faCompass, faCog, faGauge } from "@fortawesome/free-solid-svg-icons";

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

const Nav = () => {
    return (
        <div className="w-48 h-screen flex flex-col items-center gap-y-8 bg-brand-50 bg-opacity-45">
            <Link
                to="/"
                className="w-full py-2 flex items-center justify-center font-serif text-brand-800 text-xl border-b-[1px] border-[#C8CBD9] cursor-pointer md:text-xl md:border-r-brand-800"
            >
                <FontAwesomeIcon
                    icon={faLeaf}
                    className="mr-1 p-2 rounded-md text-white md:text-brand-800"
                />
                <span>NaturaFund</span>
            </Link>
            <ul className="flex flex-col gap-y-8 text-sm text-[#A6ABC8]">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="w-full p-2 flex items-center gap-x-4 cursor-pointer rounded-sm hover:bg-brand-100 hover:bg-opacity-50"
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        <span className="ml-2">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Nav;
