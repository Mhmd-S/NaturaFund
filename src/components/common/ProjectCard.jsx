import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faHandHoldingDollar,
    faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
    return (
        <a href="#" className="block rounded-lg p-3 shadow-md shadow-brand-100 transition-shadow hover:shadow-lg">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-20 w-full rounded-md object-cover"
            />

            <div className="mt-2">
                <dl>
                    <div>
                        <dt className="sr-only">Name</dt>

                        <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
                    </div>

                    <div>
                        <dt className="sr-only">By</dt>

                        <dd className="text-sm text-gray-500">Invested: $240,000</dd>
                    </div>
                </dl>

                <div className="mt-6 flex items-center gap-8 text-xs">
                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <FontAwesomeIcon icon={faClock} className="size-4 text-indigo-700" />
                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Duration</p>

                            <p className="font-medium">4 Years</p>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <FontAwesomeIcon icon={faHandHoldingDollar} className="size-4 text-indigo-700" />
                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">Invetment</p>

                            <p className="font-medium">RESCO</p>
                        </div>
                    </div>

                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <FontAwesomeIcon icon={faMoneyBillTrendUp} className="size-4 text-indigo-700" />
                        <div className="mt-1.5 sm:mt-0">
                            <p className="text-gray-500">XIRR</p>

                            <p className="font-medium">5%</p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
