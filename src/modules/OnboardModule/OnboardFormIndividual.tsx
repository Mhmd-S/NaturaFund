import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";

import PersonalDetails from "@forms/Onboard/investor/PersonalDetails";
import ProofOfIdentity from "@forms/Onboard/investor/ProofOfIdentity";
import ProofOfAddress from "@forms/Onboard/investor/ProofOfAddress";

import ResultPage from "@modules/OnboardModule/ResultPage";

const VerficationFormIndividual = () => {
    const { stage } = useOnboardContext();

    const renderStep = () => {
        switch (stage) {
            case 0:
                return <PersonalDetails />;
            case 1:
                return <ProofOfIdentity />;
            case 2:
                return <ProofOfAddress />;
            case 3:
                return <ResultPage />;
            default:
                return <ResultPage />;
        }
    };
    return renderStep();
};

export default VerficationFormIndividual;
