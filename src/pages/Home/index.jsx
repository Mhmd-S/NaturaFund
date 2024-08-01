import React from "react";
import Revenue from "@/modules/Home/RevenueCHart";
import Portfolio from "@/modules/Home/PortfolioChart";
import Projects from "@/modules/Home/Projects";
import News from "@/modules/Home/News";

const Home = () => {
    return (
        <div className="w-full h-full overflow-hidden flex flex-col gap-[1px] bg-gray-100 [&>*]:bg-white">
            <h2 className="text-3xl text-brand-800 font-bold">
                Good Afternoon, User
            </h2>
            <Revenue />
            <Portfolio />
            <Projects />
            <News />
        </div>
    );
};

export default Home;
