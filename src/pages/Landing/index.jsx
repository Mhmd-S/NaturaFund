import React from "react";
import NavBar from "@/components/Landing/NavBar";
import useResponsive from "@/hooks/useResponsive";
import CarouselMobile from "@/components/SlidingCarousel/CarouselMobile";
import CarouselDesktop from "@/components/SlidingCarousel/CarouselDesktop";
import StepByStepGuide from "@/components/Landing/StepByStepGuide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight, faExternalLink, faCheck } from "@fortawesome/free-solid-svg-icons";

const items = [
    {
        title: "Financial Benefits",
        content: "Investing in renewable energy projects can provide attractive financial returns.",
        img: "landing_carousel_1.svg",
    },
    {
        title: "Environmental Impact",
        content:
            "Investing in renewable energy projects allows you to contribute to a sustainable future.",
        img: "landing_carousel_2.svg",
    },
    {
        title: "Diversification",
        content: "Renewable energy projects in allows you to diversify your portofolio.",
        img: "landing_carousel_3.svg",
    },
];

const Landing = () => {
    const { isMobile } = useResponsive();

    return (
        <div className="relative px-4 w-full h-full flex flex-col items-center overflow-x-hidden md:px-12">
            <NavBar />
            <div className="h-[45rem] mt-6 flex flex-col text-brand-800 md:pb-20 md:grid md:grid-rows-[20%_10%_10%_10%_10%] md:grid-cols-2 md:gap-2">
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
            {isMobile ? <CarouselMobile items={items} /> : <CarouselDesktop items={items} />}
            <StepByStepGuide />
        </div>
    );
};

export default Landing;
