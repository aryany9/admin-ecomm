import { createTheme } from "@mui/material";
import { blue, orange } from "@mui/material/colors";

export const themeLight = createTheme({
    palette: {
        primary: {
            main: '#246ABA',
            light: '#2196F3',
            dark: '#213B55',
            "50": '#ECF2F6',
            "100": '#BBF3FD'
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
            main: '#6FEFC1',

        },
        action: {

        },
        common: {
            black: '#000000',
            white: '#F2f2f2',
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