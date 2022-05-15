import React, { useCallback, useEffect } from "react";
import { Redirect } from "react-router";

import { 
    Container,
    TodoBox,
    DoneBox } from "@pages/Todo/style";

import { useCookies } from "react-cookie";
import { TodolistState } from '@store/todolist';
import { Todo } from '@typings/data';

import axios from "axios";

type TodoProps = {
    todolist : TodolistState;
    onInitTodo: (todolist : TodolistState)=>void;
    onAddTodo: (value : string)=>void;
    onModifyTodo: (id : number, value : string)=>void;
    onCompleteTodo: (id : number)=>void;
    onDeleteTodo: (id : number)=>void;
}

const maxCount = 10;

const Todo = ({
    todolist,
    onInitTodo,
    onAddTodo,
    onModifyTodo,
    onCompleteTodo,
    onDeleteTodo,
} : TodoProps)=>{
    const [ cookies, setCookie, removeCookie ] = useCookies(['access-token']);

    useEffect(()=>{
        console.log(cookies["access-token"]);
        axios.get(
            '/todo/me', 
            { 
                headers : {'Authorization' : 'Bearer ' + cookies["access-token"]}
            }
        )
        .then((res)=>{
            const list : TodolistState = res.data.result["todo-list"].map(
                (todo : Todo)=>({id : todo.id, value : todo.value, done : false }));

            onInitTodo(list);

        }).catch((error)=>{
            console.log(error);
        });

    }, [todolist]);

    const onClick = useCallback((e)=>{
        removeCookie("access-token");
    }, [cookies])

    if(cookies["access-token"] === undefined){
        return <Redirect to="/"></Redirect>
    }

    return(
        <Container>
            <TodoBox>

            </TodoBox>
            <DoneBox>
                
            </DoneBox>
            <button onClick={onClick}>
                로그아웃
            </button>
            todo 화면
        </Container>
    )
}

export default Todo;