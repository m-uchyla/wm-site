

export default function Button({text, variation}) {
    return (
        <div className={`${(variation === 1) ? "bg-blue-gradient rounded-xl" : "border-gradient " } grow px-6 cursor-pointer flex-center h-[45px] `}>
            <button className={`sm:text-[20px] text-[10px] font-semibold ${(variation === 1 ) ? "text-background" : "border-button"}`}>{text}</button>
        </div>  
    )
}