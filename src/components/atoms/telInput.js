import { useState } from 'react'

export default function TelInput ({forName, labelName, placeholderName, name, formId, className}) {

  const [input, setInput] = useState("");
  const [typeError, setTypeError] = useState(false);

    function setValue(value){
      value = value.replace(/\D+/g, "");
      if(value.length>3)value = value.slice(0, 3) + " " + value.slice(3);
      if(value.length>7)value = value.slice(0, 7) + " " + value.slice(7);
      if(value.length>11)value = value.slice(0, 11);
      setInput(value)
    }

    function validate(e){
      if(input.length > 0 && input.length < 11)setTypeError(true);
      if(input.length == 11){
        setTypeError(false);
      }
    }


    return (
      <div className={`flex flex-col mx-auto ${className}`}>
          <input type="text" id={forName} value={input} onInput={e => setValue(e.target.value)} onBlur={e=>validate(e)} name={name} className={`shadow-sm bg-background border ${(!typeError) ? "border-teal-300 focus:border-teal-600" : "border-red-600 focus:border-red-400"} outline-none text-sm rounded-lg  block p-2.5`} placeholder={placeholderName}/>
          <div className='relative'>
            {(typeError) ? <span id={`${formId}_error_type`} className={`text-red-500 text-[14px] absolute`}>Nieprawidłowy numer telefonu</span> : ""}
          </div>
      </div>
    )
}
