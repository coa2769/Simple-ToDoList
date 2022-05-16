import React, { useCallback, useEffect, useState } from "react";
import useInput from "@hooks/useInput";

import {
    TodoBox,
    CustomButton,
    DisabledTextField,
} from '@components/TodoTextField/style'

type TodoTextFieldProps = {
    value : string;
    id : number;
}

const DoneTextField = ({
    value,
    id,
} : TodoTextFieldProps)=>{
    

    return(
        <TodoBox>
            <DisabledTextField
                disabled
                name="todo"
                variant="outlined"
                size="small"
                value={value}
            />
            <CustomButton disabled variant="text" className="deleteButton">
                삭제
            </CustomButton> 
            <CustomButton disabled variant="contained" className="completeButton">
                완료
            </CustomButton> 
        </TodoBox>  
    )
};

export default DoneTextField;