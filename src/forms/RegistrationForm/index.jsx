import { AuthContextProvider } from "@/context/AuthContext";

import useRegistration from "./hooks/useRegistration";

const Registration = () => {
    const { renderStage } = useRegistration();

    return (
        <div className="w-full h-screen rounded-xl flex flex-col items-center justify-center p-4 bg-[#fafafa]">
            <AuthContextProvider>{renderStage()}</AuthContextProvider>
        </div>
    );
};

export default Registration;
