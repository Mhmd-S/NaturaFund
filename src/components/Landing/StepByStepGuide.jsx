import React from "react";
import MultiStepGuide from "@/components/MultiStepGuide/MultiStepGuideMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faListCheck,
    faBold,
    faChartSimple,
    faIndustry,
    faGears,
    faPlugCircleBolt,
    faSolarPanel,
    faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const items = [
    {
        title: "Sourcing solar projects",
        paragraph:
            "Vested identifies organizations such as corporates, schools or hospitals that want to install solar plants. We do lengthy due diligence on each project:",
        subpoints: [
            {
                icon: (
                    <FontAwesomeIcon
                        icon={faListCheck}
                        className="p-2 w-6 h-6 rounded-full bg-brand-100"
                    />
                ),
                text: "Each site is evaluated on 12+ technical parameters including sunlight exposure, available space for installation, shadow effect, and annual weather conditions ",
            },
            {
                icon: (
                    <FontAwesomeIcon
                        icon={faPlugCircleBolt}
                        className="p-2 w-6 h-6 rounded-full bg-brand-100"
                    />
                ),
                text: "The power consumption of the end consumer is evaluated to ensure that the project is viable for both investors and the organization",
            },
            {
                icon: (
                    <FontAwesomeIcon
                        icon={faChartSimple}
                        className="p-2 w-6 h-6 rounded-full bg-brand-100"
                    />
                ),
                text: "Feasible projects are planned in detail and listed on Vested for investor consideration",
            },
        ],
        img: "landing_guide_1.svg",
    },
    {
        title: "Buying Solar Panels",
        paragraph:
            "Each solar project’s funding needs are determined by the number of panels required. You can diversify into solar by buying one or multiple solar panels. The panels you purchase are leased back to Vested for installing and operating the solar plant. The cost of a single panel listed on Vested typically includes:.",
        subpoints: [
            {
                icon: (
                    <FontAwesomeIcon
                        icon={faIndustry}
                        className="p-2 w-6 h-6 rounded-full bg-brand-100"
                    />
                ),
                text: "The manufacturing cost of the panel ",
            },
            {
                icon: (
                    <FontAwesomeIcon
                        icon={faGears}
                        className="p-2 w-6 h-6 rounded-full bg-brand-100"
                    />
                ),
                text: "Upfront cost of installation of the solar panels and getting the project started  ",
            },
        ],
        img: "landing_guide_2.svg",
    },
    {
        title: "Solar project installation",
        paragraph:
            "Post full funding, it takes up to 3 months to bring the project to life. Once operational, the organization starts receiving sustainable clean energy and investors start earning returns on their original investment.",
        subpoints: [],
        img: "landing_1.svg"
    },
    {
        title: "Earn returns",
        paragraph:
            "Experience the benefits of your asset-backed investment with regular updates and attractive returns. We provide daily & monthly performance updates on the:",
        subpoints: [
            {
                icon: (
                    <FontAwesomeIcon
                        icon={faSolarPanel}
                        className="p-2 w-6 h-6 rounded-full bg-brand-100"
                    />
                ),
                text: "Solar energy generated by the project",
            },
            {
                icon: (
                    <FontAwesomeIcon
                        icon={faDollarSign}
                        className="p-2 w-6 h-6 rounded-full bg-brand-100"
                    />
                ),
                text: "Income generated by the project",
            },
        ],
        img: "landing_guide_4.svg",
    },
];

const StepByStepGuide = () => {
    return <MultiStepGuide title="How It Works" items={items} />;
};

export default StepByStepGuide;
