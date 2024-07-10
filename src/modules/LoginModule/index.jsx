import React from "react";
import useLogin from "@/modules/LoginModule/hooks/useLogin";

const LoginModule = () => {
    const { renderLogin } = useLogin();

    return (
        <div className="w-4/5 flex flex-col items-center md:h-3/5 md:px-24">{renderLogin()}</div>
    );
};

export default LoginModule;
