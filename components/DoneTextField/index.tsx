import React from "react";

import {
    TodoBox,
    CustomButton,
    DisabledTextField,
} from '@components/DoneTextField/style'

type DoneTextFieldProps = {
    value : string;
}

const DoneTextField = ({
    value,
} : DoneTextFieldProps)=>{
    

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