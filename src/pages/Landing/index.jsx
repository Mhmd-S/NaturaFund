import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faArrowCircleRight, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className="relative w-screen h-screen flex flex-col bg-[url(./pic1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="h-fit w-full p-2 grid grid-cols-3 grid-rows-1 items-centerrounded-3xl place-self-center justify-self-center text-white backdrop-blur-xl">
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
      <div className="relative w-full h-full flex flex-col items-center justify-center bg-center bg-cover bg-no-repeat rounded-2xl text-white">
        <h1 className="text-6xl font-serif font-bold pb-1 underline backdrop-blur-sm p-5">Invest in Nature</h1>
        <p className="text-2xl font-serif font-light w-3/5 text-center backdrop-blur-sm p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque, urna nec
          facilisis ultricies, nunc justo gravida ligula, nec venenatis nunc mi ut mi.
        </p>
      </div>
    </div>
  );
};

export default Landing;
