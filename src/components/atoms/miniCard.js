

export default function Input({icon, text, className}) {
    return (
      <div className={` ${className} cursor-default flex-center bg-blue-gradient rounded-full text-background text-[16px] font-semibold text-center py-1 px-4`}>
        <div className="text-[18px] mr-1">{icon}</div> {text}
      </div>
    )
}