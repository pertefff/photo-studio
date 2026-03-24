import React from "react";
import { AppBar, Box, ThemeProvider, CssBaseline, useMediaQuery, SwipeableDrawer } from '@mui/material';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../theme";
import { styled } from '@mui/system';

const menu = [
  {
    path: '/',
    name: 'Главная'
  },
  {
    path: '/halls',
    name: 'Локации'
  },
  {
    path: '/about',
    name: 'О нас'
  },
  {
    path: '/contacts',
    name: 'Контакты'
  },
]

const MyLink = styled(Link)(({ theme }) => ({
  width: "100%",
  padding: "20px",
  margin: "0",
  textAlign: "center",
  color: theme.palette.primary.main,
  textDecoration: "none",
  '&:hover': {
    color: theme.palette.third.main,
    backgroundColor: theme.palette.secondary.main
  }
}))

const TopMenu = () => {
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))
  const [state, setState] = React.useState(false)


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position={isMatch ? "static" : "absolute"} elevation={0} sx={{ backgroundColor: "transparent", margin: "0", padding: "0", mb: "16px" }}>
          <Router>
            <Box sx={{
              width: "100%", display: "flex", justifyContent: "space-between",
            }}>
              <Box component={"img"} src="images/sepia.svg" alt="ups"
                backgroundColor={theme.palette.secondary.main}
                style={{ width: isMatch ? "28%" : "15%", marginLeft: "7%", padding: "8px", }}// borderRadius: "0 0 50% 50% / 20px",
              />

              {isMatch ?
                <>
                  <MenuIcon sx={{ margin: "5% 10%", color: theme.palette.third.main }} onClick={(e) => setState(true)} />
                  <SwipeableDrawer
                    anchor="left"
                    open={state}
                    onClose={(e) => setState(false)}
                    onOpen={(e) => setState(true)}
                    PaperProps={{
                      sx: { width: { xs: "100%", sm: "50%" } },
                    }}
                  >
                    <Box component={"img"} src={"images/sepia.svg"} alt="ups" style={{ width: "60%", margin: "8% auto", padding: '5%' }} />
                    {menu.map((title) => {
                      return (
                        <React.Fragment key={title.name}>
                          <MyLink to={title.path} reloadDocument>
                            {title.name}
                          </MyLink>
                        </React.Fragment>)
                    })
                    }
                  </SwipeableDrawer>
                </>
                :
                <Box sx={{
                  width: "60%",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                  {menu.map((title) => {
                    return (
                      <React.Fragment key={title.name}>
                        <MyLink to={title.path} reloadDocument>
                          {title.name}
                        </MyLink>
                      </React.Fragment>)
                  })
                  }
                </Box>
              }
            </Box>
          </Router>
        </AppBar>
      </ThemeProvider>
    </>
  )
}

export default TopMenu;
