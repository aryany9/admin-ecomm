import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

export const themeLight = createTheme({
    palette: {
        primary: {
            main: '#2196F3',
        },
        divider: '##BDBDBD',
        text: {
            primary: '##212121',
            secondary: '##757575',
        },
        background: {
            default: '##FFFFFF',
        },
        secondary: {
            main: '#03A9F4',
        },
        action: {
            
        }
    },
})

export const themeDark = createTheme({
    palette: {
        primary: {
            main: '#BB86FC',
        },
        divider: '##BDBDBD',
        text: {
            primary: '##FFFFFF',
            secondary: '##757575',
        },
        background: {
            default: '##121212',
        },
        secondary: {
            main: '#03DAC6',
        },
        error: {
            main: '#CF6679',
        },
        action: {
            
        }
    },
})