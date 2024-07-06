import React, { useEffect, useState } from "react";

const CarouselMobile = ({ title, items }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % Object.keys(items).length);
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    const renderIndicators = () => {
        const indicators = Object.values(items).map((item, ind) => {
            return (
                <span
                    key={item.title}
                    className={`relative flex-1 py-px rounded-lg bg-slate-600 cursor-pointer`}
                    onClick={() => setIndex(ind)}
                >
                    <span
                        className={`absolute w-full h-full rounded-lg left-0 top-0 bg-brand-500 animate-carasol_indicator ${index == ind ? "block" : "hidden"}`}
                    />
                </span>
            );
        });
        return indicators;
    };

    const renderContent = () => {
        const content = Object.values(items).map((_, ind) => {
            const item = items[ind];
            return (
                <div
                    key={item.title}
                    className={`absolute w-full h-full flex flex-col items-center transition-all ${index == ind ? "block left-0 right-0" : `${ind > index ? "left-[105%] invisible" : "right-[105%] invisible"}`}`}
                >
                    <img className="w-full rounded-b-lg mt-5" src={"./" + item.img} />
                    <h3 className="w-full text-2xl font-semibold">{item.title}</h3>
                    <div className="text-white">{item.content}</div>
                </div>
            );
        });

        return content;
    };

    return (
        <div className="w-full p-4 grid grid-cols-1 grid_flow-rows gap-4 bg-brand-900 rounded-2xl text-white md:w-1/2">
            <h2 className="w-full text-xl font-bold">{title}</h2>
            <div className="relative w-full min-h-[23rem]">{renderContent()}</div>
            <div className="w-full grid grid-flow-col grid-rows-1 gap-1 items-center">
                {renderIndicators()}
            </div>
        </div>
    );
};

export default CarouselMobile;
