

export default function Button({text, className}) {
    return (
        <div className={`bg-blue-gradient grow px-6 rounded-sm cursor-pointer flex-center ${className}`}>
            <button className={`sm:text-[20px] text-[10px] text-background font-semibold`}>{text}</button>
        </div>
    )
}