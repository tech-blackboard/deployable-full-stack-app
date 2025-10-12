interface InputComponentProps{
    name:string;
    inputmode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";   
    inputType: string ;
    inputValue:string;
    pattern:string;
    placeholder:string;
    inputId:string;
    inputOnChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
    required?:boolean;
}


export default function InputComponent({name,inputmode,inputType,inputValue,pattern, placeholder,inputId,inputOnChange,required}: InputComponentProps){
    return(
    <div>
    
            <input  name={name} inputMode={inputmode} type={inputType} value={inputValue} placeholder={placeholder} id={inputId} pattern={pattern} onChange={inputOnChange} required={required}/>
           
        
    </div>
    )
}