import React from "react";

import RegistrationForm from "@/forms/RegistrationForm";

import AuthMenu from "@/components/AuthMenu";
import AuthPage from "@/components/AuthPage";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

import useRegistration from "@/pages/Registration/hooks/useRegistration";

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

const Registration = () => {
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
        <AuthPage>
            <h2 className="text-lg font-semibold text-brand-900 md:text-2xl">
                Join us to a more sustainable future!
            </h2>
            <div className="w-4/5 flex flex-col items-center md:h-3/5 md:px-24">
                {renderRegistration()}
            </div>
        </AuthPage>
    );
};

export default Registration;
