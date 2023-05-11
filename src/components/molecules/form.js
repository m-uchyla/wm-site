import { Input, TelInput, Textarea, Button } from "@/components"
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function Form({plan, sentInfo}) {

  const formId = "offerSelectionForm"
  const contactForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let isEmpty = false;
    for(let i = 0; i<e.target.length-1;i++){
      if(e.target[i].name=="email" && e.target[i].value.length==0)isEmpty=true;
    }

    const errors = document.querySelector(`[id^="${formId}_error"]`);
    
    if(errors || isEmpty){
      console.log("error")
    }else{
      console.log('success')
      // ReactGA.event({
      //   category:"Offer selected", 
      //   action: "Offer selected"
      // });

      // emailjs.sendForm('service_contactForm_WM', 'template_wm', contactForm.current, 'LbjIHyDLBTMjgCzYg');
      sentInfo(true);
    }
    
    
  };

    return (
      <div className="h-[100%] flex flex-col flex-wrap justify-evenly">
        <h2 className="text-[24px] font-semibold">Wypełnij informacje kontatkowe</h2>
        <form ref={contactForm} id={formId} className="flex flex-col gap-7" onSubmit={sendEmail}>
          <input type="hidden" name="plan" value={plan} />
          <div>
            <h3>Imię <span className="text-secondaryText">(opcjonalnie)</span></h3>
            <Input 
                    type={"text"} 
                    forName={"name"} 
                    labelName={"Imię"}
                    placeholderName={"Podaj swoje imię"}
                    name={"name"}
                    isRequired={false}
                    formId={formId}
                    className={"mt-1"}
            />
          </div>
          <div>
            <h3>Email <span className="text-red-600">*</span></h3>
            <Input 
                    type={"email"} 
                    forName={"email"} 
                    labelName={"Adres email"}
                    placeholderName={"Adres e-mail"}
                    name={"email"}
                    isRequired={true}
                    formId={formId}
                    className={"mt-1"}
            />
          </div>
          <div>
            <h3>Telefon <span className="text-secondaryText">(opcjonalnie)</span></h3>
            <TelInput 
                    forName={"tel"} 
                    labelName={"Numer telefonu"}
                    placeholderName={"Podaj swój numer telefonu"}
                    name={"tel"}
                    formId={formId}
                    className={"mt-1"}
            />
          </div>
          <div>
            <h3>Uwagi/dodatkowe informacje <span className="text-secondaryText">(opcjonalnie)</span></h3>
            <Textarea 
                    forName={"message"} 
                    labelName={"Dodatkowe informacje"}
                    placeholderName={""}
                    name={"message"}
                    isRequired={false}
                    formId={formId}
                    className={"mt-1"}
            />
          </div>
          <div className="w-[50%] mx-auto">
            <Button variation={1} text={"Wyślij"} />
          </div>
        </form>
      </div>
    )
}