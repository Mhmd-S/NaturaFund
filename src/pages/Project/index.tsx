import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Status from "@modules/ProjectModule/Status";
import RevenueGenerated from "@modules/ProjectModule/RevenueGenerated";
import Documents from "@modules/ProjectModule/Documents";
import Overview from "@modules/ProjectModule/Overview";
import InvestmentDetails from "@modules/ProjectModule/InvestmentDetails";
import FinancialDetails from "@modules/ProjectModule/FinancialDetails";
import InvestmentsReceived from "@modules/ProjectModule/InvestmentsReceived";
import BuyInvestments from "@modules/ProjectModule/BuyInvestments";

import TabbedWindow from "@components/common/TabbedWindow";

import * as projectApi from "@api/project";
import * as investmentApi from "@api/investment";

import LoadingIcon from "@components/common/LoadingIcon";

import { useAuthContext } from "@context/AuthContext";

const Project = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [investedIn, setInvestedIn] = useState(false);
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

        investmentApi.getInvestmentsByInvestor(current._id).then((data) => {
            const investments = data.data.map((investment) => investment.projectId);
            if (investments.includes(id)) {
                setInvestedIn(true);
            }
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
            case "Buy Investments":
                return <BuyInvestments project={project} />;
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
            "Buy Investments",
        ];

        // If user is owner of the project
        if (project.ownedBy._id == current._id) {
            const newTabs = tabs.slice(0, 5).concat(["Investments Received"]);
            return newTabs;
        } else if (
            project.status.current == "Electricity Generated" &&
            investedIn // If the user has invested in the project
        ) {
            return tabs;
        } else if (project.status.current == "Funding") {
            return tabs.slice(0, 5).concat(["Buy Investments"]);
        } else {
            return tabs.slice(0, 6);
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
