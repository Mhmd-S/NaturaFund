import { AuthContextProvider } from "@/context/AuthContext";

import EmailForm from "@/forms/RegistrationForm/EmailForm";
import EmailVerificationForm from "@/forms/RegistrationForm/EmailVerificationForm";
import SuccessMessage from "@/forms/RegistrationForm/SuccessMessage";

import useRegistrationForm from "./hooks/useRegistartionForm";

const Registration = ({ setRegistrationType }) => {
    const { currentStep, email, setEmail, setCurrentStep } = useRegistrationForm({
        setRegistrationType,
    });

    const renderStage = () => {
        switch (currentStep) {
            case 0:
                return (
                    <EmailForm
                        setRegistrationType={setRegistrationType}
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
                        setRegistrationType={setRegistrationType}
                        setCurrentStep={setCurrentStep}
                        setEmail={setEmail}
                    />
                );
        }
    };

    return <AuthContextProvider>{renderStage()}</AuthContextProvider>;
};

export default Registration;
