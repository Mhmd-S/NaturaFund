import React, { useState } from "react";
import TabNav from "@/components/TabNav";
import Documents from "@/components/ProjectDetails/Documents";
import Overview from "@/components/ProjectDetails/Overview";
import InvestmentDetails from "@/components/ProjectDetails/InvestmentDetails";
import FinancialDetails from "@/components/ProjectDetails/FinancialDetails";
import Status from "@/components/ProjectDetails/Status";
import RevenueGenerated from "@/components/ProjectDetails/RevenueGenerated";

const tabs = ["overview", "Investment Details", "Financial Details", "Status", "Documents", "Revenue Generated"];

const project = {
    name: "Aventura Solar Farms @ Penang",
    description:
        "A 10MW solar farm located in Penang, Malaysia. The project is expected to generate 10,000 MWh of clean energy annually. The project is expected to reduce 5,000 tons of CO2 emissions annually.",
    status: {
        current: "Electricity Generated",
        description:
            "The project is currently under construction and is expected to be completed by the end of 2024.",
    },
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
        description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione dolo eligendi, optio doloremque earum laudantium? Optio obcaecati voluptas natuconsequatur? Iusto sequi recusandae eligendi modi doloribus aspernatur officisuscipit at. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel id quidem odit nostrum nisi, commodi numquam fugiat modi quaerat. Doloribus corporis dolore blanditiis eos quidem delectus, itaque soluta. Perspiciatis, nihil? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate, facilis accusamus molestiae culpa quasi quod magni quam, tempora aperiam ipsa excepturi laborum voluptates est, itaque nesciunt iste! Ut, atqueLorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo ipsa voluptate tempora laudantium. Rem, ullam, alias dolores deserunt neque odit, eum possimus fuga perspiciatis eius consectetur? Tempore, fugiat rerumLorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque alias aliquid sint omnis ducimus, quam impedit consequatur quo voluptatum quibusdam nihil ad aut vero necessitatibus, ipsam at rem reprehenderit doloribus.",
        features: {
            "Bond Type": "Green Bond",
            "Face Value": "RM 1,000",
            "Issued Date": "2024-01-01",
            "Maturity Date": "2025-01-01",
            "Coupuon Rate": "5%",
            "Copoun Frequency": "Quarterly",
            "Redemption Terms": "Bullet",
            "Bond Rating": "AAA (from S&P)",
            collateral: "None",
            "Priority of Claims": "Senior",
            Seniority: "Senior",
            "Call/Put Options": "None",
            "Tax Implecations": "Interest is taxable",
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
            revenueForecast: {
                "Year 1": "RM 10,000",
                "Year 2": "RM 20,000",
                "Year 3": "RM 30,000",
                "Year 4": "RM 40,000",
                "Year 5": "RM 50,000",
            },
            profitabilityMetrics: {
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
                return <InvestmentDetails investment={project.investment} />;
            case "Financial Details":
                return <FinancialDetails finance={project.finance} />;
            case "Documents":
                return <Documents legal={project.legal} />;
            case "Status":
                return <Status status={project.status} />;
                case "Revenue Generated":
                    return <RevenueGenerated />;
            default:
                return <Overview project={project} />;
        }
    };

    return (
        <div className="w-full overflow-y-auto flex flex-col items-center pt-4">
            <TabNav tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div className="px-12 my-20 grid grid-cols-2 gap-16">
                {renderDetail()}
            </div>
        </div>
    );
};

export default Project;
