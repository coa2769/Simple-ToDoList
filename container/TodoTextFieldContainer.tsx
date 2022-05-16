import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import { RootState } from "@store/index";

import { 
    addTodo, 
    modifyTodo, 
    deleteTodo, 
    completeTodo } from "@store/todolist";

import TodoTextField from "@components/TodoTextField";
import { TodoTextFieldType } from '@typings/data';    

type TodoTextFieldContainerProps = {
    value : string;
    id : number;
    type : TodoTextFieldType;
};

const TodoTextFieldContainer = ({
        value,
        id,
        type
    }: TodoTextFieldContainerProps)=>{
    const dispatch = useDispatch();

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
        <TodoTextField
            value={value}
            id={id}
            type={type}
            onAdd={onAddTodo}
            onModify={onModifyTodo}
            onComplete={onCompleteTodo}
            onDelete={onDeleteTodo}
        />

        
    )

}

export default TodoTextFieldContainer;
