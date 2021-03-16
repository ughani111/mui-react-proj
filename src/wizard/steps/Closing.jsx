import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
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
        referrer: stepState.referrer,
        referrerDetail: stepState.referrerDetail,
        legalAGB: stepState.legalAGB, 
        legalPrivacy: stepState.legalPrivacy, 
        legalMarketing: stepState.legalMarketing,
        legalPicture: stepState.legalPicture,
        languageOther: stepState.languageOther
    }
 }

function Closing({stepState, onSubmit, onGoBack}) {
    const classes = useStyles();
    const {t, i18n} = useTranslation(['translation', 'common']);

    const [legalInfo, setLegalInfo] = useState(extractLegalInfo(stepState));    
    const handleSubmit = (event) => {
        event.preventDefault();        
        onSubmit({...legalInfo}, 4);
    }
    
    const handleRadioChange = (event) => {
        setLegalInfo((state) => ({
            ...state,
            referrer: event.target.value
        }))
    }

    const stepBackHandler = (event) => {
        event.preventDefault();
        
        onGoBack({...legalInfo}, 4);

    }

    return (
        <div className={classes.root}>
            <form action="#" onSubmit={handleSubmit} noValidate>
                <p className="font-medium w-full text-sm mb-4 uppercase text-gray-400"><Trans i18nKey='steps:closingStep.stepTopic'></Trans></p>
                <p className="font-medium text-4xl text-gray-700 mb-4"><Trans i18nKey='steps:closingStep.stepGreeting'></Trans></p>
                <h2 className="font-medium my-3 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:closingStep.heading_recommendation'></Trans></h2>
                <p className="font-medium w-3/4 my-3 text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:closingStep.text_recommendation'></Trans></p>

                <RadioGroup className="w-full flex flex-row justify-between" aria-label="quiz" name="quiz" value={legalInfo.referrer} onChange={handleRadioChange}>

                <div>
                    <FormControlLabel 
                        value="Arzt"
                        control={<Radio />} 
                        label={t('steps:closingStep.label_doctor')} />
                </div>
                { 
                    legalInfo.referrer === "Arzt" && 
                    (
                    <div>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:closingStep.label_doctor_detail'></Trans>}
                                placeholder={t("steps:closingStep.placeholder_doctor_detail")}
                                value={legalInfo.referrer === "Arzt" ? legalInfo.referrerDetail : ''}
                                onChange={(event)=> setLegalInfo({...legalInfo, referrerDetail: event.target.value})}
                                fullWidth={true}
                                variant="outlined"
                                />  
                        </Grid>
                    </div>
                    )
                }
                <div>
                    <FormControlLabel 
                        value="Other Patient"
                        control={<Radio />} 
                        label={t('steps:closingStep.label_other_patient')} />
                    
                </div>
                <div>
                    <FormControlLabel 
                        value="Family"
                        control={<Radio />} 
                        label={t('steps:closingStep.label_family')} />

                </div>
                <div>
                    <FormControlLabel 
                        value="Friend"
                        control={<Radio />} 
                        label={t('steps:closingStep.label_friend')} />
                  
                </div>
                <div>
                    <FormControlLabel 
                        value="Media"
                        control={<Radio />} 
                        label={t('steps:closingStep.label_media')} />

                </div>
                { 
                    legalInfo.referrer === "Media" && 
                    (
                    <div>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:closingStep.label_media_detail'></Trans>}
                                placeholder={t("steps:closingStep.placeholder_media_detail")}
                                value={legalInfo.referrer === "Media" ? legalInfo.referrerDetail : ''}
                                onChange={(event)=> setLegalInfo({...legalInfo, referrerDetail: event.target.value})}
                                fullWidth={true}
                                variant="outlined"
                                />  
                        </Grid>
                    </div>
                    )
                }
                <div>
                    <FormControlLabel 
                        value="Other" 
                        control={<Radio />} 
                        label={t('steps:closingStep.label_other')} />

                </div>
                { 
                    legalInfo.referrer === "Other" && 
                    (
                    <div>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:closingStep.label_other_detail'></Trans>}
                                placeholder={t("steps:closingStep.placeholder_other_detail")}
                                value={legalInfo.referrer === "Other" ? legalInfo.referrerDetail : ''}
                                onChange={(event)=> setLegalInfo({...legalInfo, referrerDetail: event.target.value})}
                                fullWidth={true}
                                variant="outlined"
                                />  
                        </Grid>
                    </div>
                    )
                }
                </RadioGroup>
                <div>
                    <h2 className="font-medium my-3 mt-8 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:closingStep.heading_your_environment'></Trans></h2>
                </div>
                <div>
                    <Grid className="divide-y divide-grey-500 space-y-6">
                        <Grid container className="pt-6">
                            <Grid xs={11}>
                                <Trans i18nKey='steps:closingStep.text_AGB'></Trans>
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
                                <Trans i18nKey='steps:closingStep.text_privacy'></Trans>
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
                                <Trans i18nKey='steps:closingStep.text_marketing'></Trans>
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
                                <Trans i18nKey='steps:closingStep.text_picture'></Trans>
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
                            <Button variant="contained" size="large" color="default" onClick={stepBackHandler}>
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