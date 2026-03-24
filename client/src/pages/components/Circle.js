import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import theme from "../../theme";

const Circle = ({ t, r, b, l, sx }) => {
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <>
            {isMatch ? null :
                <Box
                    sx={{
                        position: "absolute",
                        borderRadius: "50%",
                        border: "3px solid",
                        borderColor: theme.palette.primary.main,
                        minWidth: "370px",
                        minHeight: "370px",
                        top: t,
                        right: r,
                        bottom: b,
                        left: l,
                        ...sx
                    }}> </Box>
            }
        </>
    )
}

export default Circle;