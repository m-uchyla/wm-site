import { Card, SectionHeader, Button, Input, TelInput } from "@/components"
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im"

export default function Popup(props) {

    const [selectedPlan, setSelectedPlan] = useState("Basic Plan");

    function handleClick (e) {
        console.log(e.target.id)
        if(e.target.id === "outerPopup" || e.target.id === "crossPopup" || e.target.id === "iconCross" ){
          document.getElementsByTagName("body")[0].style.overflow = "auto";
          setSelectedPlan("");
        }
    }

    useEffect(() =>{
        if(selectedPlan)document.getElementsByTagName("body")[0].style.overflow = "hidden";
    })

    return (

      <div id="outerPopup" onClick={handleClick} className={`${props.className} ${(selectedPlan === "") ? "hidden" : "flex"} fixed inset-0 z-[100] w-full h-full bg-black bg-opacity-70 backdrop-blur-sm items-center content-center`}>
        <Card className={"mx-[30%]"}>
            <div className="relative mb-4">
                <div id="crossPopup" className="p-4 absolute -right-6 -top-6 cursor-pointer hover:text-primary">
                    <ImCross id="iconCross" onClick={handleClick()} className="text-[20px]" />
                </div>
            </div>
            <SectionHeader header={"Skontaktuj się z nami"} subheader={"W sprawie wybranego planu"} />
            <h4 className="text-center text-[24px] -mt-4">Twój wybrany plan: <span className="text-gradient font-semibold">{selectedPlan}</span></h4>
            <div className="w-[70%] mx-auto my-4">
                <p className="text-secondaryText text-[14px] text-justify">Wysłanie wiadomości nie jest równoznaczne z zawarciem umowy dotyczącej wybranego planu, natomiast jest to zezwolenie na przedstawienie szczegółowej oferty i kontakt z naszej strony. Po otrzymaniu od państwa wiadomości, nasz zespół zainicjuje kontakt tak szybko jak będzie to możliwe. Następnie dokonywana jest szczegółowa wycena projektu, po której zostanie przedstawiona konretna oferta do akceptacji przez klienta.</p>
            </div>
            <div className="w-[70%] mx-auto">
                <TelInput 
                    className={"my-6"}
                    forName={"tel"} 
                    labelName={"Numer telefonu"}
                    placeholderName={"Podaj numer telefonu (opcjonalnie)"}
                    name={"tel"}
                    isRequired={false}
                    formId={"planSelection"}
                />
                <Input 
                    className={"my-6"}
                    type={"email"} 
                    forName={"email"} 
                    labelName={"Adres email"}
                    placeholderName={"Podaj swój adres email"}
                    name={"email"}
                    isRequired={true}
                    formId={"planSelection"}
                />
            </div>
            <div className="w-[35%] mx-auto mt-16">
                <Button variation={1} text={"Wyślij"} />
            </div>
        </Card>
      </div>

    )
}