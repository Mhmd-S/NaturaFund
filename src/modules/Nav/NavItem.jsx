import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavItem = ({ item, location }) => {
    return (
        <li key={item.name}>
            <Link
                to={`/${item.name.toLowerCase()}`}
                className={`group relative flex justify-center rounded px-2 py-2 ${location.pathname === `/${item.name.toLowerCase()}` ? "bg-brand-100 text-brand-800" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
            >
                <FontAwesomeIcon icon={item.icon} className="size-5 opacity-75" />
                <span className="invisible z-50 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    {item.name}
                </span>
            </Link>
        </li>
    );
};

export default NavItem;
