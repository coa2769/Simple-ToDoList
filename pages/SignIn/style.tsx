import styled from '@emotion/styled';

export const Container = styled.div`
    width : 100%;
    height : 100%;

    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

export const LginForm = styled.form`
    width : 370px;
    height : 356px;

    margin : 0px 0px 10px 0px;

    display : flex;
    flex-direction : column;
    justify-content : space-between;

    position : relative;

    h5 {
        margin : 0;
        font-size : 24px;
        height : 36px;
    }

    .MuiInputLabel-root.Mui-focused {
        color : #0053F4;
    }

    .MuiFilledInput-root{
        background-color : #F9FBFF;
        border-radius: 8px 8px 0px 0px;
        box-shadow: 0px 12px 24px rgba(0, 83, 244, 0.12);
    }

    .MuiFilledInput-root.Mui-focused{
        background-color : #F9FBFF;
    }

    .MuiFilledInput-root.Mui-focused::after {
        border-bottom-color : #0053F4;
    }

    .submit-button{
        height : 56px;
        background-color : #0053F4;
        border-radius: 12px;
        box-shadow: 0px 6px 12px rgba(0, 83, 244, 0.2);
    }

    .alert-error {
        position : absolute;
        left : 5px;
        top : 370px;
    }
    
`;