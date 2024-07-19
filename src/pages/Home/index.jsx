import React from "react";
import Revenue from "@/components/Home/RevenueCHart";
import Portfolio from "@/components/Home/PortfolioChart";
import Projects from "@/components/Home/Projects";
import News from "@/components/Home/News";

const Home = () => {
    return (
        <div className="w-full h-full overflow-hidden grid grid-cols-[65%_35%] grid-rows-2 gap-[2px] bg-gray-100 [&>*]:bg-white">
            <Revenue />
            <Portfolio />
            <Projects />
            <News />
        </div>
    );
};

export default Home;
