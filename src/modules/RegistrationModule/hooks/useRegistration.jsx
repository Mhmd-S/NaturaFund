import React, { useState } from "react";
import RegistrationForm from "@/forms/RegistrationForm";
import AuthMenu from "@/components/AuthMenu";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

const RegistarationMenu = {
    title: "Sign Up to start investing in solar projects and earn returns.",
    subTitle: "Sign Up with:",
    items: [
        {
            id: 1,
            icon: faEnvelope,
            name: "Email",
        },
        {
            id: 2,
            icon: faGoogle,
            name: "Google",
        },
        {
            id: 3,
            icon: faApple,
            name: "Apple",
        },
    ],
    alternative: {
        text: "Already have an account?",
        link: "/login",
        linkText: "Login Here!",
    },
};

const useRegistration = () => {
    const [registrationType, setRegistrationType] = useState(0);

    // Email, Google
    const renderRegistration = () => {
        switch (registrationType) {
            case 0:
                return (
                    <AuthMenu
                        items={RegistarationMenu.items}
                        setAuthType={setRegistrationType}
                        title={RegistarationMenu.title}
                        subTitle={RegistarationMenu.subTitle}
                        alternative={RegistarationMenu.alternative}
                    />
                );
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
