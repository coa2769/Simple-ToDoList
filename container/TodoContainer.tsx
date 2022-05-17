import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@store/index";

import { 
    addTodo, 
    modifyTodo, 
    deleteTodo, 
    completeTodo,
    initTodo,
    TodolistState } from "@store/todolist";
import Todo from '@pages/Todo';

const TodoContainer = ()=>{
    const todolist = useSelector((state : RootState)=>state.todos);
    const dispatch = useDispatch();

    const onInitTodo = (todolist : TodolistState)=>{
        dispatch(initTodo(todolist));
    };

    const onAddTodo = (value : string)=>{
        dispatch(addTodo(value));
    };

    const onModifyTodo = (id : number, value : string)=>{
        dispatch(modifyTodo(id, value));
    };

    const onCompleteTodo = (id : number)=>{
        dispatch(completeTodo(id));
    }

    const onDeleteTodo = (id : number)=>{
        dispatch(deleteTodo(id));
    };

    return(
        <Todo
            todolist={todolist}
            onInitTodo={onInitTodo}
            onAddTodo={onAddTodo}
            onModifyTodo={onModifyTodo}
            onCompleteTodo={onCompleteTodo}
            onDeleteTodo={onDeleteTodo}
        />

        
    )

}

export default TodoContainer;
