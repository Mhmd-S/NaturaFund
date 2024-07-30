import React from "react";
import Revenue from "@/modules/Home/RevenueCHart";
import Portfolio from "@/modules/Home/PortfolioChart";
import Projects from "@/modules/Home/Projects";
import News from "@/modules/Home/News";

const Home = () => {
    return (
        <div className="w-full h-full overflow-hidden grid grid-cols-[65%_35%] grid-rows-2 gap-[1px] bg-gray-100 [&>*]:bg-white">
            <Revenue />
            <Portfolio />
            <Projects />
            <News />
        </div>
    );
};

export default Home;
