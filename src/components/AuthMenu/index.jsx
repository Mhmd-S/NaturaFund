import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AuthMenu = ({ items, setAuthType, alternative, title, subTitle }) => {
    
    const renderItems = () => {
        return items.map((item, index) => (
            <div
                key={index}
                className="w-full px-4 py-3 border-[1px] border-slate-200 rounded-md flex items-center cursor-pointer hover:border-brand-900"
                onClick={() => setAuthType(item.id)}
            >
                <FontAwesomeIcon icon={item.icon} />
                <p className="pl-6">{item.name}</p>
            </div>
        ));
    };

    return (
        <div className="w-full h-full grid grid-cols-1 grid-flow-row items-center justify-evenly gap-y-6 text-brand-900">
            <h3 className="text-sm text-gray-400 text-center">{title}</h3>
            <p className="text-brand-900 font-semibold">{subTitle}</p>
            {renderItems()}
            <p className="text-sm">
                {alternative.text}{" "}
                <Link
                    to={alternative.link}
                    className="text-brand-700 hover:text-brand-900 hover:underline"
                >
                    {alternative.linkText}
                </Link>
            </p>
        </div>
    );
};

export default AuthMenu;
