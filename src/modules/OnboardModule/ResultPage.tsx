import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthContext } from "@context/AuthContext";
import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";
import { faCheck, faPause, faTimes } from "@fortawesome/free-solid-svg-icons";
import * as kycApi from "@api/kyc";
import LoadingIcon from "@components/common/LoadingIcon";

// Has three modes: success, failed and pending

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
    },
    verified: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Verification <span className="text-brand-800 capitalize">Approved</span>
            </h1>
        ),
        description: "Congratulations! Your identity has been successfully verified.",
        icon: faCheck,
    },
    rejected: {
        title: (
            <h1 className="text-3xl font-semibold mt-4">
                Verification <span className="text-pink-800 capitalize">Rejected</span>
            </h1>
        ),
        description:
            "We're sorry, but your onboard has been rejected. Please review your documents and try again.",
        icon: faTimes,
        buttonText: "Try Again",
    },
};

const ResultPage = () => {
    const { state } = useAuthContext();
    const { setStage } = useOnboardContext();
    const { verified } = state.current;
    const { title, description, icon, buttonText } = RESULTS[verified];

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        if (verified == "rejected") {
            setLoading(true);
            kycApi.getKycDetails(state.current._id).then((data) => {
                setMessage(data.reason);
            });
            setLoading(false);
        }
    }, []);

    return (
        <div className="min-h-screen col-span-2 place-self-center w-max flex flex-col justify-center items-center gap-5">
            {loading ? (
                <div className="w-full h-full flex items-center justify-center">
                    <LoadingIcon />
                </div>
            ) : (
                <>
                    <div className="flex items-center justify-center size-24 rounded-full bg-brand-100">
                        <FontAwesomeIcon icon={icon} className="text-brand-800 text-3xl" />
                    </div>
                    <h2>{title}</h2>
                    <p className="text-lg text-center text-gray-800">
                        {message ? message : description}
                    </p>
                    {buttonText && (
                        <button
                            onClick={() => setStage(0)}
                            className="p-2 text-white bg-brand-800 border-2 border-brand-800 rounded-md transition-colors hover:text-brand-800 hover:bg-white"
                        >
                            {buttonText}
                        </button>
                    )}
                </>
            )}
        </div>
    );
};

export default ResultPage;
