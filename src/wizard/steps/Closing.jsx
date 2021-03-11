import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
    radioGroup: {
        flexDirection: 'row',
        margin: 0,
    },
    radioButton: {
        marginLeft: -theme.spacing(1),
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
  
    input: {
        margin: theme.spacing(1),
        width: '100%',
        "& .MuiFormLabel-root": {
            fontStyle: "italic",
            fontWeight: "bold"
            }
        },
    multiline: {
        width: '100%',
    }
  
  }));



function Closing() {
    const classes = useStyles();
    const {t, i18n} = useTranslation(['translation', 'common']);

    return (
        <div className={classes.root}>
            <p className="font-medium w-full text-sm mb-4 uppercase text-gray-400"><Trans i18nKey='steps:closingStep.stepTopic'></Trans></p>
            <p className="font-large text-3xl mb-4 text-black-400"><Trans i18nKey='steps:closingStep.stepGreeting'></Trans></p>
            <h2 className="font-medium my-3 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:closingStep.heading2'></Trans></h2>
            <p className="font-medium w-3/4 my-3 text-sm mb-4 italic text-gray-500"><Trans i18nKey='steps:closingStep.heading2text'></Trans></p>

            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label={<Trans i18nKey='steps:closingStep.doctorLabel'></Trans>}
                />
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label={<Trans i18nKey='steps:closingStep.otherPatientLabel'></Trans>}
                />
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label={<Trans i18nKey='steps:closingStep.familyLabel'></Trans>}
                />
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label={<Trans i18nKey='steps:closingStep.friendLabel'></Trans>}
                />
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label={<Trans i18nKey='steps:closingStep.mediaLabel'></Trans>}
                />
            </div>
            <div>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label={<Trans i18nKey='steps:closingStep.othersLabel'></Trans>}
                />
            </div>
            <div>
                <Grid className="divide-y divide-grey-500 space-y-6">
                    <Grid container className="pt-6">
                        <Grid xs={11}>
                            <Trans i18nKey='steps:closingStep.terms1'></Trans>
                        </Grid>
                        <Grid xs={1} container  justify="flex-end">
                            <Switch
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="pt-6">
                        <Grid xs={11}>
                            <Trans i18nKey='steps:closingStep.terms2'></Trans>
                        </Grid>
                        <Grid xs={1} container  justify="flex-end">
                            <Switch
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="pt-6">
                        <Grid xs={11}>
                            <Trans i18nKey='steps:closingStep.terms3'></Trans>
                        </Grid>
                        <Grid xs={1} container  justify="flex-end">
                            <Switch
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container className="pt-6">
                        <Grid xs={11}>
                            <Trans i18nKey='steps:closingStep.terms4'></Trans>
                        </Grid>
                        <Grid xs={1} container  justify="flex-end">
                            <Switch
                                color="default"
                                inputProps={{ 'aria-label': 'checkbox with default color' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className="pt-6">
                    <Grid item xs={6}>
                        <Button variant="contained" size="large" color="default">
                            <Trans i18nKey='steps:personalInformation.previous'></Trans>
                        </Button>
                    </Grid>
                    <Grid xs={6} container justify="flex-end">
                        <Button variant="contained" size="large" color="primary">
                            <Trans i18nKey='steps:personalInformation.next'></Trans>
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Closing;