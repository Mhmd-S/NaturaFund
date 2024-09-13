import React from "react";

import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";

import CompanyInformationForm from "@forms/Onboard/company/CompanyInformationForm";
import RepresentativeForm from "@forms/Onboard/company/RepresentativeForm";

import ResultPage from "@modules/OnboardModule/ResultPage";

import { faCheck, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";
import ProofOfAddress from "@forms/Onboard/ProofOfAddress";

const RESULTS = {
    pending: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Onboard <span className="text-orange-600 capitalize">Pending</span>
            </h1>
        ),
        description:
            "Your documents have been submitted successfully. Our team will review them shortly.",
        icon: faPause,
        buttonText: "Go To Dashboard",
        onclick: () => alert("Go To Dashboard"),
    },
    approved: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Onboard <span className="text-brand-800 capitalize">Approved</span>
            </h1>
        ),
        description: "Congratulations! Your identity has been successfully verified.",
        icon: faCheck,
        buttonText: "Go To Dashboard",
        onclick: () => alert("Go To Dashboard"),
    },
    rejected: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Onboard <span className="text-pink-800 capitalize">Rejected</span>
            </h1>
        ),
        description:
            "We're sorry, but your identity Onboard has been rejected. Please review your documents and try again.",
        icon: faTimes,
        buttonText: "Try Again",
        onclick: () => alert("Try Again"),
    },
};

const VerficationFormCompany = () => {
    const { stage } = useOnboardContext();

    const renderStep = () => {
        switch (stage) {
            case 0:
                return <CompanyInformationForm />;
            case 1:
                return <RepresentativeForm />;
            case 2:
                return <ProofOfAddress />;
            case 3:
                return <ResultPage {...RESULTS.approved} />;
            default:
                return <ResultPage {...RESULTS.pending} />;
        }
    };
    return renderStep();
};

export default VerficationFormCompany;
