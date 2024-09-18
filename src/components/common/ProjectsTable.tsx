import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { normalizeCamelCase } from "@utils/extractHeader";

type ProjectsTableProps = {
    data: any[];
    ignoreData?: string[];
    projectIdField: string;
};

const ProjectsTable = ({ data, ignoreData, projectIdField }: ProjectsTableProps) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortOrder, setSortOrder] = useState("asc");

    const navigate = useNavigate();

    const handleOnClick = (projectId: string) => {
        navigate(`/project/${projectId}`);
    };

    const handleSort = (header) => {
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        const sorted = [...sortedData].sort((a, b) => {
            if (a[header] < b[header]) return newSortOrder === "asc" ? -1 : 1;
            if (a[header] > b[header]) return newSortOrder === "asc" ? 1 : -1;
            return 0;
        });
        setSortedData(sorted);
        setSortOrder(newSortOrder);
    };

    return (
        <div className="p-4 bg-white rounded-2xl">
            <table className="h-full w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        {data[0] &&
                            Object.keys(data[0]).map((header, index) => {
                                if (ignoreData?.includes(header)) return null;
                                return (
                                    <th
                                        key={header}
                                        onClick={() => handleSort(header)}
                                        className="text-left whitespace-nowrap px-4 py-2 font-medium text-gray-900 cursor-pointer"
                                    >
                                        {normalizeCamelCase(header)}
                                        <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
                                    </th>
                                );
                            })}
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 cursor-default">
                    {data[0] &&
                        sortedData.map((dataEntry, index) => (
                            <tr key={dataEntry._id}>
                                {Object.entries(dataEntry).map(([key, value], index) => {
                                    if (ignoreData?.includes(key)) return null;
                                    return (
                                        <td
                                            key={index}
                                            className="px-4 py-2 whitespace-nowrap text-gray-900"
                                        >
                                            {value}
                                        </td>
                                    );
                                })}
                                <td className="px-4 py-2 whitespace-nowrap text-gray-900">
                                    <button
                                        onClick={() => handleOnClick(dataEntry[projectIdField])}
                                        className="px-4 py-2 border-[1px] border-brand-900 rounded-lg text-white bg-brand-900 transition-all hover:bg-white hover:text-brand-900"
                                    >
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
