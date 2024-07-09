import React, { useState } from "react";
import LoginForm from "@/forms/LoginForm";

const useLogin = () => {
    const [loginType, setLoginType] = useState(0);

    // Email, Google
    const renderLogin = () => {
      switch(loginType) {
        case 1:
          return <LoginForm />;
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
