import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import index from ".";

const headerData = ["Name", "Project Type", "Investment Type", "Status", "Generated Revenue"];

const dummyData = [
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
    {
        name: "Solaris Solar Project",
        projectType: "Solar",
        investmentType: "Debt",
        status: "Active",
        generatedRevenue: "$120,000",
    },
];

const ProjectsTable = () => {
    return (
        <div className="p-4 bg-white rounded-2xl">
            <table className="w-full divide-y-2 divide-gray-200 text-sm">
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
                                <button className="px-4 py-2 border-[1px] border-brand-900 rounded-lg text-white bg-brand-900 transition-all hover:bg-white hover:text-brand-900">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProjectsTable;
