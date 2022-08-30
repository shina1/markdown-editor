import { useEffect, useState } from 'react'

//  React.TextareaHTMLAttributes<HTMLTextAreaElement>.cols?: number | string 
const useTextInputCustomHook = (key:string, initalValue: string = ''):any => {
    
    const [state,  setState] = useState(() => {
        const textFromLS:string | null = window.localStorage.getItem(key);
        if(textFromLS){
            return JSON.parse(textFromLS)
        }
        return initalValue;
    })
    useEffect(()=> {
            window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state])

    return [state, setState]
}

export default useTextInputCustomHook
