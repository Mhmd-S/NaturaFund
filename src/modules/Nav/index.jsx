import React from "react";
import { useLocation } from "react-router-dom";
import {
    faHomeLg,
    faCompass,
    faCog,
    faGauge,
    faQuestion,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import NavSection from "@/modules/Nav/NavSection";

const PRIMARY_ITEMS = [
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

const SECONDARY_ITEMS = [
    {
        name: "Profile",
        icon: faUser,
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
            <div className="divide-y">
                <div className="inline-flex size-16 items-center justify-center">
                    <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                        L
                    </span>
                </div>

                <NavSection location={location} items={PRIMARY_ITEMS} />

                <NavSection location={location} items={SECONDARY_ITEMS} />
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t bg-white p-2">
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
