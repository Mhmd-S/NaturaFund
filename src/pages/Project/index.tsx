import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Status from "@modules/ProjectModule/Status";
import RevenueGenerated from "@modules/ProjectModule/RevenueGenerated";
import Documents from "@modules/ProjectModule/Documents";
import Overview from "@modules/ProjectModule/Overview";
import InvestmentDetails from "@modules/ProjectModule/InvestmentDetails";
import FinancialDetails from "@modules/ProjectModule/FinancialDetails";
import InvestmentsReceived from "@modules/ProjectModule/InvestmentsReceived";

import TabbedWindow from "@components/common/TabbedWindow";

import * as projectApi from "@api/project";
import LoadingIcon from "@components/common/LoadingIcon";

import { useAuthContext } from "@context/AuthContext";

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentTab, setCurrentTab] = useState("Overview");

    const { state } = useAuthContext();

    const { current } = state;

    useEffect(() => {
        // Get the project data from the API
        projectApi
            .getProject(id)
            .then((data) => {
                setProject(data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching project data:", error);
                setLoading(false);
            });
    }, [id]);

    const renderTab = () => {
        switch (currentTab) {
            case "Overview":
                return <Overview project={project} />;
            case "Investment Details":
                return <InvestmentDetails investment={project.investmentDetails} />;
            case "Financial Details":
                return <FinancialDetails finance={project.financialDetails} />;
            case "Documents":
                return <Documents legal={project.documents} />;
            case "Status":
                return <Status status={project.status} />;
            case "Revenue Generated":
                return <RevenueGenerated />;
            case "Investments Received": // Only displayed to the orgainsers
                return <InvestmentsReceived />;
            default:
                return <Overview project={project} />;
        }
    };

    const tabsToDisplay = () => {
        const tabs = [
            "Overview",
            "Investment Details",
            "Financial Details",
            "Status",
            "Documents",
            "Revenue Generated",
        ];

        if (project.ownedBy._id == current._id) {
            const newTabs = tabs.slice(0, 5).concat(["Investments Received"]);
            return newTabs;
        } else if (project.status.current == "Electricity Generated" && current?.investments.includes(project._id)) {
            return tabs;
        } else {
            return tabs.slice(0, 5);
        }
    };

    return (
        <>
            {loading ? (
                <LoadingIcon />
            ) : (
                <TabbedWindow
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    tabs={tabsToDisplay()}
                >
                    <div className="grid grid-cols-2 gap-10">{renderTab()}</div>
                </TabbedWindow>
            )}
        </>
    );
};

export default Project;
