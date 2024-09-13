import Verification from "@/modules/VerificationModule";

const Onboarding = () => {
    return (
        <div className="w-full h-full p-4 overflow-y-auto col-span-2 bg-gray-300/25 space-y-5">
            <div className="w-full h-1/4 flex flex-col items-start justify-center gap-4 bg-white p-4 rounded-lg">
                <h1 className="text-3xl font-bold text-brand-800">Onboarding</h1>
                <h2 className="text-lg font-semibold text-gray-600">
                    Welcome to the platform! Please complete the following steps to verify your
                    account.
                </h2>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-4 bg-white p-4 rounded-lg">
                <Verification />
            </div>
        </div>
    );
};

export default Onboarding;
