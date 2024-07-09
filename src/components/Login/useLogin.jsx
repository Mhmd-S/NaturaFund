import React, { useState, useEffect } from "react";

const useLogin = () => {
    const [loginType, setLoginType] = useState(0);

    // Email, Google
    const renderLogin = () => {
      switch(loginType) {
        case 0:
          return;
        case 1:
          return;
        case 2:
          return;
        default:
          return;
      }
    };

    return { loginType, setLoginType, renderLogin };
};

export default useLogin;
