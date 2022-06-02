import styled from '@emotion/styled';

export const Header = styled.header`
    position: absolute;
    left: 0px;
    top: 0px;

    width : 100%;
    padding : 8px 24px;

    h1 {
        float : left;
        margin : 0;
    }
    
    a {
        height : 40px;
        color : rgb(19, 45, 111);
        text-decoration: none;
        display : flex;
        align-items: center;
    }

    img{
        height : 40px;
        width : 40px;
        padding-right : 10px;
    }

    
`;

export const Main = styled.main`
    widht : 100%;
    height : 100%;
`;