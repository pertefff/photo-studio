import { Box, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";
import Questions from "./components/Questions";


const Contacts = () => {
  const textStyle = {
    display: "block",
    margin: { xs: "4%", sm: "auto 7% auto 5%" },
    textAlign: "left",
    fontSize: 18,
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ margin: { xs: "0", md: "9% 7% 0", lg: "7% 7% 0", }, }}>
          <Grid container spacing={0} alignItems="center">

            <Grid item xs={12} sm={6} >
              <Typography sx={{ ...textStyle }}>
                <b>Адрес:</b> г. Москва, ул. Земляной Вал, д.36<br />
                <b>Метро:</b> Курская, Чкаловская<br /><br />
                <b>E-mail:</b> sepiaftstudio@gmail.ru<br />
                <b>Телефон:</b> 8(916)512-17-17
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box component="img" src="images/house.svg" alt="ups"
                sx={{
                  objectFit: 'cover', width: '100%', height: '100%', alignItems: 'stretch', display: "flex", minHeight: { xs: "auto", sm: "240px", md: "auto" },
                }} />
            </Grid>

            <Grid container direction={{ xs: "column-reverse", sm: "row" }} item alignItems="center">
              <Grid item xs={12} sm={6} >
                <Box component="img" src="images/viveska.jpg.svg" alt="ups"
                  sx={{
                    objectFit: 'cover', minHeight: { xs: "auto", sm: "240px", md: "auto" }, width: "100%", height: '100%', alignItems: 'stretch', display: "flex",
                  }} />
              </Grid>
              <Grid item xs={12} sm={6} >
                <Typography sx={{ ...textStyle }}>
                  <b>Как пройти?</b><br />
                  Выйдя из 5 или 6 выхода метро, необходимо перейти дорогу по подземному переходу. Фотостудия находится в жёлтом здании, 3-ий вход, под вывеской.
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography sx={{ ...textStyle }}>
                <b>Скидки и акции!</b><br />
                У нас есть сезонные скидки и промокоды. А также мы проводим конкурсы, благодаря которым Ваши фотографии могут попасть на билборд!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box component="img" src="images/banner.svg" alt="ups"
                sx={{
                  objectFit: 'cover', width: '100%', height: '100%', alignItems: 'stretch', display: "flex", minHeight: { xs: "auto", sm: "240px", md: "auto" },
                }} />
            </Grid>

          </Grid>
        </Box>

        <Box sx={{ width: "100%", padding: "40px 7%", backgroundColor: theme.palette.pink.main }}>
          <Questions />
        </Box>

      </ThemeProvider>
    </>
  )
}

export default Contacts;