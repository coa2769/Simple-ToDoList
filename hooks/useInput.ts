import { Dispatch, SetStateAction, useCallback, useState  } from "react";

//input tag의 onChange 이벤트 함수
type Handler = (e:any)=>void;
//useInput의 반환값
type ReturnTypes<T = any> = [T, Handler, Dispatch<SetStateAction<T>>]
//Dispatch<SetStateAction<T>>는 useState의 setValue의 타입이다. (https://basemenks.tistory.com/241)

const useInput = <T = any>( initialValue : T): ReturnTypes<T> =>{
    const [value, setValue ] = useState(initialValue);
    const handler = useCallback((e)=>{
        console.log(e.currentTarget.value);
        setValue(e.currentTarget.value);
    }, [value]);
    return [value, handler, setValue];
};

export default useInput;