import { useState } from "react";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const InputComp= ({
    labelText = "",
    className = "",
    inputClass = "",
    placeholder = "",
    name = "",
    onChange = () => { },
    value = "",
    type = "text",
    error = "",
    required = false,
    onKeyDown,
    disabled = false
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className={`flex flex-col w-full relative ${className}`}>
            {/* Label */}
            <label
                htmlFor={name}
                className="text-black text-14 rounded-lg absolute -top-2.5 left-2  w-fit px-2 "
            >
                {labelText}
                {required && <span className="ml-1 text-red-600">*</span>}
            </label>

            {/* Input */}
            <input
                // required={required}
                type={type === 'password' && showPassword ? 'text' : type}
                id={name}
                value={value}
                placeholder={placeholder}
                name={name}
                onKeyDown={onKeyDown}
                autoComplete="off"
                className={`focus:outline-none border h-10 ${error ? 'border-red-600' : 'border-[#3A4142]'
                    } bg-bgPrimaryClr rounded-2xl py-2 px-3 ${type === "password" ? 'pr-10' : ''} ${inputClass}`}
                onChange={onChange}
                disabled={disabled}
            />

            {/* Password visibility toggle */}
            {type === "password" && (
                <span
                    className="absolute top-2 right-4 cursor-pointer"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? (
                        <VisibilityOutlinedIcon />
                    ) : (
                        <VisibilityOffOutlinedIcon />
                    )}
                </span>
            )}

            {/* Error message */}
            {error && (
                <div className="text-red-600 text-14 mt-1">
                    {error}
                </div>
            )}
        </div>
    );
};

export default InputComp;