import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../../theme";

const WorkerInfoCard = ({ _id, side, image, profession, name, info, schedule, salary, works = [] }) => {
    const isMatch = useMediaQuery(theme.breakpoints.between('sm', 'lg'))
    return (
        <Box sx={{ backgroundColor: (side % 2 === 0) ? theme.palette.pink.main : theme.palette.third.main, color: theme.palette.primary.main }}>
            <Box id={_id} sx={{ margin: {xs: "0 12% 0 2%", sm: "0 7%"}, }}>
                <Grid item container spacing={3} alignItems={{ xs: 'flex-start', sm: 'center' }} direction={{ xs: 'column', sm: 'row' }} sx={{ m: "0", pt: { xs: '0', sm: "2%" }, p: "0", flexWrap: "nowrap" }}>
                    <Grid item sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <Typography variant="h4" sx={{ pt: '0' }}>{name}</Typography>
                        <Typography>{profession}</Typography>
                    </Grid>
                    <Grid item xs={8} sm={5}
                        sx={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: { xs: 'flex-start', sm: 'center' }, maxHeight: { xs: "300px", sm: "600px", md: "700px", lg: "400px" } }}>
                        <Box component={"img"} alt="ups" src={image}
                            sx={{ objectFit: 'cover', width: '100%', height: '100%', justifyContent: 'center' }}
                        />
                    </Grid>
                    <Grid item sx={{ textAlign: "left", m: " 0", p: "0" }} xs={12} sm={6}>
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant="h4">{name}</Typography>
                        <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>{profession}</Typography>
                        <Typography>{info}</Typography> {/* sx={{ display: { xs: 'block', sm: 'none', md: 'block' } }} */}
                        <Typography variant="h6">Дни работы</Typography>
                        <Typography>{schedule}</Typography>
                        <Typography variant="h6">Почасовая ставка</Typography>
                        <Typography>{salary}</Typography>
                    </Grid>
                </Grid>
                <Typography variant="h6" sx={{ p: "16px 24px 0" }}>Работы</Typography>
                <Grid item container spacing={3} alignContent={"space-around"} sx={{ m: "0", p: "0 0 24px 0" }}>
                    {works.map((work, key) => {
                        return (
                            <>
                                <Grid item xs={6} sm={4} lg={3} key={key}
                                    sx={{
                                        overflow: "hidden",  justifyContent: "center",
                                        maxHeight: { xs: "200px", sm: "300px", lg: "400px" },
                                        display: isMatch ? (key < 3 ? 'flex' : 'none') : 'flex'
                                    }}
                                >
                                    <Box component={"img"} alt="ups" src={work}
                                        sx={{ objectFit: 'cover', width: '100%', height: '100%', alignItems:'center' }}
                                    />
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default WorkerInfoCard