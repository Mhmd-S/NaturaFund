import React from "react";
import MultiStepGuide from "@/components/MultiStepGuide/MultiStepGuideMobile";

const items = [
    {
        title: "Sourcing fa-house projects",
        paragraph: "We source fa-house projects from developers, EPCs, and other project owners.",
        subpoints: [
            {
                iconName: "fa-house",
                text: "We source fa-house projects from developers, EPCs, and other project owners.",
            },
            {
                iconName: "fa-house",
                text: "We source fa-house projects from developers, EPCs, and other project owners.",
            },
            {
                iconName: "fa-house",
                text: "We source fa-house projects from developers, EPCs, and other project owners.",
            },
        ],
    },
    {
        title: "Evaluating fa-house projects",
        paragraph:
            "We evaluate fa-house projects based on their technical, financial, and legal aspects.",
        subpoints: [
            {
                iconName: "fa-house",
                text: "We evaluate fa-house projects based on their technical, financial, and legal aspects.",
            },
            {
                iconName: "fa-house",
                text: "We evaluate fa-house projects based on their technical, financial, and legal aspects.",
            },
            {
                iconName: "fa-house",
                text: "We evaluate fa-house projects based on their technical, financial, and legal aspects.",
            },
        ],
    },
    {
        title: "Acquiring fa-house projects",
        paragraph: "We acquire fa-house projects that meet our investment criteria.",
        subpoints: [
            {
                iconName: "fa-house",
                text: "We acquire fa-house projects that meet our investment criteria.",
            },
            {
                iconName: "fa-house",
                text: "We acquire fa-house projects that meet our investment criteria.",
            },
            {
                iconName: "fa-house",
                text: "We acquire fa-house projects that meet our investment criteria.",
            },
        ],
    },
    {
        title: "Operating fa-house projects",
        paragraph: "We operate fa-house projects to maximize their performance and returns.",
        subpoints: [
            {
                iconName: "fa-house",
                text: "We operate fa-house projects to maximize their performance and returns.",
            },
            {
                iconName: "fa-house",
                text: "We operate fa-house projects to maximize their performance and returns.",
            },
            {
                iconName: "fa-house",
                text: "We operate fa-house projects to maximize their performance and returns.",
            },
        ],
    },
];

const StepByStepGuide = () => {
    return <MultiStepGuide title="How It Works" items={items} />;
};

export default StepByStepGuide;
