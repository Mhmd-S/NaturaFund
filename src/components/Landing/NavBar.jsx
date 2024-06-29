import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faArrowCircleRight,
    faBars,
    faClose,
    faLock,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div
            className={`fixed w-screen p-2 flex justify-between z-10 top-0 transition-all ${showMenu ? "bg-white h-screen border-b-2 border-b-black text-black" : "text-white h-12"} md:h-fit md:py-4 md:grid md:grid-cols-3 md:grid-rows-1 md:items-center md:place-self-center md:justify-self-center md:backdrop-blur-3xl`}
        >
            <h1 className="ml-8 pt-3 font-serif md:text-3xl">
                NaturaFund
                <FontAwesomeIcon icon={faLeaf} className="ml-3" />
            </h1>
            <div
                className={`absolute h-full w-full flex flex-col items-center justify-evenly ${showMenu ? "top-20" : "-top-80"} md:relative md:top-0 md:flex-row`}
            >
                <a>
                    Solutions
                    <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
                </a>
                <a>
                    Solutions
                    <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
                </a>
                <a>
                    Solutions
                    <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
                </a>
                <button className="border-2 transition-all border-green-300 text-green-300 p-2 rounded-2xl hover:border-green-500 hover:text-green-500">
                    Register
                </button>
                <button className="transition-all text-orange-300 p-2 rounded-2xl hover:text-orange-400">
                    Log In
                    <FontAwesomeIcon icon={faLock} className="ml-2" />
                </button>
            </div>
            <button className="w-fit h-fit p-3 mr-4 rounded-2xl md:hidden" onClick={toggleMenu}>
                <FontAwesomeIcon icon={showMenu ? faClose : faBars} className="ml-2" />
            </button>
        </div>
    );
};

export default NavBar;
