import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

const SimpleCard = ({ image, text, width }) => {
    return (
        <Box sx={{ marginTop: "3%", width: width }}>
            <Card elevation={0} sx={{ borderRadius: "0px" }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt="hall error"
                />
                <Typography sx={{ fontWeight: "bold", marginTop: "-20%", marginLeft: "5%", mb:"10%", color: theme.palette.secondary.main }}>
                    {text}
                </Typography>
            </Card>
        </Box>
    );
};

export default SimpleCard;