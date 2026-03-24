import { Box, Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import Circle from "./Circle";
import ComplexCard from "./ComplexCard";
import config from "../../config.json"

const serverAPI = axios.create({
    baseURL: config.baseURL,
    headers: config.headers,
})

const MainHalls = () => {

    const [hallsList, setHallsList] = useState([]);

    useEffect(() => {
        const apiUrl = '/api/halls_main';
        serverAPI.get(apiUrl, {
            headers: config.headers,
        })
            .then((resp) => {
                const serverData = resp.data;
                console.log(`got serverdata `, { serverData })
                setHallsList(serverData.halls_main);
            })
            .catch((error) => { console.log("error ", error.message) });
    }, [])

    return (
        <Box sx={{ width: "100%", padding: "40px 7%", backgroundColor: theme.palette.pink.main, position: "relative" }}>
            <Box component={"h1"} sx={{ marginTop: "0", color: theme.palette.primary.main }}>Залы</Box>
            <Circle l="0" b="0%" />
            <Circle r="0" t="0%" />
            <Box sx={{
                display: "flex", flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between", position: "relative",
            }}>
                {hallsList.map((hall) => {              //?
                    return (
                        <ComplexCard
                            key={hall._id}
                            image={hall.img}
                            name={hall.title}
                            cost={hall.cost}
                            userSX={{ mb: { xs: "4%", sm: "auto" }, }}
                        />
                    )
                })}
            </Box>
            <Box sx={{ display: "flex" }}>
                <Button href="/halls" sx={{width: {xs: "100%", sm: "auto"}}}
                    style={{
                        display: "block",
                        margin: "4% 0px 0px auto",
                        padding: "10px 30px",
                        textAlign: "center",
                    }}>
                    Больше &#8594;
                </Button>
            </Box>
        </Box>
    )
}

export default MainHalls;