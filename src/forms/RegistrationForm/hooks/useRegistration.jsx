import react, { useState } from "react";
import EmailForm from "@/forms/RegistrationForm/EmailForm";
import EmailVerificationForm from "@/forms/RegistrationForm/EmailVerificationForm";
import SuccessMessage from "@/forms/RegistrationForm/SuccessMessage";

const useRegistration = ({ setRegistrationType }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [email, setEmail] = useState("");

    const renderStage = () => {
        switch (currentStep) {
            case 0:
                return <EmailForm setRegistrationType={setRegistrationType} setCurrentStep={setCurrentStep} setEmail={setEmail} />;
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
