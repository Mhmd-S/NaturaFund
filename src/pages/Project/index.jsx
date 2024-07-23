import React, { useState } from "react";
import TabNav from "@/components/TabNav";
import DetailsTable from "@/components/common/DetailsTable";
import Overview from "@/components/common/ProjectDetails/Overview";

const tabs = ["overview", "Investment Details", "Financial Details", "Documents", "Updates"];

const project = {
    name: "Aventura Solar Farms @ Penang",
    description:
        "A 10MW solar farm located in Penang, Malaysia. The project is expected to generate 10,000 MWh of clean energy annually. The project is expected to reduce 5,000 tons of CO2 emissions annually.",
    owner: {
        name: "Green Energy Sdn Bhd",
        website: "https://example.com",
        description:
            "Green Energy is a Dutch company founded in 2016, situated in Gouda. It provides an affordable and hassle-free solution for homeowners to generate and store their own sustainable energy. Green Energy already leases solar panels to some 13.000 private homeowners and has now started to lease out home battery systems to their customers, making the switch to renewable energy accessible to a wide audience. Thanks to the lease proposition offered, customers get the benefits of (trading with) self-stored energy without having to make a big investment upfront.",
        "Company Name": "Green Energt Sdn Bhd",
        "Managing Team": "Jonas Streng, Robert Lamot and Kees van Wensem",
        "Business ID": "68693921",
        "Founding Year": "2016",
        Address: "Persiaran 1, Subang Jaya, Selangor, Malaysia",
        "Employees Num": "300",
    },
    duration: "2024-2025",
    type: "Solar",
    investment: {
        type: "Bond",
        details: {
            "Bond Type": "Green Bond",
            "Face Value": "RM 1,000",
            "Issued Date": "2024-01-01",
            "Maturity Date": "2025-01-01",
            "Coupuon Rate": "5%",
            "Copoun Frequency": "Quarterly",
            "Redemption Terms": "Bullet",
            "Bond Rating": "AAA",
            Secured: "Yes",
            Callability: "No",
            "Liquidation Preference": "Senior",
        },
    },
    finance: {
        timeline: {
            "Construction Start": "2024-01-01",
            COD: "2024-12-31",
            "Payout Start": "2025-01-01",
        },
        useOfProceeds: {
            Construction: "80%",
            "Working Capital": "20%",
        },
        projections: {
            revenueForcast: {
                "Year 1": "RM 10,000",
                "Year 2": "RM 20,000",
                "Year 3": "RM 30,000",
                "Year 4": "RM 40,000",
                "Year 5": "RM 50,000",
            },
            probabilityMetrics: {
                NPV: {
                    "Base Case": "RM 100,000",
                    Downside: "RM 50,000",
                    Upside: "RM 150,000",
                },
                IRR: {
                    "Base Case": "5%",
                    Downside: "3%",
                    Upside: "7%",
                },
            },
            breakEven: {
                Year: "3",
                IRR: "5%",
            },
        },
        allocation: {
            "Construction Cost": "RM 100,000",
            "Working Capital": "RM 20,000",
        },
        riskAnalysis: {
            "Market Risk": "Low",
            "Technology Risk": "Medium",
            "Regulatory Risk": "High",
        },
    },
    legal: {
        prospectus: "https://example.com/prospectus.pdf",
        bondIndenture: "https://example.com/bond-indenture.pdf",
        terms: "https://example.com/terms.pdf",
    },
    metrics: {
        enviromentImpactAssessments: "https://example.com/eia.pdf",
        sustainabilityReport: "https://example.com/sustainability-report.pdf",
    },
};

const Project = () => {
    const [currentTab, setCurrentTab] = useState("overview");

    const renderDetail = () => {
        switch (currentTab) {
            case "overview":
                return <Overview project={project} />;
            case "Investment Details":
                return (
                    <DetailsTable title="Investment Details" items={project.investment.details} />
                );
            case "Financial Details":
                return <DetailsTable items={project.finance} />;
            case "Documents":
                return <DetailsTable items={project.legal} />;
            case "Updates":
                return <DetailsTable items={project.metrics} />;
            default:
                return <Overview project={project} />;
        }
    };

    return (
        <div className="w-full overflow-y-auto flex flex-col items-center pt-4">
            <TabNav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <section className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {renderDetail()}
            </section>
        </div>
    );
};

export default Project;
