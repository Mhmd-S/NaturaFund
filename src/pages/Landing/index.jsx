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
        <div className="relative px-4 w-full h-full flex flex-col items-center gap-y-16 overflow-x-hidden">
            <NavBar />
            <div className="h-fit flex flex-col text-brand-800 md:grid md:grid-flow-row md:grid-cols-2 md:gap-2">
                <h1 className="py-4 text-4xl font-bold md:text-5xl md:row-start-1">
                    Earn returns while striving for a sustainable future
                </h1>
                <div className="w-full md:row-start-2 md:col-start-1">
                    <p className="mt-2 pt-3 text-brand-800 text-md md:row-start-2">
                        <FontAwesomeIcon icon={faCheck} className="mr-4 text-sm" />
                        Buy solar panels in rooftop projects
                    </p>
                    <p className="pt-3 text-brand-800 text-md md:row-start-3">
                        <FontAwesomeIcon icon={faCheck} className="mr-4 text-sm" />
                        Earn 10-13% returns from electricity your panels generate
                    </p>
                    <p className="pt-3 text-brand-800 text-md md:row-start-4">
                        <FontAwesomeIcon icon={faCheck} className="mr-4 text-sm" />
                        Vested takes care of the installation and maintenance of your panels
                    </p>
                </div>
                <button className="w-2/5 my-5 rounded-md transition-all bg-brand-800 p-2 border-2 text-white hover:text-brand-800    md:col-start-1 md:align-self-center md:transition-all md:hover:bg-white md:border-brand-800">
                    Sign Up Now
                </button>
                <img src="landing_1.svg" className="md:row-start-1 md:row-span-3 md:col-start-2" />
            </div>
            {isMobile ? <CarouselMobile items={items} /> : <CarouselDesktop items={items} />}
            <StepByStepGuide />
        </div>
    );
};

export default Landing;
