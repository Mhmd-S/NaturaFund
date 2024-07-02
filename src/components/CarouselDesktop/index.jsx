import React, { useEffect, useState } from "react";

const CarouselDesktop = ({ items }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % Object.keys(items).length);
        }, 4000);
        return () => clearInterval(interval);
    }, [index]);

    const renderContent = () => {
        const content = Object.values(items).map((_, ind) => {
            const item = items[ind];
            return (
                <div
                    key={item.title}
                    className={`w-fit grid grid-cols-[10%_90%] grid-row-3 items-center transition-all ${index == ind ? "h-full opacity-100" : "opacity-80 h-fit py-2"}`}
                >
                    <span
                        key={item.title}
                        className={`relative w-fit h-full row-start-1 row-span-5 pl-1 rounded-lg bg-brand-100 cursor-pointer`}
                        onClick={() => setIndex(ind)}
                    >
                        <span
                            className={`absolute w-full h-full rounded-lg left-0 top-0 bg-brand-500 animate-carasol_indicator_5s_ease_in ${index == ind ? "block" : "hidden"}`}
                        />
                    </span>
                    <h2>{"0" + (ind + 1)}</h2>
                    <h3 className="w-full col-start-2 text-2xl font-semibold">{item.title}</h3>
                    <div className={`text-white col-start-2 ${index == ind ? "block" : "hidden"}`}>
                        {item.content}
                    </div>
                </div>
            );
        });

        return content;
    };

    const renderImage = () => {
        const images = Object.values(items).map((_, ind) => {
            const item = items[ind];
            return (
                <img
                    key={item.title}
                    className={`absolute w-full h-full rounded-lg ${index == ind ? "block top-auto bottom-auto" : `${ind > index ? "top-[105%] invisible" : "bottom-[105%] invisible"}`}`}
                    src={"./" + item.img}
                />
            );
        });

        return images;
    };

    return (
        <div className="w-5/6 h-[30rem] p-8 grid grid-cols-2 grid-flow-row gap-4 bg-brand-800 rounded-2xl text-white">
            <h2 className="w-full text-4xl font-bold row-start-1 col-start-1">
                How Invest With Us?
            </h2>
            <div className="w-full h-full grid grid-flow-row grid-cols-1 justify-center col-start-1 row-start-2 row-span-3 ">
                {renderContent()}
            </div>
            <div className="relative w-full h-full flex items-center justify-center col-start-2 row-start-1 row-span-4">
                {renderImage()}
            </div>
        </div>
    );
};

export default CarouselDesktop;
