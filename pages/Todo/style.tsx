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

export const TodoBox = styled.div`
    width : 400px;
    height : 417px;
    
    min-width : 400px;
    min-height : 417px;

    margin-right : 208px;

    position : relative;

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

    .addTodoButton {
        position : absolute;
        left : 0px;
        top : 420px;
        background-color : #0053F4;
    }
 
`;

export const DoneBox = styled.div`
    width : 400px;
    height : 417px;

    min-width : 400px;
    min-height : 417px;

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

export const ListBox = styled.div`
    width : 100%;
    height : 360px;
    
    overflow: auto; 
`;

// overflow: auto;

//border : 1px solid blue;

// export const TodoBox = styled.div`
//     width : 100%;
//     height : 72px;
//     padding : 16px 0px;

//     .deleteButton{
//         color : #DB3645;
//     }

//     .completeButton{
//         background-color : #0053F4;
//     }

//     .modifyButton{
//         color : #142C67;
//     }

// `;
