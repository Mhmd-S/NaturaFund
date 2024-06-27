import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="sticky z-10 top-1 w-screen p-2 grid grid-cols-3 grid-rows-1 items-center place-self-center justify-self-center text-white backdrop-blur-xl">
      <h1 className="ml-8 font-serif text-3xl">
        NaturaFund
        <FontAwesomeIcon icon={faLeaf} className="text-white ml-3" />
      </h1>
      <ul className="w-full flex items-center justify-evenly text-white [&>*]:cursor-pointer">
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
      <button className="w-fit h-fit p-2 px-8 rounded-2xl border-2 border-[#6db5c8] justify-self-end mr-14">
        Invest Now
      </button>
    </div>
  );
};

export default NavBar;
