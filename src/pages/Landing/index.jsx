import React from "react";
import NavBar from "@/components/Landing/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandHoldingDollar,
    faSolarPanel,
    faLeaf,
    faExchange,
    faArrowCircleRight,
    faExternalLink,
} from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
    return (
        <div className="relative w-full h-full overflow-x-hidden">
            <NavBar />
            <div className="absolute w-screen h-screen overflow-hidden top-0">
                <video src="./vid8.mp4" className="w-screen" autoPlay loop muted />
            </div>
            <div className="relative w-screen h-screen pr-40 pb-10 grid grid-cols-1 grid-rows-2 place-items-end text-white">
                <h1 className="text-5xl pb-4 font-semibold">Invest in Nature</h1>
                <p className="w-1/3 pt-2 justify-self-end align-self place-self-start text-xl font-light border-t-2">
                    Invest in the future of renewable energy and a sustainable future.
                </p>
            </div>
            <div className="relative w-full px-6 py-20 flex flex-col items-center justify-center bg-white text-center text-lg place-items-center [&>p]:px-8 [&>p]:flex [&>p]:flex-col [&>p]:items-center">
                <h3 className="text-3xl text-center border-b-2 border-orange-700 font-semibold">
                    How It Works
                </h3>
                <div className="w-full py-12 grid grid-cols-[30%_5%_30%_5%_30%] grid-rows-1">
                    <FontAwesomeIcon
                        icon={faHandHoldingDollar}
                        className="text-6xl text-green-500 py-10 place-self-center"
                    />
                    <FontAwesomeIcon icon={faExchange} className="text-4xl text-black place-self-center" />
                    <FontAwesomeIcon icon={faLeaf} className="text-6xl text-gray-500 place-self-center" />
                    <FontAwesomeIcon icon={faExchange} className="text-4xl text-black place-self-center" />
                    <FontAwesomeIcon icon={faSolarPanel} className="text-6xl text-yellow-300 place-self-center" />
                    <div>
                        <h3 className="font-semibold pb-3">Investors</h3>
                        <p className="text-sm">
                            You invest in loans for renewable energy projects in emerging markets,
                            providing them with capital to supply clean, affordable and stable
                            electricity where it is needed the most. You can choose the projects you
                            want to invest in and the amount you want to invest in each project. You
                            can also choose to invest in a diversified portfolio of projects to
                            spread your risk.
                        </p>
                    </div>
                    <span /> {/* Spacer */}
                    <div>
                        <h3 className="font-semibold pb-3">NaturaFund</h3>
                        <p className="text-sm">
                            All projects have gone through a comprehensive risk assessment and
                            approval by our investment team before going live on the site. We then
                            monitor the sponsors' performance and impact on an ongoing basis. You
                            can track the loan and impact on your dashboard.
                        </p>
                    </div>
                    <span /> {/* Spacer */}
                    <div>
                        <h3 className="font-semibold pb-3">Project Sponsors</h3>
                        <p className="text-sm"> 
                            Sponsors use the capital to fund their projects, such as installing
                            solar systems for their end-customers, or building huge projects. Their
                            customers can be anything from families, schools and hospitals to
                            large-scale businesses. Once the company starts to repay their loan, you
                            receive capital and interest in return. Repayments can be reinvested to
                            make an even larger impact.
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 grid-rows-1 place-items-center py-24 px-16 bg-neu-gray">
                <div className="w-full flex flex-col items-start">
                    <h3 className="text-3xl text-center border-b-2 border-orange-700 font-semibold">
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
                <h3 className="text-3xl text-center border-b-2 border-orange-700 font-semibold">
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
                <h3 className="text-3xl text-center border-b-2 border-orange-700 font-semibold">
                    Learn more
                </h3>
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
            <div className="w-full py-10 px-16 grid grid-cols-3 grid-row-2 gap-3 bg-med-gray text-white ">
                <p className="text-xl font-semibold">Contact</p>
                <p className="text-xl font-semibold">Other resources</p>
                <p className="text-xl font-semibold">Legal</p>
                <div className="flex flex-col w-fit">
                    <a className="cursor-pointer hover:text-deep-blue py-2">Contact Us</a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">About Us</a>
                </div>
                <div className="flex flex-col w-fit">
                    <a className="cursor-pointer hover:text-deep-blue py-2">FAQ</a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">Insights</a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">News</a>
                </div>
                <div className="flex flex-col w-fit">
                    <a className="cursor-pointer hover:text-deep-blue py-2">Privacy Policy 
                      <FontAwesomeIcon icon={faExternalLink} className="text-xs pl-2" />
                    </a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">Terms and Conditions 
                      <FontAwesomeIcon icon={faExternalLink} className="text-xs pl-2" />
                    </a>
                </div>
            </div>
            <div className="w-full px-12 py-2 bg-earthy-orange text-white flex justify-evenly items-center ">
                <span>&copy; 2021 NaturaFund. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Landing;
