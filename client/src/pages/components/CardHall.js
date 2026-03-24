import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../../theme";

const CardHall = ({ name, description, image, cost, leftSide }) => {
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    let sides = "right";
    let marg = "auto 7% auto auto";
    let direction = "row-reverse";
    let color = theme.palette.primary.main;
    let circle = "none";

    if (leftSide) {
        sides = "left";
        marg = "auto 7% auto 7%";
        direction = "row";
        color = theme.palette.pink.main;
        circle = "flex"
    }

    return (
        <>
            {!isMatch && <Box component="img" src="images/circle.svg" alt="ups" sx={{
                display: circle,
                width: "55%",
                margin: "0",
                position: "absolute",
                transform: { md: "translate(-14%,-12%)", lg: "translate(-14%,-18%)" },
            }} />}

            <Box id={name}
                sx={{
                    display: "block",
                    position: "relative", marginTop: { xs: "0", lg: "-20px" },
                    textAlign: { xs: "left", md: sides }, color: theme.palette.primary.main,
                }}
            >
                <Box component={"h2"} sx={{ color: { xs: theme.palette.primary.main, md: color } }}>
                    Зал “{name}”
                </Box>
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: direction }, alignContent: "center" }}>
                    <Box component="img" src={image} alt="ups" sx={{ width: { xs: "100%", md: "50%" }, margin: { xs: "0 0 2%", md: "0" } }} />
                    <Typography sx={{ display: "block", margin: { xs: "0", md: marg }, width: { xs: "100%", md: "40%" }, }}>
                        {description}
                    </Typography>
                </Box>
                <Box component={"h3"} sx={{ color: { xs: theme.palette.primary.main, md: color }, margin: { md: "2% auto" } }}>
                    Цена: {cost}  руб/час
                </Box>
            </Box>
        </>
    );
}

export default CardHall;