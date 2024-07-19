import React from "react";
import Revenue from "@/components/Home/RevenueCHart";
import Portfolio from "@/components/Home/PortfolioChart";
import Projects from "@/components/Home/Projects";
import News from "@/components/Home/News";

const Home = () => {
    return (
        <div className="w-full h-full p-2 grid grid-cols-[65%_35%] grid-rows-2">
            <Revenue />
            <Portfolio />
            <Projects />
            <News />
        </div>
    );
};

export default Home;
