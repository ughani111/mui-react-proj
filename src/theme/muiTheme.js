import { createMuiTheme } from '@material-ui/core/styles';

export const themeColors = {
    gray: {
        dark1: '#535250',
        fade1: '#D9D8D3',
        fade2: '#E9E8E4',
        fade3: '#BDBCB7'
    }
}

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4EA2D7',
            light: '#85C0E5',
            contrastText: '#F8F8F6'
        },
        secondary: {
            main: '#767673',
            light: '#E5E5E5',
            contrastText: '',

        },
    },
});