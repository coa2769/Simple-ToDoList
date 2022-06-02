import React, { useCallback, useState } from "react";
import { Redirect } from "react-router";

import {
    Container,
    LginForm
} from '@pages/SignIn/style';

import useInput from '@hooks/useInput';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { useCookies } from "react-cookie";
import axios from 'axios';

const SignIn = ()=>{
    const [logInError, setLogInError] = useState(false);
    const [ cookies, setCookie ] = useCookies(['access-token']);

    const [ email, onChangeEmail ] = useInput('');
    const [ password, onChangePassword ] = useInput('');
    
    const onSubmit = useCallback(
        (e)=>{
            e.preventDefault();
            setLogInError(false);

            //1. API 서버가 작동하지 않을 때
            // const expires = new Date();
            // expires.setMinutes(expires.getMinutes() + 60);
            // setCookie('access-token', '123123123', {
            //     path : '/', 
            //     expires,
            // });            

            //2. API 서버가 작동하고 있을 때
            axios.post(
                '/todo/login', 
                { "user_id" : email, "user_pw" : password },
            )
            .then((res)=>{
                const expires = new Date();
                expires.setMinutes(expires.getMinutes() + 60);
                setCookie('access-token', res.data.access_token, {
                    path : '/', 
                    expires,
                });
            })
            .catch((error)=>{
                console.error(error);
                setLogInError(error.response?.status === 401);
            });
        },
        [email, password, logInError, cookies]
    );
    
    if(cookies["access-token"] !== undefined){
        return <Redirect to="/list"></Redirect>
    }

    return(
        <Container>
            <LginForm onSubmit={onSubmit}>
                <h5>로그인</h5>
                <TextField
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant="filled"
                    value={email}
                    onChange={onChangeEmail}
                />
                <TextField
                    fullWidth
                    id="password"
                    label="비밀번호"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    value={password}
                    onChange={onChangePassword}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="submit-button"
                >
                    로그인
                </Button>
                { logInError && 
                    <Alert className="alert-error" severity="error">이메일과 비밀번호 조합이 일치하지 않습니다.</Alert>
                }
            </LginForm>
        </Container>
    )
}

export default SignIn;