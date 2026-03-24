import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import TopMenu from './pages/TopMenu';
import Main from './pages/Main';
import Halls from './pages/Halls';
import BottomMenu from './pages/BottomMenu';
import theme from './theme';
import Contacts from './pages/Contacts';
import About from './pages/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/halls",
    element: <Halls />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <TopMenu />
        <RouterProvider router={router} />
        <BottomMenu />
      </Box>
    </ThemeProvider>
  );
}

export default App;