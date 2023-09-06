import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#101728',
        },
        secondary: {
            main: '#ffffff',
        },
        text: {
            primary: 'rgba(255,255,255,0.87)',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
    },
});