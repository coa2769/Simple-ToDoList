import React, { useCallback, useEffect } from "react";
import { Redirect } from "react-router";

import { 
    Container,
    TodoListBox,
    DoneListBox,
    TodoBox } from "@pages/Todo/style";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import TodoTextField from "@components/TodoTextField";
import TodoTextFieldContainer from "@container/TodoTextFieldContainer";
import TodoTextField from "@components/TodoTextField";
import ModifyTextField from "@components/ModifyTextField";

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
        axios.get(
            '/todo/me', 
            { 
                headers : {'Authorization' : 'Bearer ' + cookies["access-token"]}
            }
        )
        .then((res)=>{
            console.log(res.data.result["todo-list"]);
            const list : TodolistState = res.data.result["todo-list"].map(
                (todo : Todo, index : number)=>({id : index, value : todo.value, done : false }));
            onInitTodo(list);

        }).catch((error)=>{
            console.log(error);
        });

    }, []);

    // const deleteTodo = useCallback((id : number)=>{
    //     onDeleteTodo(id);
    //     console.log(todolist);
    // }, [todolist]);

    // const onClick = useCallback((e)=>{
    //     removeCookie("access-token");
    // }, [cookies])
    const onChange = useCallback((e)=>{
        
    }, [todolist])

    const onClickDeleteButton = useCallback((e)=>{
        console.log(e.currentTarget.value);
        // e.currentTarget.
        onDeleteTodo(Number(e.currentTarget.value));
    }, [todolist]);

    const onClickCompleteButton = useCallback((e)=>{

    }, [todolist])

    if(cookies["access-token"] === undefined){
        return <Redirect to="/"></Redirect>
    }

    return(
        <Container>
            <TodoListBox>
                <h5>Todo</h5>
            {/* 이미 있는 Todolist출력 */}
            {
                todolist.map((todo, index)=>(
                //     <TodoBox key={index}>
                //     {/* 더블 클릭 시 수정으로 변경 */}
                    // <TextField
                    //     disabled
                    //     name="todo"
                    //     variant="outlined"
                    //     size="small"
                    //     value={todo.value}
                    //     // key={todo.id}
                    //     onChange={onChange}
                    //     // onDoubleClick={onDoubleClick}
                    // />
                //     <Button variant="text" value={todo.id} className="deleteButton" onClick={onClickDeleteButton}>
                //         삭제
                //     </Button>
                //     <Button variant="contained" value={todo.id} className="completeButton" onClick={onClickCompleteButton}>
                //         완료
                //     </Button> : 
                //     {/* { currentType === 'nomal' ? 
                //         <CustomButton variant="contained" className="completeButton" onClick={onClickCompleteButton}>
                //             완료
                //         </CustomButton> : 
                //         <CustomButton variant="text" className="modifyButton" onClick={onClickModifyButton}>
                //             수정
                //         </CustomButton>  
                //     } */}
                // </TodoBox>
                <div className="" key={index}>
                    <TodoTextField
                        // key={index}
                        value={todo.value}
                        id={todo.id}
                        type="nomal"
                        onAdd={onAddTodo}
                        onModify={onModifyTodo}
                        onDelete={onDeleteTodo}
                        onComplete={onCompleteTodo}
                    />
                    {/* <ModifyTextField
                        // key={index}
                        value={todo.value}
                        id={todo.id}
                        onAdd={onAddTodo}
                        onModify={onModifyTodo}
                        onDelete={onDeleteTodo}
                        // value={todo.value}
                        // id={todo.id}
                        // onAdd={onAddTodo}
                        // onModify={onModifyTodo}
                        // onDelete={onDeleteTodo}
                    /> */}
                </div>

                    
                    // <TodoTextFieldContainer
                    //     key={index}
                    //     value={todo.value}
                    //     id={todo.id}
                    //     type="nomal"
                    //     // onAdd={onAddTodo}
                    //     // onModify={onModifyTodo}
                    //     // onDelete={deleteTodo}
                    //     // onComplete={onCompleteTodo}
                    // />    
                ))
            }
            {/* 추가할 때 사용되는 TextField */}
            </TodoListBox>
            {/* <DoneListBox>

            </DoneListBox> */}
            {/* <button onClick={onClick}>
                로그아웃
            </button>
            todo 화면 */}
        </Container>
    )
}

export default TodoListPage;