interface InputComponentProps {
    name?: string;
    inputmode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
    inputType?: string;
    inputValue?: string;
    pattern?: string;
    placeholder?: string;
    inputId?: string;
    inputOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    style?: React.CSSProperties;
    label?: string;
    className?: string;
}


export default function InputComponent({ className, name, inputmode, inputType, inputValue, pattern, placeholder, inputId, inputOnChange, style, required }: InputComponentProps) {
    const inputClass = `border-2 border-black-300 p-1 w-80 rounded-xl bg-white ${className}`
    return (
        <div>

            <input className={inputClass} name={name} inputMode={inputmode} type={inputType} value={inputValue} placeholder={placeholder} id={inputId} pattern={pattern} onChange={inputOnChange} style={style} required={required} />


        </div>
    )
}