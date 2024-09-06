import React from "react";
import LoginForm from "@/forms/LoginForm";

const LoginModule = () => {
    return (
        <div className="w-4/5 flex flex-col items-center md:h-3/5 md:px-24">
            <LoginForm />
        </div>
    );
};

export default LoginModule;
