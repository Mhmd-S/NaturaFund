import React from "react";
import LoginModule from "@/modules/LoginModule";
import AuthLayout from "@/components/common/AuthLayout";

const Login = () => {
    return (
        <AuthLayout>
            <h2 className="text-lg font-semibold text-brand-900 md:text-2xl">Welcome back!</h2>
            <LoginModule />
        </AuthLayout>
    );
};

export default Login;
