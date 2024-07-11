import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLeaf,
    faHome,
    faSolarPanel,
    faUser,
    faCog,
    faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const index = () => {
    return (
        <div>
            <Link
                to="/"
                className="flex items-center font-serif text-brand-800 text-3xl cursor-pointer md:text-5xl md:border-r-brand-800 md:text-white"
            >
                <FontAwesomeIcon
                    icon={faLeaf}
                    className="mr-3 rounded-md bg-brand-800 text-white md:bg-white md:text-brand-800 p-2"
                />
                NaturaFund
            </Link>
        </div>
    );
};

export default index;
