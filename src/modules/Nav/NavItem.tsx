import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavItem = ({ item, location }) => {
    return (
        <li key={item.name}>
            <Link
                to={`/${item.name.toLowerCase()}`}
                className={`flex items-center gap-4 rounded-lg px-4 py-2 text-sm  ${location.pathname === `/${item.name.toLowerCase()}` ? "bg-brand-100 text-brand-800" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
            >
                {item.icon}
                {item.name}
            </Link>
        </li>
    );
};

export default NavItem;