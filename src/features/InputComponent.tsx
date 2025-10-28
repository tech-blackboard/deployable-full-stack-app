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
    const inputClass = `border border-gray-300  py-2  w-full md:w-1/2 lg:w-2/3 rounded-md  bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-none ${className} `
    return (
        <div >

            <input className={inputClass} name={name} inputMode={inputmode} type={inputType} value={inputValue} placeholder={placeholder} id={inputId} pattern={pattern} onChange={inputOnChange} style={style} required={required} />


        </div>
    )
}