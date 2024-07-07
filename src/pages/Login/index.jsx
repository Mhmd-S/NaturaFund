import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const index = () => {
    return (
        <div className="w-full flex flex-col">
            <h1 className="h-fit pt-3 font-serif text-brand-800 text-xl md:py-2 md:flex md:items-center md:text-3xl md:border-r-[1px] md:border-r-brand-800 md:px-6">
                NaturaFund
                <FontAwesomeIcon icon={faLeaf} className="ml-3" />
            </h1>
            <h2>
              Welcome back to NaturaFund
            </h2>
            <p>
              Signup to create an account with us
            </p>
            <h3>
              Login
            </h3>
        </div>
    );
};

export default index;
