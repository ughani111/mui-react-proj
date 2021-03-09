import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { themeColors } from '../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        color: themeColors.gray.fade1
    }
}));

function WizardTitleHeader() {
    const classes = useStyles();

    return (
        <div className="text-2xl font-bold w-full h-40 uppercase flex flex-col justify-center items-center">
            <Typography classes={classes} variant="h5">BUCK/NGER</Typography>
            <Typography classes={classes} variant="h5" className="ml-4">W/LHELMI</Typography>
        </div>
    );
}

export default WizardTitleHeader;