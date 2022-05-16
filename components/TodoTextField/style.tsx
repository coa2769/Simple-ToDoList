import styled from '@emotion/styled';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import { TodoTextFieldType } from '@typings/data';    

// type TextFieldProps = {
//     type : TodoTextFieldType;
// }

export const TodoBox = styled.div`
    width : 100%;
    height : 72px;
    padding : 16px 0px;

    .deleteButton{
        color : #DB3645;
    }

    .completeButton{
        background-color : #0053F4;
    }

    .modifyButton{
        color : #142C67;
    }

`;

// export const CustomTextField = styled(TextField)<TextFieldProps>`
//     width : 238px;
    
//     background-color : ${(props)=>props.type === 'nomal'? '#fff' : '#DBE2EF'};
//     border-radius : 8px;

//     .MuiOutlinedInput-notchedOutline{
//         border : 0;
//     }
//     .MuiOutlinedInput-input{
//         padding : 8px 8px 8px 12px;
//     }

//     input.Mui-disabled{
//         -webkit-text-fill-color : ${(props)=>props.type === 'nomal'? '#2A3249' : '#5F6E8C'};
//     }
// `;

export const DisabledTextField = styled(TextField)`
    width : 238px;
        
    background-color : #fff;
    border-radius : 8px;

    .MuiOutlinedInput-notchedOutline{
        border : 0;
    }
    .MuiOutlinedInput-input{
        padding : 8px 8px 8px 12px;
    }
    input.Mui-disabled{
        -webkit-text-fill-color : #2A3249;
    }
`;

export const ActivateTextField = styled(TextField)`
width : 238px;
    
background-color : #DBE2EF;
border-radius : 8px;

.MuiOutlinedInput-notchedOutline{
    border : 0;
}
.MuiOutlinedInput-input{
    padding : 8px 8px 8px 12px;
}
input.Mui-disabled{
    -webkit-text-fill-color : #5F6E8C;
}
`;


export const CustomButton = styled(Button)`
    padding : 0;
    margin-left : 5px;
    min-width : 0px;
    width : 60px;
    height : 36px;

    font-family: Pretendard;
    font-style: normal;
    font-weight: 700;


`;