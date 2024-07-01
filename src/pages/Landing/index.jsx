import React from "react";
import NavBar from "@/components/Landing/NavBar";
import useResponsive from "@/hooks/useResponsive";
import Carasol from "@/components/Carasol";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faExternalLink, faCheck } from "@fortawesome/free-solid-svg-icons";

const items = {
    0: {
        title: "Investors",
        content: `You invest in loans for renewable energy projects in emerging
  markets, providing them with capital to supply clean, affordable and
  stable electricity where it is needed the most. You can choose the
  projects you want to invest in and the amount you want to invest in
  each project. You can also choose to invest in a diversified
  portfolio of projects to spread your risk.`,
        img: "landing_carasol_1.svg",
    },
    1: {
        title: "NaturaFund",
        content: `All projects have gone through a comprehensive risk assessment and
  approval by our investment team before going live on the site. We
  then monitor the sponsors' performance and impact on an ongoing
  basis. You can track the loan and impact on your dashboard.`,
        img: "landing_carasol_2.svg",
    },
    2: {
        title: "Project Sponsors",
        content: `Sponsors use the capital to fund their projects, such as installing
  solar systems for their end-customers, or building huge projects.
  Their customers can be anything from families, schools and hospitals
  to large-scale businesses. Once the company starts to repay their
  loan, you receive capital and interest in return. Repayments can be
  reinvested to make an even larger impact.`,
        img: "landing_carasol_3.svg",
    },
};

const Landing = () => {
    const { isMobile } = useResponsive();

    return (
        <div className="relative px-4 w-full h-full flex flex-col overflow-x-hidden">
            <NavBar />
            <div className="h-screen mt-6 flex flex-col text-brand-800 md:pb-24 md:grid md:grid-rows-[20%_10%_10%_10%_10%] md:grid-cols-2 md:gap-2">
                <h1 className="py-4 text-4xl font-bold md:text-5xl md:row-start-1 md:row-span-2">
                    Earn returns while striving for a sustainable future
                </h1>
                <p className="mt-2 pt-3 text-brand-800 text-md md:row-start-3">
                    <FontAwesomeIcon icon={faCheck} className="mr-4 text-sm" />
                    Buy solar panels in rooftop projects
                </p>
                <p className="pt-3 text-brand-800 text-md md:row-start-4">
                    <FontAwesomeIcon icon={faCheck} className="mr-4 text-sm" />
                    Earn 10-13% returns from electricity your panels generate
                </p>
                <p className="pt-3 text-brand-800 text-md md:row-start-5">
                    <FontAwesomeIcon icon={faCheck} className="mr-4 text-sm" />
                    Vested takes care of the installation and maintenance of your panels
                </p>
                <button className="w-2/5 my-5 rounded-md transition-all bg-brand-800 p-2 border-2 text-white hover:text-brand-800 md:w-2/5 md:h-1/3 md:my-2 md:mt-4 md:row-start-6 md:align-self-center md:transition-all md:hover:bg-white md:border-brand-800">
                    Sign Up Now
                </button>
                <img src="landing_1.svg" />
            </div>
            <Carasol items={items} />
            <div className="w-full px-6 py-24 flex flex-col items-center place-items-center bg-neu-gray md:px-16 md:grid md:grid-cols-2 md:grid-rows-1">
                <div className="w-full grid grid-cols-1 items-start">
                    <h3 className="w-fit text-3xl text-center border-b-2 border-orange-700 font-semibold">
                        Our Mission
                    </h3>
                    <p className="py-10 text-md">
                        Our mission is to help people invest in the future of renewable energy and
                        sustainable agriculture. We believe that investing in these projects is not
                        only good for the environment, but also good for your wallet. By investing
                        in these projects, you can help create a more sustainable future for
                        everyone.
                    </p>
                    <button className="w-fit bg-orange-700 text-white px-4 py-2 mb-8 rounded-lg justify-self-center md:justify-self-start">
                        Make an impact now
                    </button>
                </div>
            </div>
            <div className="w-full py-24 px-6 flex flex-col items-center justify-center md:px-16">
                <h3 className="text-2xl text-center border-b-2 border-orange-700 font-semibold md:text-3xl">
                    Why NaturaFund
                </h3>
                <p className="w-full pt-12 text--xl text-center md:text-2xl">
                    NaturaFund is a platform that allows you to invest in renewable energy and
                    sustainable agriculture projects. We believe that investing in these projects is
                    not only good for the environment, but also good for your wallet. By investing
                    in these projects, you can help create a more sustainable future for everyone.
                </p>
            </div>
            <div className="w-full py-24 px-6 flex flex-col items-center justify-center bg-neu-gray md:px-16">
                <h3 className="text-3xl text-center border-b-2 border-orange-700 font-semibold">
                    Learn more
                </h3>
                <div className="w-full grid grid-cols-1 grid-rows-4 gap-12 py-12 md:grid-cols-4 md:grid-rows-1">
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
            <div className="w-full py-10 px-6 grid grid-cols-3 grid-row-2 gap-3 bg-med-gray text-white md:px-16">
                <p className="text-sm font-semibold md:text-xl">Contact</p>
                <p className="text-sm font-semibold md:text-xl">Other resources</p>
                <p className="text-sm font-semibold md:text-xl">Legal</p>
                <div className="text-sm flex flex-col w-fit">
                    <a className="cursor-pointer hover:text-deep-blue py-2">Contact Us</a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">About Us</a>
                </div>
                <div className="text-sm flex flex-col w-fit">
                    <a className="cursor-pointer hover:text-deep-blue py-2">FAQ</a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">Insights</a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">News</a>
                </div>
                <div className="text-sm flex flex-col w-fit">
                    <a className="cursor-pointer hover:text-deep-blue py-2">
                        Privacy Policy
                        <FontAwesomeIcon icon={faExternalLink} className="text-xs pl-2" />
                    </a>
                    <a className="cursor-pointer hover:text-deep-blue py-2">
                        Terms and Conditions
                        <FontAwesomeIcon icon={faExternalLink} className="text-xs pl-2" />
                    </a>
                </div>
            </div>
            <div className="w-full px-12 py-2 text-white text-sm bg-earthy-orange">
                <span>&copy; 2021 NaturaFund. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Landing;
