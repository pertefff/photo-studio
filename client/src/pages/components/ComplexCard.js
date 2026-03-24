import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import { useNavigate } from "react-router-dom";

const ComplexCard = ({ image, name, cost, userSX }) => {
    const navigate = useNavigate();
    return (
        <Card elevation={0} sx={{ width: {xs: "100%", sm: "45%"}, borderRadius: "0px", ...userSX }}>
            <CardActionArea onClick={() => { navigate('/halls#' + name) }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt="hall"
                />
                <CardContent sx={{ backgroundColor: theme.palette.secondary.main }}>
                    <Box component={"h2"} sx={{ margin: "0", color: theme.palette.primary.main }}>
                        “{name}”
                    </Box>
                    <Typography color={"primary"}>
                        Цена:  {cost} руб/час
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default ComplexCard;