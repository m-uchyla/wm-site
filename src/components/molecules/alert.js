import { Card } from "@/components"
import { ImCross, ImCheckmark, ImWarning } from "react-icons/im"

export default function Alert({type, header, subheader, className, id}) {
    return (
      <div className={`${id} fixed top-24 right-10 alert ${className}`}>
        <Card className={"flex-center flex-row gap-5 p-7 bg-[rgb(20,20,31)]"}>
            <div>
                {(type==="success") ? 
                <ImCheckmark className="text-primary text-[30px]" />
                : 
                <ImWarning className="text-red-600 text-[30px]" />
                }
            </div>
            <div className="flex-center flex-col">
                <h4 className={`font-bold ${(type==="success") ? "text-gradient" : "text-red-600"} text-[20px]`}>{header}</h4>
                <p className="text-secondaryText text-[16px]">{subheader}</p>
            </div>
        </Card>
      </div>
    )
}