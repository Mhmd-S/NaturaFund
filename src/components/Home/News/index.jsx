import React from "react";
import NewsItem from "@/components/common/NewsItem";

const items = [
    {
        title: "Title 1",
        content: "Content 1",
        date: "Date 1",
    },
    {
        title: "Title 2",
        content: "Content 2",
        date: "Date 2",
    },
    {
        title: "Title 3",
        content: "Content 3",
        date: "Date 3",
    },
    {
        title: "Title 4",
        content: "Content 4",
        date: "Date 4",
    },
    {
        title: "Title 5",
        content: "Content 5",
        date: "Date 5",
    },
]

const News = () => {
    return (
        <div className="w-full h-full p-4 grid grid-rows-[10%_90%]">
            <p className="text-sm">News</p>
            <div className="w-full h-full py-1 overflow-y-auto flex flex-col pr-2">
               {items.map((item, index) => (
                    <NewsItem key={index} newsItem={item} />
                ))    
            }
            </div>
        </div>
    );
};

export default News;
