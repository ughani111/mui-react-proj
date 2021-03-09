import WizardContainer from './wizard/WizardContainer';
import { makeStyles, MuiThemeProvider, useTheme } from '@material-ui/core';
import { theme as appTheme } from './theme/muiTheme';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: appTheme.palette.primary.contrastText,
    }
}));

function App() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={appTheme}>
            <div className={classes.root}>
                <WizardContainer />
            </div>
        </MuiThemeProvider>
    );
}

export default App;
