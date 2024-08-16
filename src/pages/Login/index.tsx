import React from "react";
import LoginModule from "@/modules/LoginModule";
import AuthPage from "@/components/AuthPage";

const Login = () => {
    return (
        <AuthPage>
            <h2 className="text-lg font-semibold text-brand-900 md:text-2xl">Welcome back!</h2>
            <LoginModule />
        </AuthPage>
    );
};

export default Login;
