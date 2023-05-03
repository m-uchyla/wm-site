

export default function Button({text, variation}) {
    return (
        <div className={`${(variation === 1) ? "bg-blue-gradient rounded-xl h-[45px]" : "border-gradient h-[49px] -mt-[2px]" } grow px-6 cursor-pointer flex-center `}>
            <button className={`text-[20px] font-semibold ${(variation === 1 ) ? "text-background" : "border-button"}`}>{text}</button>
        </div>  
    )
}