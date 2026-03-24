import React from "react";
import { Box, Grid, Link, Tooltip } from "@mui/material";
import theme from "../../theme";
import QuestionForm from "./QuestionForm";
import Circle from "./Circle";

const connect = [
  {
    title: "Наш телеграм",
    href: "https://telegram.org",
    src: "/images/icon_telegram.svg",
    sx: { width: "85%" },
  },
  {
    title: "Наш вк",
    href: "https://vk.com/k_karas",
    src: "/images/icon_vk.svg",
    sx: { width: "90%", marginTop: "10%" },
  },
  {
    title: "Наш инстаграм* является запрещенным в РФ",
    href: "https://www.instagram.com",
    src: "/images/icon_inst.svg",
    sx: { width: "85%" },
  },
]

const Questions = () => {

  return (
    <>
      <Box component={"h1"} sx={{ marginTop: "0", color: theme.palette.primary.main }}>
        Остались вопросы?
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
          <Box component={"h3"} sx={{ marginTop: "0", color: theme.palette.primary.main, position: "relative" }}>
            Напишите нам:
          </Box>
          <Circle t="24%" l="16%"
            sx={{ minWidth: "330px", minHeight: "330px", border: "2px solid", }}
          />

          <Box sx={{
            position: { xs: "static", md: "absolute" },
            borderRadius: { xs: "0", md: "50%" },
            border: { xs: "none", md: "2px solid" },
            borderColor: { xs: theme.palette.pink.main, md: theme.palette.primary.main },
            backgroundColor: theme.palette.secondary.main,
            width: { xs: "auto", md: "330px", },
            height: { xs: "auto", md: "330px", },
            textAlign: "center",
            top: { xs: "0", md: "18%" },
          }} >
            <Box sx={{ marginTop: { xs: "5%", sm: "26%", md: "20%" } }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: { xs: "5% 1% 0", sm: "4% 2% 0", md: "0 10%" }
                }}>
                {connect.map((net) => {
                  return (
                    <React.Fragment key={net.href}>
                      <Tooltip title={net.title} arrow>
                        <Link href={net.href}>
                          <Box component={"img"} src={net.src} alt="ups"
                            sx={{ ...net.sx }} />
                        </Link>
                      </Tooltip>
                    </React.Fragment>
                  )
                })}
              </Box>

              <Box sx={{ padding: { xs: "4% 6%", md: "10% 6%" }, fontSize: 18 }}>
                E-mail: sepiaftstudio@gmail.ru<br />Телефон: 8(916)512-17-17
              </Box>

              <Box component={"img"} src="/images/camera.svg" alt="ups"
                sx={{ margin: "0 40%", width: "20%" }}
              />

            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <QuestionForm />
        </Grid>

      </Grid>
    </>
  )
}

export default Questions;