import React from "react";
import { Link } from 'react-router-dom';

import {
    Container,
    LginForm
} from '@pages/SignIn/style';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignIn = ()=>{

    return(
        <Container>
            <LginForm>
                <h5>로그인</h5>
                <TextField
                    fullWidth
                    id="email"
                    label="이메일"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    variant="filled"
                />
                <TextField
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    variant="filled"
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