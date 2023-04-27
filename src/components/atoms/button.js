

export default function Button({text, variation}) {
    return (
        <div className={`${(variation === 1) ? "bg-blue-gradient text-background " : "border-2 border-gradient text-primary" } grow px-6 cursor-pointer flex-center h-[45px]`}>
            <button className={`sm:text-[20px] text-[10px] font-semibold`}>{text}</button>
        </div>  
    )
}