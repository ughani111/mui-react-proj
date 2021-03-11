import WizardContainer from './wizard/WizardContainer';
import { makeStyles, MuiThemeProvider, useTheme } from '@material-ui/core';
import { theme as appTheme } from './theme/muiTheme';
import AppHeaderContainer from './layout/AppHeaderContainer';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: appTheme.palette.primary.contrastText,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflowY: 'auto'
    }
}));

function App() {
    const classes = useStyles();

    return (
        <MuiThemeProvider theme={appTheme}>
            <div className={classes.root}>
                <AppHeaderContainer />

                {/*Center main content*/}
                <div className="flex-grow">
                    <WizardContainer />
                </div>
            </div>
        </MuiThemeProvider>
    );
}

export default App;
