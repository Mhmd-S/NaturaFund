import React from "react";

const FormButton = ({ onClick, text, loading }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full h-fit text-md py-3 px-3 bg-purple-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-pulse`}
            disabled={loading}
        >
            {loading ? "Processing" : text}
        </button>
    );
};

export default FormButton;
