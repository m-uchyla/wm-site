
import { useState } from 'react';
  
export default function Input({type, forName, labelName, placeholderName, name, isRequired, formId,className}) {

  const [input, setInput] = useState("");
  const [typeError, setTypeError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);

  function validate(e){
    if(isRequired && input.length === 0)setRequiredError(true);
    if(input.length > 0){
      setRequiredError(false);
      if(type == "email")setTypeError(!(emailValidation(input)));
    }
  }

  function emailValidation(email){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (regex.test(email));
  }

    return (
      <div className={`flex flex-col mx-auto ${className}`}>
        <input type={type} id={forName} value={input} onInput={e => setInput(e.target.value)} onBlur={e=>validate(e)} name={name} className={`shadow-sm bg-background border ${(!typeError && !requiredError) ? "border-secondary focus:border-primary" : "border-red-600 focus:border-red-400"} text-white outline-none text-sm rounded-lg  block p-2.5`} placeholder={placeholderName}/>
        <div className='relative'>
          {(requiredError) ? <span id={`${formId}_error_empty`} className={`text-red-500 text-[14px] absolute`}>{labelName} nie może być pusty</span> : ""}
          {(typeError && !requiredError) ? <span id={`${formId}_error_type`} className={`text-red-500 text-[14px] absolute`}>Nieprawidłowy adres email</span> : ""}
        </div>
      </div>
    )
}