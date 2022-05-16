import styled from '@emotion/styled';



import { TodoTextFieldType } from '@typings/data';    

type TextFieldProps = {
    type : TodoTextFieldType;
}

export const Container = styled.div`
    width : 100%;
    height : 100%;

    display : flex;
    align-items : center;
    justify-content : center;
`;

export const TodoListBox = styled.div`
    border : 1px solid blue;
    width : 370px;
    height : 417px;

    margin-right : 208px;

    h5 {
        margin : 0;
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        color : #131924;

        height : 36px;
        margin-bottom : 16px;
    }

 
`;

export const DoneListBox = styled.div`
    width : 370px;
    height : 417px;
`;




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
