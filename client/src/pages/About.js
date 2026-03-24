import { Box, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import WorkerCard from "./components/WorkerCard";
import theme from "../theme";
import config from "../config.json";
import WorkerInfoCard from "./components/WorkerInfoCard";

const serverAPI = axios.create({
    baseURL: config.baseURL,
    headers: config.headers,
})

const About = () => {
    const [workersList, setHallsList] = useState([]);

    let informationCheck = true;
    function information() {
        informationCheck = false;
        return (
            <Grid item sm={6} md={4}>
                <Box sx={{ textAlign: "left" }}>
                    <Box component={"h2"} sx={{ margin: "0" }}>Наша команда:</Box>
                    <Typography>Все сотрудники являются профессионалами своего дела и готовы воплотить любые Ваши идеи!<br /><br /></Typography>
                    <Typography sx={{ display: { xs: "block",  lg: "block" } }}>Просто напишите нам в соц.сетях или оставьте свой вопрос в форме.</Typography>
                </Box>
            </Grid>
        )
    }

    useEffect(() => {
        const apiUrl = '/api/about';
        serverAPI.get(apiUrl, {
            headers: config.headers,
        })
            .then((resp) => {
                const serverData = resp.data;
                console.log(`got serverdata `, { serverData })
                setHallsList(serverData.about);
            })
            .catch((error) => { console.log("error ", error.message) });
    }, [])

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ margin: { xs: "0 7%", md: "9% 7% 0", lg: "7% 7% 0", }, }}>
                    <Box component={"h1"} sx={{ marginTop: "0", color: theme.palette.primary.main }}>
                        О нас
                    </Box>
                    <Typography color={"primary"} sx={{ fontSize: "18px", margin: "0 3%" }}>
                        Фотостудия “Сепия” приглашает Вас! Обновлённые локации, профессиональные фотографы, современное оборудование и отзывчивый коллектив.<br /><br />
                        Общая площадь студий более 500 м²,  огромные окна, импульсный свет Profoto, аренда постоянного света Arri, Aputure, GreenBean. <br /><br />
                        В залах фото студии расположены декорации и реквизиты в различной стилистике. Возможна разработка или монтаж декораций «под заказ». <br /><br />
                        Рабочие помещения оборудованы всем необходимым: помещение для отдыха, гримерки, WiFi, колонки
                    </Typography>
                </Box>
                <Box sx={{ margin: "3% 7%" }}>
                    <Box component={"h1"} sx={{ marginTop: "0", mb: "0", color: theme.palette.primary.main }}>
                        Наша команда
                    </Box>

                    <Grid container spacing={2} alignItems={"center"}
                        sx={{
                            textAlign: "center",
                            color: theme.palette.primary.main,
                            display: { xs: "none", sm: "flex" }
                        }}
                    >
                        {workersList.map((worker) => {
                            return (
                                <React.Fragment key={worker._id}>
                                    <Grid item sm={6} md={4}>
                                        <WorkerCard
                                            id={'worker' + worker._id}
                                            image={worker.img}
                                            worker={worker.profession}
                                            name={worker.name}
                                        />
                                    </Grid>
                                    {(informationCheck) ? information() : false}
                                </React.Fragment>
                            )
                        })}
                    </Grid>
                </Box>

                <Box>
                    {workersList.map((worker, key) => {
                        return (
                            <React.Fragment key={worker._id}>
                                <WorkerInfoCard
                                    _id={'worker' + worker._id}
                                    side={key}
                                    image={worker.img}
                                    profession={worker.profession}
                                    name={worker.name}
                                    info={worker.info}
                                    schedule={worker.schedule}
                                    salary={worker.salary}
                                    works={worker.works}
                                />
                            </React.Fragment>
                        )
                    })}
                </Box>

            </ThemeProvider>
        </>
    )
}

export default About;