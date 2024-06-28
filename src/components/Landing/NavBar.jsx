import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faArrowCircleRight, faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={`absolute flex justify-between z-10 top-0 w-screen p-2 md:grid md:grid-cols-3 md:grid-rows-1 md:items-center md:place-self-center md:justify-self-center  md:backdrop-blur-xl transition-all ${showMenu ? "bg-white h-48 text-black" : "text-white h-12"}`}>
      <h1 className="ml-8 mt-3 font-serif md:text-3xl">
        NaturaFund
        <FontAwesomeIcon icon={faLeaf} className="ml-3" />
      </h1>
      <ul className={`absolute md:relative w-full flex items-center justify-evenly ${showMenu ? "top-20" : "-top-80"}`}>
        <li>
          Solutions
          <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
        </li>
        <li>
          Solutions
          <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
        </li>
        <li>
          Solutions
          <FontAwesomeIcon icon={faArrowCircleRight} className="ml-2" />
        </li>
      </ul>
      <button className="w-fit h-fit p-3 mr-4 rounded-2xl md:" onClick={toggleMenu}>
        <FontAwesomeIcon icon={showMenu ? faClose : faBars} className="ml-2" />
      </button>
    </div>
  );
};

export default NavBar;
