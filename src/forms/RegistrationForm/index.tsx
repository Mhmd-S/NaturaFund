import { AuthContextProvider } from "@context/AuthContext";

import EmailForm from "@forms/RegistrationForm/EmailForm";
import EmailVerificationForm from "@forms/RegistrationForm/EmailVerificationForm";
import SuccessMessage from "@forms/RegistrationForm/SuccessMessage";

import useRegistrationForm from "./hooks/useRegistartionForm";

const Registration = () => {
    const { currentStep, email, setEmail, setCurrentStep } = useRegistrationForm();

    const renderStage = () => {
        switch (currentStep) {
            case 0:
                return (
                    <EmailForm
                        setCurrentStep={setCurrentStep}
                        setEmail={setEmail}
                    />
                );
            case 1:
                return <EmailVerificationForm setCurrentStep={setCurrentStep} email={email} />;
            case 2:
                return <SuccessMessage />;
            default:
                return (
                    <EmailForm
                        setCurrentStep={setCurrentStep}
                        setEmail={setEmail}
                    />
                );
        }
    };

    return renderStage();
};

export default Registration;
