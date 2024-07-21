import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import index from ".";

const headerData = [
    "Name",
    "Project Type",
    "Investment Type",
    "Status",
    "Generated Revenue",
];

const dummyData = [
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    // {
    //     name: "Solaris Solar Project",
    //     projectType: "Solar",
    //     investmentType: "Debt",
    //     status: "Active",
    //     generatedRevenue: "$120,000",
    // },
    // {
    //     name: "Solaris Solar Project",
    //     projectType: "Solar",
    //     investmentType: "Debt",
    //     status: "Active",
    //     generatedRevenue: "$120,000",
    // },
    // {
    //     name: "Solaris Solar Project",
    //     projectType: "Solar",
    //     investmentType: "Debt",
    //     status: "Active",
    //     generatedRevenue: "$120,000",
    // },
    // {
    //     name: "Solaris Solar Project",
    //     projectType: "Solar",
    //     investmentType: "Debt",
    //     status: "Active",
    //     generatedRevenue: "$120,000",
    // },
    // {
    //     name: "Solaris Solar Project",
    //     projectType: "Solar",
    //     investmentType: "Debt",
    //     status: "Active",
    //     generatedRevenue: "$120,000",
    // },
    //   {
    //       name: "Solaris Solar Project",
    //       projectType: "Solar",
    //       investmentType: "Debt",
    //       status: "Active",
    //       generatedRevenue: "$120,000",
    //   },
];

const ProjectsTable = () => {
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div className="overflow-x-auto rounded-t-lg">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead>
                        <tr>
                            {headerData.map((header, index) => {
                                return (
                                    <th
                                        key={index}
                                        className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900 cursor-pointer"
                                    >
                                        {header}
                                        <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 cursor-default">
                        {dummyData.map((data, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 whitespace-nowrap text-brand-900">
                                    {data.name}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                                    {data.projectType}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                                    {data.investmentType}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                                    {data.status}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                                    {data.generatedRevenue}
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                                    <button className="px-4 py-2 border-[1px] border-brand-900 rounded-lg text-white bg-brand-900 transition-all hover:bg-white hover:text-brand-900">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="rounded-b-lg border-t border-gray-200 px-4 pt-2">
                <ol className="flex justify-end gap-1 text-xs font-medium">
                    <li>
                        <a
                            href="#"
                            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            1
                        </a>
                    </li>

                    <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                        2
                    </li>

                    <li>
                        <a
                            href="#"
                            className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default ProjectsTable;
