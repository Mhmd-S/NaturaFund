import { useContext, createContext, useState, useMemo } from "react";

// ToDo: Add Fetcing to check the verification status, or maybe it is found in the user info

const OnboardContext = createContext();

export const OnboardProvider = ({ children }) => {
    const [stage, setStage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    const goNext = () => {
        if (stage < 3) {
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
        <OnboardContext.Provider value={memoValue}>{children}</OnboardContext.Provider>
    );
};

// Expor the hook instead of the context iteself
export default function useOnboardContext() {
    return useContext(OnboardContext);
}
