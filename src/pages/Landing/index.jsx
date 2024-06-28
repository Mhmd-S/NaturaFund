import React from "react";
import NavBar from "@/components/Landing/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandHoldingDollar,
    faSolarPanel,
    faLeaf,
    faExchange,
    faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
    return (
        <div className="relative w-full h-full overflow-x-hidden">
            <NavBar />
            <div className="absolute w-screen h-screen overflow-hidden top-0">
                <video src="./vid8.mp4" className="w-screen" autoPlay loop muted />
            </div>
            <div className="relative w-screen h-screen pr-40 pb-10 grid grid-cols-1 grid-rows-2 place-items-end text-white">
                <h1 className="text-5xl pb-4">Invest in Nature</h1>
                <p className="w-1/3 pt-2 justify-self-end align-self place-self-start text-xl font-light border-t-2">
                    Invest in the future of renewable energy and a sustainable future.
                </p>
            </div>
            <div className="relative w-full px-6 py-24 flex flex-col items-center justify-center bg-white text-center text-lg place-items-center [&>p]:px-8 [&>p]:flex [&>p]:flex-col [&>p]:items-center">
                <h3 className="text-3xl text-center border-b-2 border-orange-700">HOW IT WORKS</h3>
                <div className="w-full py-12 grid grid-cols-[30%_5%_30%_5%_30%] grid-rows-1 place-items-center">
                    <FontAwesomeIcon
                        icon={faHandHoldingDollar}
                        className="text-6xl text-green-500"
                    />
                    <FontAwesomeIcon icon={faExchange} className="text-4xl text-black" />
                    <FontAwesomeIcon icon={faLeaf} className="text-6xl text-gray-500" />
                    <FontAwesomeIcon icon={faExchange} className="text-4xl text-black" />
                    <FontAwesomeIcon icon={faSolarPanel} className="text-6xl text-yellow-300" />
                    <p>
                        Are you looking to invest in a sustainable future? Invest in projects that
                        are good for the environment and good for your wallet.
                    </p>
                    <span /> {/* Spacer */}
                    <p>
                        Looking to get funding for your sustainable project? We can help you get the
                        funding you need to make your project a reality.
                    </p>
                    <span /> {/* Spacer */}
                    <p>
                        Want to learn more about sustainable investing? We have resources to help
                        you learn more about investing in the future.
                    </p>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-1 place-items-center py-24 px-16 bg-neu-gray">
                <div className="w-full flex flex-col items-start">
                    <h3 className="text-3xl text-center border-b-2 border-orange-700">
                        Our Mission
                    </h3>
                    <p className="py-10 text-md">
                        Our mission is to help people invest in the future of renewable energy and
                        sustainable agriculture. We believe that investing in these projects is not
                        only good for the environment, but also good for your wallet. By investing
                        in these projects, you can help create a more sustainable future for
                        everyone.
                    </p>
                    <button className="bg-orange-700 text-white px-4 py-2 rounded-lg">
                        Sign up and make an impact
                    </button>
                </div>
                <img
                    src="./solar_panels.jpg"
                    alt="solar panels"
                    className="w-3/4 place-self-end rounded-lg"
                />
            </div>
            <div className="w-full py-24 px-16 flex flex-col items-center justify-center">
                <h3 className="text-3xl text-center border-b-2 border-orange-700">
                    Why NaturaFund
                </h3>
                <p className="w-2/3 pt-12 text-center text-2xl">
                    NaturaFund is a platform that allows you to invest in renewable energy and
                    sustainable agriculture projects. We believe that investing in these projects is
                    not only good for the environment, but also good for your wallet. By investing
                    in these projects, you can help create a more sustainable future for everyone.
                </p>
            </div>
            <div className="w-full py-24 px-16 flex flex-col items-center justify-center bg-neu-gray">
                <h3 className="text-3xl text-center border-b-2 border-orange-700">Learn more</h3>
                <div className="w-full grid grid-cols-4 grid-rows-1 gap-12 py-12">
                    <a className="h-full flex flex-col justify-between items-end bg-white hover:bg-green-200 cursor-pointer px-6 py-4 rounded-md">
                        <h4 className="w-full font-bold">Insights</h4>
                        <p className="text-sm py-6">
                            Learn more about renewable energy and the potential of investing in
                            sustainable projects.
                        </p>
                        <FontAwesomeIcon
                            icon={faArrowCircleRight}
                            className="text-2xl text-black"
                        />
                    </a>
                    <a className="h-full flex flex-col justify-between items-end bg-white hover:bg-green-200 cursor-pointer px-6 py-4 rounded-md">
                        <h4 className="w-full font-bold">Questions and Answers</h4>
                        <p className="text-sm py-6">
                            Read through our FAQ to learn more about how NaturaFund works and how
                            you can get involved.
                        </p>
                        <FontAwesomeIcon
                            icon={faArrowCircleRight}
                            className="text-2xl text-black"
                        />
                    </a>
                    <a className="h-full flex flex-col justify-between items-end bg-white hover:bg-green-200 cursor-pointer px-6 py-4 rounded-md">
                        <h4 className="w-full font-bold">Progress made</h4>
                        <p className="text-sm py-6">
                            See how we are making a difference in the world by investing in
                            sustainable projects.
                        </p>
                        <FontAwesomeIcon
                            icon={faArrowCircleRight}
                            className="text-2xl text-black"
                        />
                    </a>
                    <a className="h-full flex flex-col justify-between items-end bg-orange-200 cursor-pointer px-6 py-4 hover:bg-green-200 rounded-md">
                        <h4 className="w-full font-bold">Sign Up</h4>
                        <p className="text-sm py-6">
                            Join us and start investing in the future of renewable energy for
                            sustainable future.
                        </p>
                        <FontAwesomeIcon
                            icon={faArrowCircleRight}
                            className="text-2xl text-black"
                        />
                    </a>
                </div>
            </div>
            <div className="w-full py-24 px-16 flex flex-col items-center justify-center bg-neu-gray"></div>
        </div>
    );
};

export default Landing;
