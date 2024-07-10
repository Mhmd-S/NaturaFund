import { AuthContextProvider } from "@/context/AuthContext";

import useRegistrationForm from "./hooks/useRegistartionForm";

const Registration = ({ setRegistrationType }) => {
    const { renderStage } = useRegistrationForm({ setRegistrationType });

    return <AuthContextProvider>{renderStage()}</AuthContextProvider>;
};

export default Registration;
