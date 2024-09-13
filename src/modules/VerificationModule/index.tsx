import {
    VERIFICATION_STEPS_INDIVIDUAL,
    VERIFICATION_STEPS_COMPANY,
} from "@/modules/VerificationModule/VerificationSteps";

import { VerificationProvider } from "@/modules/VerificationModule/context/useVerificationContext";

import StageIndicator from "@/modules/VerificationModule/StageIndicator";
import VerificationFormIndividual from "@/modules/VerificationModule/VerificationFormIndividual";
import VerificationFormCompany from "@/modules/VerificationModule/VerificationFormCompany";
import { useAuthContext } from "@/context/AuthContext";

const Verification = () => {
    const { state } = useAuthContext();
    const { current } = state;

    return (
        <div className="relative w-full py-4 grid grid-cols-[20%_80%]">
            <VerificationProvider>
                <StageIndicator
                    steps={
                        current.userType === "investor"
                            ? VERIFICATION_STEPS_INDIVIDUAL
                            : VERIFICATION_STEPS_COMPANY
                    }
                />
                {current.userType === "investor" ? (
                    <VerificationFormIndividual />
                ) : (
                    <VerificationFormCompany />
                )}
            </VerificationProvider>
        </div>
    );
};

export default Verification;
