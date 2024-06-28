import React from 'react';
import NavBar from '@/components/Landing/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUsd, faHandshakeAlt } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center overflow-x-hidden">
      <NavBar />
      <video src="./vid8.mp4" className="absolute w-screen" autoPlay loop muted />
      <div className="w-screen h-screen top-0">
        <div className="relative w-full h-full pr-40 pb-10 grid grid-cols-1 grid-rows-2 place-items-end  text-white">
          <h1 className="text-5xl pb-4">Invest in Nature</h1>
          <p className="w-1/3 pt-2 justify-self-end align-self place-self-start text-xl font-light border-t-2">
            Invest in the future of renewable energy and sustainable agriculture.
          </p>
        </div>
      </div>
      <div className="relative w-full mt-28 pb-14 px-4 grid grid-cols-3 grid-rows-2 text-center text-lg place-items-center [&>*]:px-8 [&>*]:flex [&>*]:flex-col [&>*]:items-center">
        <p className="absolute text-2xl font-bold -top-5">HOW IT WORKS</p>
        <FontAwesomeIcon icon={faUsd} className="text-5xl text-yellow-300" />
        <FontAwesomeIcon icon={faHandshakeAlt} className="text-5xl text-gray-500" />
        <FontAwesomeIcon icon={faBookOpen} className="text-5xl text-green-500" />
        <p>
          Are you looking to invest in a sustainable future? Invest in projects that are good for
          the environment and good for your wallet.
        </p>
        <p>
          Looking to get funding for your sustainable project? We can help you get the funding you
          need to make your project a reality.
        </p>
        <p>
          Want to learn more about sustainable investing? We have resources to help you learn more
          about investing in the future.
        </p>
      </div>
      <div className="w-full grid grid-cols-2 grid-rows-1 place-items-center py-5 bg-[#efe8da]">
        <div className='w-full flex flex-col items-start pl-24'>
          <h3 className="text-2xl text-center border-b-2 border-orange-700">Our Mission</h3>
          <p className='py-4'>
            Our mission is to help people invest in the future of renewable energy and sustainable
            agriculture. We believe that investing in these projects is not only good for the
            environment, but also good for your wallet. By investing in these projects, you can help
            create a more sustainable future for everyone.
          </p>
          <button className="bg-orange-700 text-white px-4 py-2 rounded-lg">
            Sign up and make an impact
          </button>
        </div>
        <img src="./solar_panels.jpg" alt="solar panels" className='w-2/3' />
      </div>
      
    </div>
  );
};

export default Landing;
