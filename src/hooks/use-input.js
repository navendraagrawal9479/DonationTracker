import {useState} from "react";

const useInput = (validateValue)=>{
    const [enteredValue,setEnteredValue] = useState('');
    const [isTouched,setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event)=>{
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = (event)=>{
        setIsTouched(true)
    }

    const reset = ()=>{
        setEnteredValue('');
        setIsTouched(false)
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError, // hasError: hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
        //passing the functions so that they can be called in the file where 
        //this hook is been used
    }
}

export default useInput;