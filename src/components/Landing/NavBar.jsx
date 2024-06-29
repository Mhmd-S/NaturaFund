import React, { useState } from "react";
import { stopScrolling, allowScrolling } from "@/utils/scrollingControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faChevronDown,
    faBars,
    faClose,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        if (!showMenu) {
            stopScrolling();
        } else {
            allowScrolling();
        }
    };

    return (
        <div className={`relative w-screen p-2 flex justify-between ${showMenu && "grid grid-cols-1 grid-rows[15%_85%]"} bg-white`}>
            <h1 className="ml-8 pt-3 font-serif text-brand-800 text-xl md:text-3xl">
                NaturaFund
                <FontAwesomeIcon icon={faLeaf} className="ml-3" />
            </h1>
            <div
                className={`absolute py-4 w-full h-screen grid grid-cols-1 grid-rows-8 place-items-center transition-all top-12 bg-white ${showMenu ? "left-0" : "left-[25rem]"} md:relative md:top-0 md:flex-row`}
            >
                <a className="w-full flex justify-between px-12">
                    <span className="mr-2">Invest</span>
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </a>
                <a className="w-full flex justify-between px-12">
                    Learn
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </a>
                <a className="w-full flex justify-between px-12">
                    About
                    <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                </a>
                <span/>
                <span/>
                <span/>
                <div className="w-full h-full flex items-center justify-evenly border-t-2 z-20 shadow-[inset_0px_2px_4px_#000000f]">
                    <button className="w-2/5 rounded-md border-2 transition-all border-brand-800 text-brand-800 p-2 hover:border-green-900 hover:text-brand-900">
                        Register
                    </button>
                    <button className="w-2/5 rounded-md transition-all bg-brand-800 p-2 border-2 hover:text-brand-800">
                        Log In
                    </button>
                </div>
            </div>
            <button
                className="absolute w-fit h-fit p-3 mr-4 top-2 right-0 rounded-2xl text-brand-800 md:hidden"
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={showMenu ? faClose : faBars} className="ml-2 text-2xl" />
            </button>
        </div>
    );
};

export default NavBar;
