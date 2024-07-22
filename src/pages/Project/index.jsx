import React, { useState } from "react";
import TabNav from "@/components/TabNav";
import DetailsTable from "@/components/common/DetailsTable";

const tabs = ["overview", "Investment Details", "Financial Details", "Documents", "Updates"];

const project = {
    name: "Aventura Solar Farms @ Penang",
    owner: {
        name: "Green Energy Sdn Bhd",
        website: "https://example.com",
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
    project: {
        description:
            "Aventura Solar Farms is a 50MW solar farm located in Penang, Malaysia. The project is expected to generate 80,000 MWh of clean energy annually.",
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

    return (
        <div className="w-full overflow-y-auto flex flex-col items-center pt-4">
            <TabNav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />

            <section>
                <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                                className="absolute inset-0 h-full w-full object-cover rounded-lg"
                            />
                        </div>

                        <div className="lg:py-8">
                            <h2 className="text-3xl py-4 font-bold sm:text-4xl">{project.name}</h2>
                            <h3>{project.duration}</h3>
                            <article className="space-y-4 text-gray-600">
                                <p>
                                    By: <strong>{project.owner}</strong>
                                </p>
                                <p>{project.description}</p>
                            </article>
                        </div>

                        <DetailsTable items={project.investment.details} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
