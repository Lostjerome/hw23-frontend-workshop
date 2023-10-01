import React from "react";

export default function Button({ disabled, text, handleOnClick }) {
    return (
        <button
            disabled={disabled}
            onClick={handleOnClick}
            className="p-4 bg-black text-white rounded-lg disabled:bg-gray-400"
        >
            {text}
        </button>
    );
}
