import React from "react";
import RegistrationForm from "@/forms/RegistrationForm";
import AuthMenu from "@/components/AuthMenu";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import useRegistration from "@/modules/RegistrationModule/hooks/useRegistration";

const RegistrationModule = () => {
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

    const { registrationType, setRegistrationType } = useRegistration();

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

    return (
        <div className="w-4/5 flex flex-col items-center md:h-3/5 md:px-24">
            {renderRegistration()}
        </div>
    );
};

export default RegistrationModule;
