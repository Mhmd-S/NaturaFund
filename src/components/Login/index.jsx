import React from "react";
import useLogin from "@/components/Login/useLogin";
import LoginMenu from "@/components/Login/LoginMenu";

const Login = () => {
    const { loginType, setLoginType, renderLogin } = useLogin();

    return (
      <div className="w-3/4">
        {loginType !== 0 ? renderLogin() : <LoginMenu setLoginType={setLoginType} />}
        </div>
        );
};

export default Login;
