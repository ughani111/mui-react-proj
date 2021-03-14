import React, { useState } from 'react';
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

  const extractLegalInfo = (stepState) => {
    return { 
        legalAGB: stepState.legalAGB, 
        legalPrivacy: stepState.legalPrivacy, 
        legalMarketing: stepState.legalMarketing,
        legalPicture: stepState.legalPicture,
        languageOther: stepState.languageOther
    }
 }

function Closing({stepState, onSubmit}) {
    const classes = useStyles();
    const {t, i18n} = useTranslation(['translation', 'common']);

    const [legalInfo, setLegalInfo] = useState(extractLegalInfo(stepState));    
    const handleSubmit = (event) => {
        event.preventDefault();        
        onSubmit({...legalInfo}, 4);
    }
    return (
        <div className={classes.root}>
            <form action="#" onSubmit={handleSubmit} noValidate>
                <p className="font-medium w-full text-sm mb-4 uppercase text-gray-400"><Trans i18nKey='steps:closingStep.stepTopic'></Trans></p>
                <p className="font-medium text-4xl text-gray-700 mb-4"><Trans i18nKey='steps:closingStep.stepGreeting'></Trans></p>
                <h2 className="font-medium my-3 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:closingStep.heading2'></Trans></h2>
                <p className="font-medium w-3/4 my-3 text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:closingStep.heading2text'></Trans></p>

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
                    <h2 className="font-medium my-3 mt-8 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:closingStep.heading3Label'></Trans></h2>
                </div>
                <div>
                    <Grid className="divide-y divide-grey-500 space-y-6">
                        <Grid container className="pt-6">
                            <Grid xs={11}>
                                <Trans i18nKey='steps:closingStep.terms1'></Trans>
                            </Grid>
                            <Grid xs={1} container  justify="flex-end">
                                <Switch
                                    value={legalInfo.legalAGB}
                                    onChange={()=> setLegalInfo({...legalInfo, legalAGB: !legalInfo.legalAGB})}
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
                                    value={legalInfo.legalPrivacy}
                                    onChange={()=> setLegalInfo({...legalInfo, legalPrivacy: !legalInfo.legalPrivacy})}
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
                                    value={legalInfo.legalMarketing}
                                    onChange={()=> setLegalInfo({...legalInfo, legalMarketing: !legalInfo.legalMarketing})}
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
                                    value={legalInfo.legalPicture}
                                    onChange={()=> setLegalInfo({...legalInfo, legalPicture: !legalInfo.legalPicture})}
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
                            <Button variant="contained" size="large" color="primary" type="submit">
                                <Trans i18nKey='steps:personalInformation.next'></Trans>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    )
}

export default Closing;