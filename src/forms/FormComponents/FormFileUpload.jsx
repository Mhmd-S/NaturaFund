import React, { useState } from "react";

import FormFieldError from "@/forms/formComponents/FormFieldError";

import { validateImage } from "@/utils/validateImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faClose, faFileUpload } from "@fortawesome/free-solid-svg-icons";

const FileUploadField = ({
    name,
    register,
    errors,
    setError,
    validationRules,
    usersPicture,
    resetField,
    ...inputProps
}) => {
    const [imageFile, setImageFile] = useState(usersPicture);
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (event) => {
        setLoading(true);
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const result = await validateImage(selectedFile, 3000000); // 3MB

            if (!result.valid) {
                setError(`${name}`, { type: "manual", message: result.message });
                setLoading(false);
                return;
            }

            setImageFile(selectedFile);
        }
        setLoading(false);
    };

    const handleRemoveImage = () => {
        resetField(`${name}`, { defaultValue: "" }); // Not optimal, but it works
        setImageFile(null);
    };

    return (
        <div
            className={`relative h-full w-full border border-gray-900/25 border-dashed rounded-md ${
                errors[name] && "border-pink-600"
            }`}
        >
            {loading && <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />}

            {/* The icon for adding an image */}
            <label
                htmlFor={name}
                className={`h-full grid grid-rows-[35%_25%_25%_minmax(5%,10%)] grid-cols-1 place-items-center items-center text-gray-600 ${
                    imageFile && "hidden"
                } `}
            >
                <FontAwesomeIcon icon={faFileUpload} className="size-8 text-gray-300" />

                <span>
                    <span className="text-brand-900 font-semibold">Upload a File </span>
                    or drag and drop
                </span>
                <span>PNG, JPG, GIF up to 3MB</span>

                <FormFieldError name={name} errors={errors} />
            </label>

            {/* The remove button for an image */}
            {imageFile && (
                <>
                    <div className="absolute right-[-7%] top-[-5%] z-10">
                        <div className="relative w-full h-full">
                            <FontAwesomeIcon
                                icon={faClose}
                                className="w-3 h-3 aboslute text-lg text-white bg-red-500 rounded-full p-1 cursor-pointer"
                                onClick={() => {
                                    handleRemoveImage();
                                    inputProps?.handleDeleteImage();
                                }}
                            />
                        </div>
                    </div>

                    <img
                        className="w-full h-full object-cover relative rounded-md"
                        src={
                            typeof imageFile == "string"
                                ? imageFile
                                : URL.createObjectURL(imageFile)
                        }
                        alt="Preview"
                    />
                </>
            )}

            <input
                type="file"
                name={name}
                accept="image/png, image/gif, image/jpeg"
                {...register(name, validationRules)}
                onInput={handleFileChange}
                className={`opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer`}
            />
        </div>
    );
};

export default FileUploadField;
