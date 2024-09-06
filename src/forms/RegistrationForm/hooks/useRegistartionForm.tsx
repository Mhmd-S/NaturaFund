import { useState } from "react";

const useRegistrationForm = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [email, setEmail] = useState("");

    const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);
    const goToPreviousStep = () => setCurrentStep((prevStep) => prevStep - 1);

    return {
        currentStep,
        email,
        setEmail,
        setCurrentStep,
        goToNextStep,
        goToPreviousStep,
    };
};

export default useRegistrationForm;
