import React, { useState } from "react";
import LoginForm from "@/forms/LoginForm";
import AuthMenu from "@/components/AuthMenu";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

const LoginMenu = {
    title: "Login to start investing in solar projects and earn returns.",
    subTitle: "Login with:",
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
        text: "Dont have an account?",
        link: "/registration",
        linkText: "Register Here!",
    },
};

const useLogin = () => {
    const [loginType, setLoginType] = useState(0);

    const renderLogin = () => {
        switch (loginType) {
            case 0:
                return (
                    <AuthMenu
                        items={LoginMenu.items}
                        setAuthType={setLoginType}
                        title={LoginMenu.title}
                        subTitle={LoginMenu.subTitle}
                        alternative={LoginMenu.alternative}
                    />
                );
            case 1:
                return <LoginForm setLoginType={setLoginType} />;
            case 2:
                return;
            case 3:
                return;
            default:
                return;
        }
    };

    return { loginType, setLoginType, renderLogin };
};

export default useLogin;
