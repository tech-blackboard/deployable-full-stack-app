interface ButtonProps {
    name: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    buttonType: "button";
}
export default function ButtonComponent({ name, onClick, className, buttonType }: ButtonProps) {
    const buttonStyle = `border-2 gap-2 border-black-200  w-40 rounded-xl bg-cyan-600 pb-4 text-white p-3 font-bold mb-0  ${className}`;//hre if we want to write styles for button we can merge className to this className
    return (
        <div>
            <button className={buttonStyle} type={buttonType} name={name} onClick={onClick} >{name}</button>
        </div>
    )
}