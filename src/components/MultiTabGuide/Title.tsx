import React from "react";

const Title = ({ title, ind }) => {
    return (
        <h3 className="text-lg text-brand-800 md:text-3xl md:row-start-1 md:col-start-1">
            <span>{"0" + (ind + 1) + ". | "}</span>
            <span className="text-brand-900 font-bold">{title}</span>
        </h3>
    );
};

export default Title;
