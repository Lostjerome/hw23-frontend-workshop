import React from "react";

export default function InputField({
    value,
    handleOnChange,
    label,
    placeholder,
    type,
}) {
    return (
        <label className="flex flex-col gap-2">
            {label}
            <input
                value={value}
                onChange={handleOnChange}
                type={type || "text"}
                className="border border-gray-400 rounded-lg p-4"
                placeholder={placeholder}
            />
        </label>
    );
}
