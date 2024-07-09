import React from "react";
import useLogin from "@/components/Login/hooks/useLogin";
import LoginMenu from "@/components/Login/LoginMenu";

const Login = () => {
    const { loginType, setLoginType, renderLogin } = useLogin();

    return (
      <div className="w-3/4 md:h-3/5">
        {loginType !== 0 ? renderLogin() : <LoginMenu setLoginType={setLoginType} />}
        </div>
        );
};

export default Login;
