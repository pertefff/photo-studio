import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, OutlinedInput, Tooltip } from "@mui/material";
import axios from "axios";
import { isNil } from "lodash";
import React, { useState } from "react";
import theme from "../../theme";
import config from "../../config.json"
import { validateName, validateEmail } from "../validation"

const serverAPI = axios.create({
    baseURL: config.baseURL,
    headers: config.headers,
})

const QuestionForm = () => {

    const defaultFormValue = {
        name: '',
        email: '',
        question: ''
    };

    const [form, setForm] = useState(defaultFormValue)
    const [errorInput, setErrorInput] = useState({})

    const changeHandler = (event) => {
        let errorInputEvent = '';

        if (event.target.name === 'name') {
            errorInputEvent = validateName(event.target.value)
        }
        if (event.target.name === 'email') {
            errorInputEvent = validateEmail(event.target.value)
        }

        if (errorInputEvent !== '') {
            setErrorInput({ ...errorInput, [event.target.name]: errorInputEvent });
        }
        if (errorInputEvent === '') setErrorInput({ ...errorInput, [event.target.name]: '' });

        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form)

    }

    const submitForm = () => {
        for (let key in form) {
            if (form[key] === '') {
                setDialogData({
                    title: "Ошибка",
                    text: `Поля не могут быть пустыми`,
                });
                return
            }
        }

        for (let key in errorInput) {
            if (errorInput[key] !== '') {
                setDialogData({
                    title: "Ошибка",
                    text: `Ошибка ввода`,
                });
                return
            }
        }

        setQuestion();
    }

    const setQuestion = () => {
        try {
            serverAPI.post('/api/question', { ...form }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    console.log(response);
                    setDialogData({
                        title: "Спасибо за Ваше обращение!",
                        text: "Мы ответим на вопрос в ближайшее время",
                    });
                    setForm(defaultFormValue);
                })
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }

    const [dialogData, setDialogData] = React.useState();

    const handleClose = () => {
        setDialogData(null);
    };

    return (
        <>
            <form method="POST" id="formQuestion">
                <Box component={"h3"}
                    sx={{ marginTop: "0", color: theme.palette.primary.main }}>
                    Или заполните форму:
                </Box>
                <Tooltip title={errorInput.name} arrow placement="bottom-start">
                    <OutlinedInput
                        name="name"
                        placeholder="Введите имя"
                        fullWidth
                        onChange={changeHandler}
                        error={!!errorInput.name}
                        value={form.name}
                    />
                </Tooltip>

                <Tooltip title={errorInput.email} arrow placement="bottom-start">
                    <OutlinedInput
                        name="email"
                        placeholder="Введите e-mail"
                        fullWidth
                        onChange={changeHandler}
                        error={!!errorInput.email}
                        value={form.email}
                    />
                </Tooltip>

                <OutlinedInput
                    name="question"
                    placeholder="Ваш вопрос"
                    fullWidth
                    multiline rows={4}
                    onChange={changeHandler}
                    value={form.question}
                />

                <Button onClick={submitForm} fullWidth>Отправить</Button>
            </form>

            <Dialog
                open={!isNil(dialogData)}
                onClose={handleClose}
            >
                <DialogTitle id="alert-dialog-title" sx={{color: theme.palette.primary.main}}>
                    {dialogData?.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {dialogData?.text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        sx={{ fontSize: "16px", padding: '5px 0', margin: "0 auto" }}>
                        Ок
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default QuestionForm