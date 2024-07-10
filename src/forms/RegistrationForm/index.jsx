import { AuthContextProvider } from "@/context/AuthContext";

import useRegistration from "./hooks/useRegistration";

const Registration = ({ setRegistrationType }) => {
    const { renderStage } = useRegistration({ setRegistrationType });

    return <AuthContextProvider>{renderStage()}</AuthContextProvider>;
};

export default Registration;
