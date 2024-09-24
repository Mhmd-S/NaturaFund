import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { useFieldArray, Controller } from "react-hook-form";

const MultiFileInput = ({ name, label, description, control }) => {
    const { fields, append, remove } = useFieldArray({
        control,
        name: name,
        keyName: `${name}Id`,
    });

    const hiddenFileInput = useRef(null);

    const onAddDocuments = () => {
        hiddenFileInput.current.click();
    };

    const handleAddDocuments = (event) => {
        const uploadedFiles = Array.from(event.target.files);

        const files = uploadedFiles.map((file) => ({
            file,
        }));
        console.log(files);
        console.log(uploadedFiles);
        append(files);

        hiddenFileInput.current.value = "";
    };

    return (
        <>
            <input
                ref={hiddenFileInput}
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                size={3000}
                multiple
                onChange={handleAddDocuments}
                className="hidden"
            />

            <div className="w-full flex flex-col gap-2">
                <label
                    htmlFor={name}
                    className="block mb-2 text-sm font-medium leading-6 text-gray-900"
                >
                    {label}
                </label>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="max-h-48 overflow-y-auto px-2">
                    {fields.map(({ documentId, file }, index) => (
                        <div
                            key={documentId}
                            className="flex items-center mb-2 bg-gray-300/20 p-2 rounded-lg"
                        >
                            <Controller
                                control={control}
                                name={`documents.${index}`}
                                render={() => (
                                    <>
                                        <div className="flex-1 text-gray-800">{file.name}</div>
                                        <button
                                            type="button"
                                            aria-label="Remove"
                                            onClick={() => remove(index)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            <FontAwesomeIcon icon={faTrash} className="mr-2" />
                                        </button>
                                    </>
                                )}
                            />
                        </div>
                    ))}
                </div>

                <button type="button" onClick={onAddDocuments} className="p-4">
                    <FontAwesomeIcon icon={faPlus} className="mr-2" />
                    Add documents
                </button>
            </div>
        </>
    );
};

export default MultiFileInput;
