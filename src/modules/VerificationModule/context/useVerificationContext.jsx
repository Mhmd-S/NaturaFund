import { useContext, createContext, useState, useMemo } from "react";

import VERIFICATION_STEPS from "@/modules/VerificationModule/VerificationSteps";

// ToDo: Add Fetcing to check the verification status, or maybe it is found in the user info

const VerificationContext = createContext();

export const VerificationProvider = ({ children }) => {
    const [stage, setStage] = useState(3);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        address: "",
        phoneNumber: "",
    });

    const goNext = () => {
        if (stage < VERIFICATION_STEPS.length - 1) {
            setStage((stage) => stage + 1);
        }
    };

    const goPrev = () => {
        if (stage > 0) {
            setStage((stage) => stage - 1);
        }
    };

    const memoValue = useMemo(
        () => ({
            stage,
            loading,
            data,
            setLoading,
            setData,
            goNext,
            goPrev,
        }),
        [stage, loading, data]
    );

    return (
        <VerificationContext.Provider value={memoValue}>{children}</VerificationContext.Provider>
    );
};

// Expor the hook instead of the context iteself
export default function useVerificationContext() {
    return useContext(VerificationContext);
}
