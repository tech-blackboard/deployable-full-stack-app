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
    const inputClass = ` w-full  pr- py-3 border border-gray-300 rounded-lg text-slate-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-none transition duration-150 lg:w-full px-9 ${className}  '
`
    return (
        <div >

            <input className={inputClass} name={name} inputMode={inputmode} type={inputType} value={inputValue} placeholder={placeholder} id={inputId} pattern={pattern} onChange={inputOnChange} style={style} required={required} />


        </div>
    )
}