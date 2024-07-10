import React, { useState } from "react";
import LoginForm from "@/forms/LoginForm";
import LoginMenu from "@/components/Login/LoginMenu";

const useLogin = () => {
    const [loginType, setLoginType] = useState(0);

    // Email, Google
    const renderLogin = () => {
        switch (loginType) {
            case 0:
                return <LoginMenu setLoginType={setLoginType} />;
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
