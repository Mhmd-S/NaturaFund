import React from "react";
import useNav from "@/components/Nav/hooks/useNav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    const { renderNavItems } = useNav();

    return (
        <div className="w-48 h-screen flex flex-col items-center gap-y-8 bg-[#F1F2F7]">
            <Link
                to="/"
                className="w-full py-2 flex items-center justify-center font-serif text-brand-800 text-xl border-b-[1px] border-[#C8CBD9] cursor-pointer md:text-xl md:border-r-brand-800"
            >
                <FontAwesomeIcon
                    icon={faLeaf}
                    className="mr-1 rounded-md text-white md:text-brand-800 p-2"
                />
                <span>NaturaFund</span>
            </Link>
            <ul className="flex flex-col gap-y-8 text-sm text-[#A6ABC8]">{renderNavItems()}</ul>
        </div>
    );
};

export default Nav;
