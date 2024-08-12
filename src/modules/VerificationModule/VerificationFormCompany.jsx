import React from "react";

import useVerificationContext from "@/modules/VerificationModule/context/useVerificationContext";

import CompanyInformationForm from "@/forms/Verification/company/CompanyInformationForm";
import ProofOfIdentity from "@/forms/Verification/ProofOfIdentity";
import ProofOfAddress from "@/forms/Verification/ProofOfAddress";

import ResultPage from "@/modules/VerificationModule/ResultPage";

import { faCheck, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";
import RepresentativeForm from "@/forms/Verification/company/RepresentativeForm";
import RepresentativeProofForm from "@/forms/Verification/company/RepresentativeProofForm";

const RESULTS = {
    pending: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Verification <span className="text-orange-600 capitalize">Pending</span>
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
                Verification <span className="text-brand-800 capitalize">Approved</span>
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
                Verification <span className="text-pink-800 capitalize">Rejected</span>
            </h1>
        ),
        description:
            "We're sorry, but your identity verification has been rejected. Please review your documents and try again.",
        icon: faTimes,
        buttonText: "Try Again",
        onclick: () => alert("Try Again"),
    },
};

const VerficationFormCompany = () => {
    const { stage } = useVerificationContext();

    const renderStep = () => {
        switch (stage) {
            case 0:
                return <CompanyInformationForm />;
            case 1:
                return <RepresentativeForm />;
            case 2:
                return <RepresentativeProofForm />;
            case 3:
                return <ResultPage {...RESULTS.approved} />;
            default:
                return <ResultPage {...RESULTS.pending} />;
        }
    };
    return renderStep();
};

export default VerficationFormCompany;