import React, { useState } from "react";

const useLogin = () => {
    const [loginType, setLoginType] = useState(0);

    return { loginType, setLoginType };
};

export default useLogin;
