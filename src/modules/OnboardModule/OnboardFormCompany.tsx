import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";

import CompanyInformationForm from "@forms/Onboard/company/CompanyInformationForm";
import RepresentativeForm from "@forms/Onboard/company/RepresentativeForm";

import ResultPage from "@modules/OnboardModule/ResultPage";

import ProofOfAddress from "@forms/Onboard/investor/ProofOfAddress";

const VerficationFormCompany = () => {
    const { stage } = useOnboardContext();

    const renderStep = () => {
        switch (stage) {
            case 0:
                return <CompanyInformationForm />;
            case 1:
                return <RepresentativeForm />;
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

export default VerficationFormCompany;
