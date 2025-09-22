export default function InputComponent({inputType,inputValue,inputId,inputOnChange,fullNameError,pwdError,cPwdError,emailError}){
    return(
    <div>
    
            <input type={inputType} value={inputValue} id={inputId} onChange={inputOnChange} fullNameError={fullNameError} emailError={emailError} pwdError={pwdError} cPwdError={cPwdError}/>
           
        
    </div>
    )
}