import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

const WorkerCard = ({ id, image, worker, name, }) => {
    const scroll = (id) => {        
        const section = document.getElementById(id);
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <Card elevation={0} sx={{
            borderRadius: "0px",
            backgroundColor: theme.palette.primary.main,
        }}>
            <CardActionArea onClick={() => { scroll(id) }}>
                <CardMedia
                    component="img"
                    image={image}
                    alt="worker"
                />
                <CardContent style={{ padding: "5%", color: theme.palette.secondary.main }}>
                    <Typography>
                        <b>{worker}</b>
                    </Typography>
                    <Typography>
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default WorkerCard;