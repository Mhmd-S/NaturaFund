import React, { useState } from "react";
import RegistrationForm from "@/forms/RegistrationForm";
import RegistrationMenu from "@/components/Registration/RegistrationMenu";

const useRegistration = () => {
    const [registrationType, setRegistrationType] = useState(0);

    // Email, Google
    const renderRegistration = () => {
        switch (registrationType) {
            case 0:
                return <RegistrationMenu setRegistrationType={setRegistrationType} />;
            case 1:
                return <RegistrationForm setRegistrationType={setRegistrationType} />;
            case 2:
                return;
            case 3:
                return;
            default:
                return;
        }
    };

    return { registrationType, setRegistrationType, renderRegistration };
};

export default useRegistration;
