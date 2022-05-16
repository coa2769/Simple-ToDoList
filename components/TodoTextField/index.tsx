import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";

// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';

import { TodoTextFieldType } from '@typings/data';    

import {
    TodoBox,
    // CustomTextField,
    CustomButton,
    DisabledTextField,
    ActivateTextField
} from '@components/TodoTextField/style'

type TodoTextFieldProps = {
    value : string;
    id : number;
    type : TodoTextFieldType;
    onAdd : (valud : string)=>void;
    onModify : (id : number, value : string)=>void;
    onDelete : (id : number)=>void;
    onComplete : (id : number)=>void;
}


const TodoTextField = ({
    value,
    id,
    type,
    onAdd,
    onModify,
    onDelete,
    onComplete
} : TodoTextFieldProps)=>{
    const [ currentText, onChangeCurrentText, setCurrentText ] = useInput(value);
    const [ currentType, setCurrentType ] = useState(type);
    
    const onDoubleClick = useCallback((e)=>{
        e.preventDefault();
        if(currentType !== 'modify'){
            setCurrentType('modify');
            setCurrentText(value);
        } 
    }, [ currentText, currentType ]);

    const onClickDeleteButton = useCallback((e)=>{
        console.log(id);
        onDelete(id);
    }, [id]);

    const onClickCompleteButton = useCallback((e)=>{
        onComplete(id);
    }, [id]);

    const onClickModifyButton = useCallback((e)=>{
        if(currentType === 'modify'){
            onModify(id, currentText);
        }else if(currentType === 'add'){
            onAdd(currentText);
        }

        setCurrentType('nomal');
    }, [currentText, currentType, id]);

    useEffect(()=>{
        setCurrentText(value);
    },[value]);

    return(
        <TodoBox>
            {/* 더블 클릭 시 수정으로 변경 */}
            { currentType === 'nomal' ?
                <DisabledTextField
                    disabled
                    name="todo"
                    variant="outlined"
                    size="small"
                    value={value}
                    onDoubleClick={onDoubleClick}
                /> :
                <ActivateTextField
                    name="todo"
                    variant="outlined"
                    size="small"
                    value={currentText}
                    onChange={onChangeCurrentText}
                    onDoubleClick={onDoubleClick}
                    className=""
                />
            }
            {/* <CustomTextField
                disabled={currentType === "nomal"}
                type={currentType}
                name="todo"
                variant="outlined"
                size="small"
                value={value}
                onChange={onChangeCurrentText}
                onDoubleClick={onDoubleClick}
            /> */}
            <CustomButton variant="text" className="deleteButton" onClick={onClickDeleteButton}>
                삭제
            </CustomButton> 
            { currentType === 'nomal' ? 
                <CustomButton variant="contained" className="completeButton" onClick={onClickCompleteButton}>
                    완료
                </CustomButton> : 
                <CustomButton variant="text" className="modifyButton" onClick={onClickModifyButton}>
                    수정
                </CustomButton>  
            }
        </TodoBox>  
    )
};

export default TodoTextField;