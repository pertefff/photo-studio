import { Box, Button, CssBaseline, Grid, ThemeProvider, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../theme";
import Questions from "./components/Questions"
import SimpleCard from "./components/SimpleCard";
import Circle from "./components/Circle";
import MainHalls from "./components/MainHalls";

const Main = () => {
    const navigate = useNavigate();
    const isMatch = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ width: "100%", paddingBottom: { xs: "0", md: "60px" }, backgroundColor: { xs: "none", md: theme.palette.third.main } }}>
                <Box>
                    <Circle t="7%" r="0" />
                    <Grid container alignItems="center" direction={{ xs: "column-reverse", md: "row" }}
                        sx={{ ml: { xs: "0", md: "7%" }, width: { xs: "100%", md: "86%" }, pt: { xs: "0", md: "15%", lg: "12%" } }}>

                        <Grid item xs={12} md={6}>
                            <Typography variant={"h4"} color={{ xs: theme.palette.secondary.main, md: theme.palette.primary.main }}
                                sx={{
                                    ml: {xs: '2%', md: '0'},
                                    fontWeight: "bold",
                                    mt: { xs: "-65%", md: "-20%" },
                                    mb: {md: "4%", lg: "6%"}
                                }}>
                                Проявляем лучшее - сохраняем важное
                            </Typography>

                            {isMatch && <Button onClick={() => { navigate('/halls#order') }} 
                                style={{
                                    padding: "15px 30px",
                                    marginTop: { xs: "0", md: "4%" },
                                    fontSize: "25px",
                                    mt: "90px"
                                }}>
                                Забронировать
                            </Button>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box component="img" src={isMatch ? "images/main.svg" : "images/main_xs.svg"} alt="ups"
                                sx={{
                                    width: "100%",
                                    zIndex: { md: 7 },
                                    position: { md: "relative" },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Box sx={{ margin: "40px 7% 2% 7%" }}>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
                    <Typography color={"primary"} sx={{ width: { xs: "100%", md: "65%" } }}>
                        Фотостудия “Сепия” предлагает широкий спектр услуг: аренда зала, фотографа и
                        визажиста, а так же предоставление оборудования и реквизита для съёмки.<br />
                        А главное, что после фотосессии Вы можете выбрать понравившиеся снимки, и мы
                        распечатаем их Вам на месте!
                    </Typography>
                    <Box sx={{ color: theme.palette.primary.main, marginLeft: { xs: "0", md: "5%" } }}>
                        <Box component={"h2"} sx={{ margin: { xs: "2% 0 2% 0", md: '0 0 8% 0' } }}>Время работы:</Box>
                        <Typography sx={{ fontSize: 22, marginLeft: '5%', mb: "2%" }}>
                            Пн - Пт:   9:00 - 23:00 <br />
                            Сб  - Вс:   10:00 - 23:00
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Box sx={{ display: { xs: "none", sm: "block" }, width: { sm: "47%", md: "32%" }, }}>
                        <SimpleCard
                            image="images/types_main.svg"
                            text="Фото на документы"
                        />
                    </Box>
                    <Box sx={{ display: { xs: "none", sm: "block" }, width: { sm: "47%", md: "32%" } }}>
                        <SimpleCard
                            image="images/types1_main.svg"
                            text="Семейная съемка"
                        />
                    </Box>
                    <Box sx={{ display: { xs: "none", md: "block" }, width: "32%" }}>
                        <SimpleCard
                            image="images/types2_main.svg"
                            text="Ночная съемка"
                        />
                    </Box>
                </Box>
            </Box>

            <MainHalls />

            <Box color={theme.palette.primary.main} sx={{ position: "relative" }}>

                <Box sx={{ margin: "40px 7% 60px 7%", position: "relative" }}>
                    <Box component={"h1"} sx={{ marginTop: "0" }}>Доступное оборудование</Box>
                    <Grid container spacing={3} sx={{ paddingLeft: "15%" }}>
                        <Grid item xs={6} md={4}>
                            Софтбоксы
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Фоны
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Зеркало
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Отражатели
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Циклорама
                        </Grid>
                        <Grid item xs={6} md={4}>
                            Гримёрка
                        </Grid>
                    </Grid>
                </Box>
                <Box component={"img"} src="images/polygon.svg" alt="ups"
                    sx={{
                        width: "15%",
                        position: "absolute",
                        top: { xs: "50%", md: "30%" },
                        right: "0",
                    }}
                />
                <Box component={"img"} src="images/polygon.svg" alt="ups"
                    sx={{
                        width: "15%",
                        position: "absolute",
                        transform: "scale(-1, 1)",
                        top: { xs: "50%", md: "30%" },
                        left: "0",
                    }}
                />
            </Box>

            <Box sx={{ width: "100%", padding: "40px 7%", backgroundColor: theme.palette.third.main }}>
                <Questions />
            </Box>
        </ThemeProvider>
    )
}

export default Main;