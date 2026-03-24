import { Box, CssBaseline, Grid, Icon, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import theme from "../theme";

const BottomMenu = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{
                width: "100%",
                padding: "25px 7%",
                backgroundColor: theme.palette.primary.main,
                display: "flex", position: "row",
                justifyContent: "space-between"
            }}>
                <Grid container justifyContent="space-between" alignItems="center" rowSpacing={{ xs: 4, sm: 0 }}>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={{ fontSize: "16px", color: theme.palette.third.main }}>
                            Адрес: г. Москва, ул. Земляной Вал, д.36<br />
                            Телефон: 8(916)512-17-17<br />
                            E-mail: sepiaftstudio@gmail.ru
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={5}>
                        <Box component={"img"} src="images/sepia_bottom.svg" alt="ups" />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default BottomMenu;