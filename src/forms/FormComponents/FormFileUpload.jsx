import React, { useState } from "react";

import FormFieldError from "@/forms/formComponents/FormFieldError";

import { validateImage } from "@/utils/validateImage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faClose, faPlus } from "@fortawesome/free-solid-svg-icons";

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
    const [loading, setLoading] = useState(true);

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
            className={`h-full w-full relative flex justify-center items-center border-2  rounded-md bg-white ${
                errors[name] && "border-2 border-pink-600"
            }`}
        >
            {loading && <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" />}

            {/* The icon for adding an image */}
            <label
                htmlFor={name}
                className={`h-full w-full flex flex-col p-2 text-center items-center justify-center absolute ${
                    imageFile && "hidden"
                } `}
            >
                <FontAwesomeIcon icon={faPlus} className="w-5 h-5 text-brand-800" />

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
                            {/* <input
								type="file"
								name={name}
								accept="image/png, image/jpeg"
								{...register(name, validationRules)}
								onInput={handleFileChange}
								className={`opacity-0 w-full h-full absolute top-0 r-0`}
							/> */}
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
                className={`opacity-0 absolute w-full h-full cursor-pointer `}
            />
        </div>
    );
};

export default FileUploadField;
