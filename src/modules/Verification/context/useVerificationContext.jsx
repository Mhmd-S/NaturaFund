import { useContext, createContext, useState, useMemo } from "react";

const VerificationContext = createContext();

export const VerificationProvider = ({ children }) => {
    const [stage, setStage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        address: "",
        phoneNumber: "",
    });

    const goNextStage = () => {
        if (stage < 3) {
            setStage(stage + 1);
        }
    };

    const goPrevStage = () => {
        if (stage > 1) {
            setStage(stage - 1);
        }
    };

    const memoValue = useMemo(
        () => ({
            stage,
            loading,
            data,
            setLoading,
            setData,
            goNextStage,
            goPrevStage,
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
