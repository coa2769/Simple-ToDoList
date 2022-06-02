import React, { useCallback, useEffect, useState, useMemo } from "react";

import { 
    Container,
    TodoBox,
    DoneBox,
    ListBox,
    Title
} from "@pages/Todo/style";

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import TodoTextField from "@components/TodoTextField";
import DoneTextField from "@components/DoneTextField";

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

const TodoListPage = ({
    todolist,
    onInitTodo,
    onAddTodo,
    onModifyTodo,
    onCompleteTodo,
    onDeleteTodo,
} : TodoProps)=>{
    const [ cookies, setCookie, removeCookie ] = useCookies(['access-token']);

    useEffect(()=>{
        API 서버가 작동하고 있을 때
        axios.get(
            '/todo/me', 
            { 
                headers : {'Authorization' : 'Bearer ' + cookies["access-token"]}
            }
        )
        .then((res)=>{
            const list : TodolistState = res.data.result["todo-list"].map(
                (todo : Todo, index : number)=>({id : index, value : todo.value, done : false }));
            onInitTodo(list);

        }).catch((error)=>{
            console.log(error);
        });

    }, []);

    const todoListCount = useMemo(()=>{
        let count = 0;
        todolist.forEach((todo)=>{if(todo.done === false)count++})
        return count;
    }, [todolist])

    const onClickAddButton = useCallback((e)=>{
        onAddTodo('');
    }, [todolist])

    return(
        <Container>
            <TodoBox>
                <Title>Todo</Title>
                {/* 이미 있는 Todolist출력 */}
                <ListBox>
                {
                    todolist.map((todo, index)=>(
                        !todo.done ?
                        <TodoTextField
                            key={index}
                            value={todo.value}
                            id={todo.id}
                            type="nomal"
                            onModify={onModifyTodo}
                            onDelete={onDeleteTodo}
                            onComplete={onCompleteTodo}
                            disableDelete={todoListCount <= 1? true : false}
                        /> :
                        null
                    ))
                }
                </ListBox>
                <Fab 
                    disabled={todoListCount >= 10? true : false }
                    color="primary" 
                    className="addTodoButton"
                    onClick={onClickAddButton}>
                    <AddIcon />
                </Fab>
            {/* 추가할 때 사용되는 TextField */}
            </TodoBox>
            <DoneBox>
                <Title>Done</Title>
                <ListBox>
                {
                    todolist.map((todo, index)=>(
                        todo.done ?
                        <DoneTextField
                            key={index}
                            value={todo.value}
                            // id={todo.id}
                        /> :
                        null
                    ))
                }
                </ListBox>
            </DoneBox>
        </Container>
    )
}

export default TodoListPage;