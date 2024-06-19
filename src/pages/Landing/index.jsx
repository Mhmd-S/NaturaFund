import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faArrowCircleRight, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-1 grid-rows-[15%_85%] bg-[#FFF6E9]">
        <div className='w-full grid grid-cols-3 grid-rows-1 items-center'>
          <h1 className='ml-8 font-serif text-2xl'>
            NaturaFund
            <FontAwesomeIcon icon={faLeaf} className='text-[#0D9276] ml-3' />
          </h1>
          <ul className='w-full flex items-center justify-evenly text-[#004536] [&>*]:cursor-pointer'>
            <li>
              Solutions
              <FontAwesomeIcon icon={faArrowCircleRight} className='ml-2' />
            </li>
            <li>
              Solutions
              <FontAwesomeIcon icon={faArrowCircleRight} className='ml-2' />
            </li>
            <li>
              Solutions
              <FontAwesomeIcon icon={faArrowCircleRight} className='ml-2' />
            </li>
          </ul>
          <button className='w-fit h-fit p-2 px-8 rounded-3xl bg-[#BBE2EC] text-[#203949] justify-self-end mr-14'>
            Login
          </button>
        </div>
        <div className='w-full h-full flex items-center justify-center'>
          <div className='w-5/6 h-5/6 grid grid-cols-1 grid-rows-[40%_10%_45%] place-items-center bg-[url("./pic1.jpg")] bg-center bg-cover bg-no-repeat rounded-2xl'>
            <h1 className='text-6xl font-serif font-bold text-[#f6ff4c]'>
              Invest in Nature
            </h1>
            <p className='text-[#f6ff4c] text-3xl text-center font-serif'>
              NaturaFund is a platform that allows you to invest in nature.
            </p>
            <FontAwesomeIcon icon={faArrowCircleDown} className='text-[#f6ff4c] text-3xl animate-bounce' />
            </div>
        </div>
    </div>
  );
};

export default Landing;
