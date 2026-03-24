import { createTheme, responsiveFontSizes, } from '@mui/material';


let theme = createTheme({

    typography: {
        fontFamily: 'Montserrat, Arial',
        fontSize: 18
    },

    palette: {
        primary: {
            main: '#432603',
        },
        secondary: {
            main: '#FDFCF7',
        },
        third: {
            main: '#AA9F97',
        },
        pink: {
            main: '#D1B195',
        },
        buttons: {
            main: '#D1B195',
        },
        background: {
            default: '#FDFCF7',
        }

    },

    breakpoints: {
        values: {
            xs: 0,   // < телефон
            sm: 600, // < планшет
            md: 900, // < пк
            lg: 1200,
            xl: 1536,
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                size: 'small',
                color: 'buttons',
            },
            styleOverrides: {
                root: {
                    fontSize: '18px',
                    backgroundColor: '#432603',
                    color: '#FDFCF7',
                    borderRadius: '0px',
                    textTransform: 'none',
                    padding: "10px 30px",
                    margin: "5px 0",
                    '&:hover': {
                        background: '#542e01',
                    }
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    margin: "5px 0",
                    backgroundColor: '#FDFCF7',
                    borderColor: "#432603",
                    borderRadius: '0px',
                },
            },
        },
    },
})

theme = responsiveFontSizes(theme);

export default theme;