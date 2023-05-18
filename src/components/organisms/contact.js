import { Card, Button, Input, Alert} from "../index"
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ReactGA from 'react-ga4';

export default function Contact() {

  const contactForm = useRef();
  ReactGA.initialize("G-0R0SY0R690");

  const [emailAlert,setEmailAlert] = useState({
    type: null,
    header: null,
    subheader: null
  })

  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const formId = "contactUs";

  const sendEmail = (e) => {
    e.preventDefault();

    let isEmpty = false;
    for(let i = 0; i<e.target.length-1;i++){
      if(e.target[i].name!="tel" && e.target[i].value.length==0)isEmpty=true;
    }

    const errors = document.querySelector(`[id^="${formId}_error"]`);
    
    if(errors || isEmpty){
      initAlert("error", "Wystąpił błąd", "Spróbuj ponownie");
    }else{
      initAlert("success", "Wiadomość wysłana!", "Wkrótce się odezwiemy");
      ReactGA.event({
        category:"Email", 
        action: "Contact form email"
      });

      emailjs.sendForm('service_contactForm_WM', 'template_wm_2', contactForm.current, 'LbjIHyDLBTMjgCzYg');
    }
    
    
  };

  const initAlert = (type, header, subheader) =>{
    setEmailAlert({
      type: type,
      header: header,
      subheader: subheader
    })
    setFadeOut(false)
    setFadeIn(true)
    setTimeout(() => { 
      setFadeIn(false);
      setFadeOut(true)

      setTimeout(() => { 
        setEmailAlert({
          type: null,
          header: null,
          subheader: null
        })
      }, 1000);
    }, 5000);
  }

    return (
      <section id="contact">
        <Card className="flex gap-10 sm:p-16 p-10 flex-col lg:flex-row">
          <div className="flex-1 text-center">
            <h2 className="md:text-[45px] text-[30px] font-semibold leading-none sm:mb-0 mb-4">Dodatkowe pytania?</h2>
            <h3 className="text-secondaryText md:text-[18px] text-[16px] font-regular">Zostaw swój adres e-mail a odezwiemy się do Ciebie</h3>
          </div>
          <form ref={contactForm} id={formId} className="flex-1 flex-center flex-col lg:flex-row gap-7" onSubmit={sendEmail}>
            <div className="flex-1">
              <Input 
                type={"email"} 
                forName={"email"} 
                labelName={"Adres email"}
                placeholderName={"Adres e-mail"}
                name={"email"}
                isRequired={true}
                formId={"contact"}
                />
            </div>
            <div className="w-[150px]">
              <Button text={"Wyślij"} variation={1} />
            </div>
          </form>
        </Card>
        {(emailAlert.type !== null) ?
        <Alert id={"alert"} className={`${fadeIn ? " fade-in " : ""} ${fadeOut ? " fade-out " : ""}`} type={emailAlert.type} header={emailAlert.header} subheader={emailAlert.subheader}/>
        :
        ""
        }
      </section>
    )
  }