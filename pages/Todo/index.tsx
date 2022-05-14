import React, { useCallback } from "react";
import { Redirect } from "react-router";

import { Container } from "@pages/Todo/style";

import { useCookies } from "react-cookie";


const Todo = ()=>{
    const [ cookies, setCookie, removeCookie ] = useCookies(['access-token']);
    
    const onClick = useCallback((e)=>{
        removeCookie("access-token");
    }, [cookies])

    if(cookies["access-token"] === undefined){
        return <Redirect to="/"></Redirect>
    }

    return(
        <Container>
            <button onClick={onClick}>
                로그아웃
            </button>
            todo 화면
        </Container>
    )
}

export default Todo;