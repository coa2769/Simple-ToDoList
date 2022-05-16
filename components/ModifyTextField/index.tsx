import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";

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
    // type : TodoTextFieldType;
    onAdd : (valud : string)=>void;
    onModify : (id : number, value : string)=>void;
    onDelete : (id : number)=>void;
    // onComplete : (id : number)=>void;
}


const ModifyTextField = ({
    value,
    id,
    onAdd,
    onModify,
    onDelete,
} : TodoTextFieldProps)=>{
    const [ currentText, onChangeCurrentText, setCurrentText ] = useInput(value);
    const [ currentType, setCurrentType ] = useState('modify');
    
    const onDoubleClick = useCallback((e)=>{
        e.preventDefault();
        if(currentType !== 'modify'){
            setCurrentType('modify');
        } 
    }, [ currentText, currentType ]);

    const onClickDeleteButton = useCallback((e)=>{
        onDelete(id);
    }, []);

    const onClickModifyButton = useCallback((e)=>{
        if(currentType === 'modify'){
            onModify(id, currentText);
        }else if(currentType === 'add'){
            onAdd(currentText);
        }

        setCurrentType('nomal');
    }, [currentText, currentType]);

    useEffect(function(){
        setCurrentText(value);
        console.log('current',currentText);
        console.log('value', value);
        console.log('id', id);
    })

    return(
        <TodoBox>
            {/* 더블 클릭 시 수정으로 변경 */}
            <ActivateTextField
                name="todo"
                variant="outlined"
                size="small"
                value={currentText}
                onChange={onChangeCurrentText}
                onDoubleClick={onDoubleClick}
                className=""
            />
            <CustomButton variant="text" className="deleteButton" onClick={onClickDeleteButton}>
                삭제
            </CustomButton> 
            <CustomButton variant="text" className="modifyButton" onClick={onClickModifyButton}>
                수정
            </CustomButton>  
        </TodoBox>  
    )
};

export default ModifyTextField;