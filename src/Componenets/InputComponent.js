export default function InputComponent({name,inputmode,inputType,inputValue,pattern, placeholder,inputId,inputOnChange,fullNameError,pwdError,cPwdError,emailError,required}){
    return(
    <div>
    
            <input  name={name} inputmode={inputmode} type={inputType} value={inputValue} placeholder={placeholder} id={inputId} pattern={pattern} onChange={inputOnChange} fullNameError={fullNameError} emailError={emailError} pwdError={pwdError} cPwdError={cPwdError} required={required}/>
           
        
    </div>
    )
}