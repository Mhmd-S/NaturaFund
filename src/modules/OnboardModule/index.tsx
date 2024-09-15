import {
    ONBOARD_STEPS_INDIVIDUAL,
    ONBOARD_STEPS_COMPANY,
} from "@modules/OnboardModule/OnboardSteps";

import { OnboardProvider } from "@modules/OnboardModule/context/useOnboardContext";

import StageIndicator from "@modules/OnboardModule/StageIndicator";
import OnboardFormIndividual from "@modules/OnboardModule/OnboardFormIndividual";
import OnboardFormCompany from "@modules/OnboardModule/OnboardFormCompany";
import { useAuthContext } from "@context/AuthContext";

const Onboard = () => {
    const { state } = useAuthContext();
    const { current } = state;
    console.log(current)

    return (
        <div className="relative w-full py-4 grid grid-cols-[20%_80%]">
            <OnboardProvider>
                <StageIndicator
                    steps={
                        current.userType === "Investor"
                            ? ONBOARD_STEPS_INDIVIDUAL
                            : ONBOARD_STEPS_COMPANY
                    }
                />
                {current.userType === "Investor" ? (
                    <OnboardFormIndividual />
                ) : (
                    <OnboardFormCompany />
                )}
            </OnboardProvider>
        </div>
    );
};

export default Onboard;
