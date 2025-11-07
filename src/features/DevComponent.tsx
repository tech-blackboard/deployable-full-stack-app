interface DevComponentProps{
    heading:string;
    para:string;
    className:string;
    buttonName:string;
    buttonNames:string;
    onClick:()=>void;

}

export default function DevComponent({ heading, para, className, buttonName, bg, buttonNames, onClick }: DevComponentProps){
    const style = `border-2 rounded-xl shadow-md w-full md:w-1/2 lg:w-1/3 h-auto mb-9 p-9 ml-9 ${className}`;
    const buttonStyle = `border-2 rounded-xl shadow-md w-24 bg-yellow-500 p-1 mt-4 text-blue-900 font-lighter  ${className}`
    return(
        <div className={style}>
            <h1 >{heading}</h1>
            <p className="text-blue-900">{para}</p>
            <button className={buttonStyle}>{buttonName}</button>
            <button className={bg} onClick={onClick}>{buttonNames}</button>
        </div>
    )
}