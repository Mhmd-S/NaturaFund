import { AuthContextProvider } from "@/context/AuthContext";

import useRegistration from "./hooks/useRegistration";

const Registration = ({ registrationType }) => {
    const { renderStage } = useRegistration();

    return (
        <div className="w-full h-screen rounded-xl flex flex-col items-center justify-center p-16">
            <AuthContextProvider>{renderStage()}</AuthContextProvider>
        </div>
    );
};

export default Registration;
