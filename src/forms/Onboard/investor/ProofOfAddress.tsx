import { useForm } from "react-hook-form";

import useOnboardContext from "@modules/OnboardModule/context/useOnboardContext";

import FormWrapper from "@forms/FormComponents/FormWrapper";
import FileUploadField from "@forms/FormComponents/FormFileUpload";
import FormButton from "@forms/FormComponents/FormButton";
import FormGeneralError from "@forms/FormComponents/FormGeneralError";

import { updateUser } from "@api/user";

import { useAuthContext } from "@context/AuthContext";

const ProofOfAddress = () => {
    const { data, setData, goPrev, goNext, loading, setLoading, error, setError } =
        useOnboardContext();

    const { state, authContextAction } = useAuthContext();

    const { getUser } = authContextAction;

    const {
        register,
        handleSubmit,
        resetField,
        clearErrors,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            addressProof: data.get("addressProof") || null,
        },
    });

    const handleGoPrev = () => {
        const formDataTemp = data;

        const addressProof = getValues("addressProof");

        if (!addressProof) {
            goPrev()
            return;
        };

        formDataTemp.set("addressProof", addressProof[0] || addressProof);
        
        setData(data);

        goPrev();
    };

    const onSubmit = async (formData) => {
        setLoading(true);
        setError(null);

        const formDataTemp = data;

        formDataTemp.set("addressProof", formData.addressProof[0] || formData.addressProof);
        formDataTemp.set("verified", "pending");
        try {
            const response = await updateUser(state.current._id, data);

            const { status } = response;

            if (status === "success") {
                goNext();
            } else {
                setError("An error occurred, please try again.");
            }

            getUser();

            setLoading(false);
        } catch (error) {
            setError("An error occurred, please try again.");
            setLoading(false);
        }
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)} loading={loading}>
            <div className="w-3/4 grid grid-cols-2 gap-y-4">
                <FormGeneralError message={error} />
                <h2 className="col-span-2 text-3xl font-semibold">Proof of Address</h2>
                <FileUploadField
                    accept="image/*"
                    currentFile={data.get("addressProof")}
                    acceptSize={30000}
                    inputGuidelines="Please upload a proof of address"
                    resetField={resetField}
                    label={"Proof of Address (Bank Statement, Utility Bill, etc.)"}
                    name="addressProof"
                    register={register}
                    errors={errors}
                    clearErrors={clearErrors}
                    validationRules={{
                        required: "File is required",
                    }}
                />
                <div className="col-span-2 p-2 grid grid-cols-2 gap-10">
                    <button
                        type="button"
                        className="bg-white text-brand-800 border-2 border-brand-800 rounded-md transition-colors hover:bg-brand-800 hover:text-white"
                        onClick={handleGoPrev}
                    >
                        Back
                    </button>
                    <FormButton
                        type="submit"
                        text="Complete"
                        disable={Object.keys(errors).length !== 0}
                    />
                </div>
            </div>
        </FormWrapper>
    );
};

export default ProofOfAddress;
