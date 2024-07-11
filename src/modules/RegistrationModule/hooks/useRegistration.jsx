import React, { useState } from "react";

const useRegistration = () => {
    const [registrationType, setRegistrationType] = useState(0);

    // Email, Google
    
    return { registrationType, setRegistrationType };
};

export default useRegistration;
