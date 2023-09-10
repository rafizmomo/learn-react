import { useState } from "react";
import Label from "./Label";

const InputText = ({
    id = 'textInputId',
    name = 'textInputName',
    label = 'textInputLabel'
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocusChange = (boolean) => {
        setIsFocused(boolean);
    };

    const baseStyle = {
        default: 'border-2 rounded-lg py-2 px-3 transition duration-300',
        focus: 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300',
        color: {
            default: 'placeholder:text-slate-400 bg-slate-50 text-inherit border-slate-500 focus:border-slate-600'
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <Label isFocused={isFocused} htmlFor={id}>{label}</Label>
            <input
                onFocus={() => handleFocusChange(true)}
                onBlur={() => handleFocusChange(false)}
                type="text"
                name={name}
                placeholder={`${label}...`}
                className={`${baseStyle.default} ${baseStyle.focus}  ${baseStyle.color.default} `}
            />
            {/* <p>{isFocused ? 'Input Selected' : 'Input not Selected'}</p> */}

        </div>
    );
};

export default InputText;
