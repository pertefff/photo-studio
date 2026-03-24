import React, { useState } from "react";
import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import { useLogin, useNotify } from "react-admin";

const LoginCard = (width) => {
    const [form, setForm] = useState({ login: "", password: "" });
    const [errorInput, setErrorInput] = useState();
    const entry = useLogin();
    const notify = useNotify();

    const handleSubmit = event => {
        event.preventDefault();
        let { login, password } = form
        entry({ login, password }).catch(() =>
            notify('Invalid login or password')
        );
    };

    const changeHandler = (event) => {
        let errorInputEvent = '';

        if (event.target.id === 'login') { errorInputEvent = validateLogin(event.target.value) }
        if (event.target.id === 'password') { errorInputEvent = validatePassword(event.target.value) }

        if (!(!!errorInputEvent)) setErrorInput({ ...errorInput, [event.target.id]: '' });
        else setErrorInput({ ...errorInput, [event.target.id]: errorInputEvent })

        setForm({ ...form, [event.target.id]: event.target.value });
        console.log(form)
    }

    const validateLogin = log => {
        const regex = /[A-ZА-Яa-zа-я]{1,}/;
        return !regex.test(log) ? "Заполните поле" : ""
    }
    const validatePassword = pas => {
        const regex = /[A-ZА-Яa-zа-я0-9]{4,}/;
        return !regex.test(pas) ? "Заполните поле" : ""
    }

    return (
        <Card sx={{
            width: width,
            margin: "auto",
            marginTop: "10%"
        }}>
            <CardContent sx={{ flexDirection: "column" }}>
                <Typography variant="h5" sx={{ textAlign: "center" }}><b>Вход</b></Typography>
                <TextField
                    id="login"
                    label="Логин"
                    variant="standard"
                    onChange={changeHandler}
                    value={form.login}
                    error={!!errorInput?.login}
                    helperText={errorInput?.login}
                    fullWidth
                />
                <TextField
                    id="password"
                    type="password"
                    label="Пароль"
                    variant="standard"
                    onChange={changeHandler}
                    value={form.password}
                    error={!!errorInput?.password}
                    helperText={errorInput?.password}
                    fullWidth
                />
                <Button onClick={handleSubmit} variant="contained" fullWidth sx={{ marginTop: "17px" }}>
                    Войти
                </Button>
            </CardContent>
        </Card>
    )
}

export default LoginCard;