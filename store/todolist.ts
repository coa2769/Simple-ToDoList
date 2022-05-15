import { Todo } from '@typings/data';
import { Set } from "typescript";
import { randomNum } from '@utils/radom';

const usedID = new Set<number>();

//action type 선언
const ADD = 'todolist/ADD' as const;
const MODIFY = 'todolist/MODIFY' as const;
const DELETE = 'todolist/DELETE' as const;
const COMPLETE = 'todolist/COMPLETE' as const;
const INIT = 'todolist/INIT' as const;

//액션 함수
export const addTodo = (value : string)=>{
  //랜덤한 id 생성
  let id : number;
  do{
    id = randomNum(0, 99);
  }while(usedID.has(id))

  return {
    type : ADD,
    payload : {
      value,
      id
    }
  }
};

export const modifyTodo = (id : number, value : string)=>({
  type : MODIFY,
  payload : {
    id,
    value
  }
});

export const deleteTodo = (id : number)=>({
  type : DELETE,
  payload : id
});

export const completeTodo = (id : number)=>({
  type : COMPLETE,
  payload : id
});

export const initTodo = (todolist : Array<Todo>)=>({
  type : INIT,
  payload : todolist
});

//모든 액션 객체들에 대한 타입을 준비
// ReturnType<typeof _____> 는 특정 함수의 반환값을 추론해줍니다
type TodolistAction = 
  | ReturnType<typeof addTodo>
  | ReturnType<typeof modifyTodo>
  | ReturnType<typeof deleteTodo>
  | ReturnType<typeof completeTodo>
  | ReturnType<typeof initTodo>;

////해당 리덕스 모듈에서 관리할 상태의 타입 정의
export type TodolistState = Array<Todo>;

//초기 상태 선언
const initialState : TodolistState = [];

//리듀서 작성
export function todos(state : TodolistState = initialState, action : TodolistAction) : TodolistState {
  let newTodolist : TodolistState = JSON.parse(JSON.stringify(state));
  // const { id, todo, todolist } = action.payload;

  switch(action.type){
    case ADD:{
      const { id, value } = action.payload;
      newTodolist.push({id, value, done : false});
      usedID.add(id);
      return newTodolist;
    }
    case MODIFY:{
      const { id, value } = action.payload;
      newTodolist.forEach((todo)=>{
        if(todo.id === id) todo.value = value;
      });
      return newTodolist;
    }
    case DELETE:{
      usedID.delete(action.payload);
      return state.filter((todo)=>todo.id !== action.payload);
    }
    case COMPLETE: {
      newTodolist.forEach((todo)=>{
        if(todo.id === action.payload) todo.done = true;
      });
      return newTodolist;
    }
    case INIT: {
      action.payload.forEach((todo)=>{
        newTodolist.push(todo);
        usedID.add(todo.id);
      })
      return newTodolist;
    }
    default:
      return state;
      
  }
}






