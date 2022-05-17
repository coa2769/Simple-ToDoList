import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";

import { TodoTextFieldType } from '@typings/data';    

import {
    TodoBox,
    CustomButton,
    DisabledTextField,
    ActivateTextField
} from '@components/TodoTextField/style'

type TodoTextFieldProps = {
    value : string;
    id : number;
    type : TodoTextFieldType;
    onModify : (id : number, value : string)=>void;
    onDelete : (id : number)=>void;
    onComplete : (id : number)=>void;
    disableDelete : boolean;
}

const TodoTextField = ({
    value,
    id,
    type,
    onModify,
    onDelete,
    onComplete,
    disableDelete
} : TodoTextFieldProps)=>{
    const [ currentText, onChangeCurrentText, setCurrentText ] = useInput(value);
    const [ currentType, setCurrentType ] = useState(type);
    
    const onDoubleClick = useCallback((e)=>{
        e.preventDefault();
        if(currentType !== 'modify'){
            setCurrentType('modify');
            setCurrentText(value);
        } 
    }, [ currentText, currentType, value ]);

    const onClickDeleteButton = useCallback((e)=>{
        onDelete(id);
    }, [id]);

    const onClickCompleteButton = useCallback((e)=>{
        onComplete(id);
    }, [id]);

    const onClickModifyButton = useCallback((e)=>{
        onModify(id, currentText);
  
        setCurrentType('nomal');
    }, [currentText, currentType, id]);

    // useEffect(()=>{
    //     setCurrentText(value);
    // },[value]);

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
                />
            }
            <CustomButton 
                disabled={disableDelete}
                variant="text" 
                className="deleteButton" 
                onClick={onClickDeleteButton}>
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