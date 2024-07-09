import React from "react";
import useLogin from "@/components/Login/hooks/useLogin";

const Login = () => {
    const { renderLogin } = useLogin();

    return (
        <div className="w-4/5 flex flex-col items-center md:h-3/5 md:px-24">{renderLogin()}</div>
    );
};

export default Login;
