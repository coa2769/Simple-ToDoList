import React, { useCallback, useState } from "react";

import {
    Container,
    LginForm
} from '@pages/SignIn/style';

import useInput from '@hooks/useInput';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import axios from 'axios';

const SignIn = ()=>{
    const [logInError, setLogInError] = useState(false);

    const [ email, onChangeEmail ] = useInput('');
    const [ password, onChangePassword ] = useInput('');

    // const [ email, setEmail ] = useState('');
    // const [ password, setPassword ] = useState('');

    // const onChangeEmail = useCallback((e)=>{
    //     console.log(e.currentTarget.value);
    //     setEmail(e.currentTarget.value);
    // }, [email]);

    // const onChangePassword = useCallback((e)=>{
    //     console.log(e.currentTarget.value);
    //     setPassword(e.currentTarget.value);
    // }, [password]);
    
    const onSubmit = useCallback(
        (e)=>{
            e.preventDefault();
            console.log('email', email);
            console.log('password', password);

            axios.post(
                '/todo/login', 
                { "user_id" : email, "user_pw" : password },
                { withCredentials: true, }
            )
            .then((res)=>{
                console.log(res);
            })
            .catch((error)=>{
                setLogInError(error.response?.data?.code === 401);
            });
        },
        [email, password]
    );

    // if(!error && )

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
                className="submitButton"
            >
                로그인
            </Button>
            </LginForm>
        </Container>
    )
}

export default SignIn;