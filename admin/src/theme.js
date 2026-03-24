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
        // error: {
        //     main: '#D1B195'
        // },
        buttons: {
            main: '#D1B195',
        },
        background: {
            paper: '#FDFCF7',
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

// const basicPalette = {
//     // mode: 'light',
//     primary: {
//         main: primaryColor.main,
//         ...getColors(primaryColor.main),
//     },
//     secondary: {
//         main: secondaryColor.main,
//         ...getColors(secondaryColor.main),
//     },
//     warning: {
//         main: '#f5ac41',
//     },
//     info: {
//         main: '#558cb7',
//     },
//     background: {
//         main: '#f0f3f5',
//         hilighted: '#f0f0f0',
//         selectedSlide: '#cecece',
//         selectingSlide: '#fefece',
//         semiTransparent: '#d3d3d36d',
//         quarterTransparent: '#80808075',
//         iconNumberTag: '#ffa83b',
//         landing: '#bec2ca',
//     },
//     group: {
//         default: '#b2b2b2',
//     },
//     lightLight: grey[200],
//     customBg: {
//         main: '#e0eff9',
//     },
// };

// // const basicTheme = createTheme(adaptV4Theme({
// const basicTheme = createTheme({
//     palette: {
//         ...basicPalette,
//         primaryLight: {
//             main: basicPalette.primary.ligth,
//         },
//         primaryDark: {
//             main: basicPalette.primary.dark,
//         },
//     },
// });


// // export const theme = createTheme(adaptV4Theme({
// export const theme = createTheme({
//     palette: basicTheme.palette,
//     breakpoints: {
//         values: {
//             xs: 0,
//             col: 300,
//             sm: 600,
//             md: 900,
//             lg: 1200,
//             xl: 1536,
//         },
//     },
//     typography: {
//         fontFamily: ['"Roboto" '].concat(basicTheme.typography.fontFamily),
//         fontSize: 12,
//     },
//     components: {
//         MuiAppBar: {
//             defaultProps: {
//                 color: 'customBg',
//             },
//         },
//         MuiToolbar: {
//             defaultProps: {
//                 color: 'customBg',
//             },
//         },
//         MuiCircularProgress: {
//             defaultProps: {
//                 color: 'primaryLight',
//             },
//         },
//         MuiButton: {
//             defaultProps: {
//                 size: 'small',
//                 color: 'secondary',
//             },
//             styleOverrides: {
//                 root: {
//                     fontSize: '0.9rem',
//                 },
//             },
//         },
//         MuiButtonGroup: {
//             defaultProps: {
//                 variant: 'text',
//                 color: 'secondary',
//                 size: 'small',
//             },
//         },
//         MuiInputLabel: {
//             defaultProps: {
//                 // color: 'secondary', // basicTheme.palette.primary.dark,
//             },
//         },
//     },

//     overrides: {
//         MuiToolbar: {
//             dense: {
//                 gutters: {
//                     paddingLeft: '12px',
//                     paddingRight: '12px',
//                 },
//             },
//             gutters: {
//                 paddingLeft: '12px',
//                 paddingRight: '12px',
//             },
//         },
//         MuiListItem: {
//             root: {
//                 '&$selected': {
//                     backgroundColor: basicTheme.palette.primary.dark,
//                     '&:hover': {
//                         backgroundColor: basicTheme.palette.primary.main,
//                     },
//                 },
//                 '&:hover': {
//                     backgroundColor: basicTheme.palette.primary.main,
//                 },
//             },
//         },
//         switchBase: {
//             color: basicTheme.palette.secondary[300],
//             '&$checked': {
//                 color: basicTheme.palette.secondary[500],
//             },
//             '&$checked + $track': {
//                 backgroundColor: basicTheme.palette.secondary[500],
//             },
//         },
//     },
//     props: {
//         MuiTextField: {
//             variant: 'filled',
//         },
//         MuiInputLabel: {
//             shrink: true,
//         },
//         MuiAccordion: {
//             disableGutters: true,
//         },
//         MuiButton: {
//             variant: 'outlined',
//             color: 'secondary',
//             size: 'small',
//         },
//     },
// });

theme = responsiveFontSizes(theme);

export default theme;