import { useState } from "react";

const useRegistrationForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [email, setEmail] = useState("");

    return {
        currentStep,
        email,
        setEmail,
        setCurrentStep,
    };
};

export default useRegistrationForm;
