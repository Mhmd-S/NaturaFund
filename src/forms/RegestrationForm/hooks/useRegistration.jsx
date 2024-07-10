import react, { useState } from "react";
import EmailForm from "@/forms/RegestrationForm/EmailForm";
import EmailVerificationForm from "@/forms/RegestrationForm/EmailVerificationForm";
import SuccessMessage from "@/forms/RegestrationForm/SuccessMessage";

const useRegistration = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [email, setEmail] = useState("");

    const renderStage = () => {
        switch (currentStep) {
            case 0:
                return <EmailForm setCurrentStep={setCurrentStep} setEmail={setEmail} />;
            case 1:
                return <EmailVerificationForm setCurrentStep={setCurrentStep} email={email} setEmail={setEmail} />
            case 2:
                return <SuccessMessage />;
            default:
                return <EmailForm setCurrentStep={setCurrentStep} setEmail={setEmail} />;
        }
    };

    return { renderStage };
};

export default useRegistration;
