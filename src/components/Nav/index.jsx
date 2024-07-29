import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faHomeLg,
    faCompass,
    faCog,
    faGauge,
    faQuestion,
    faUser,
    faFunnelDollar,
} from "@fortawesome/free-solid-svg-icons";

const itemsMenu = [
    {
        name: "Home",
        icon: faHomeLg,
    },
    {
        name: "Portfolio",
        icon: faGauge,
    },
    {
        name: "Explore",
        icon: faCompass,
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
];

const Nav = () => {
    const location = useLocation();

    return (
        <div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
            <div>
                <div className="inline-flex size-16 items-center justify-center">
                    <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                        L
                    </span>
                </div>

                <div className="border-t border-gray-100">
                    <div className="px-2">
                        <ul className="space-y-1 border-t border-gray-100 py-4">
                            {itemsMenu.map((item) => {
                                return (
                                    <li key={item.name}>
                                        <Link
                                            to={`/${item.name.toLowerCase()}`}
                                            className={`group relative flex justify-center rounded px-2 py-2 ${location.pathname === `/${item.name.toLowerCase()}` ? "bg-brand-100 text-brand-800" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
                                        >
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="size-5 opacity-75"
                                            />
                                            <span className="invisible z-50 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100">
                    <div className="px-2">
                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                            {itemsOthers.map((item) => {
                                return (
                                    <li key={item.name}>
                                        <Link
                                            to={`/${item.name.toLowerCase()}`}
                                            className={`group relative flex justify-center rounded px-2 py-2 ${location.pathname === `/${item.name.toLowerCase()}` ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"}`}
                                        >
                                            <FontAwesomeIcon
                                                icon={item.icon}
                                                className="size-5 opacity-75"
                                            />
                                            <span className="invisible z-50 absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                <form action="#">
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                        </svg>

                        <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                            Logout
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Nav;
