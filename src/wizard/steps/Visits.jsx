import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import useConfig from '../../hooks';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
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

  const RadioWithImage = (props) => {
    const {imageUrl, label, ...rest} = props;

    const classes = useStyles();
    return (
        <div className="w-full">
            <img className="w-full h-44 object-cover rounded-md" src={props.imageUrl} />

            <div className="mt-3">
                <Radio classes={{root: classes.radioButton}} {...rest}/>
                <span className="text-gray-600">{label}</span>
            </div>
        </div>
    )
}

function VisitStep({stepState, onSubmit, onGoBack}) {
    
    const [formState, setFormState] = useState({
        talk: stepState.talk,
        talkDetail: stepState.talkDetail,
        mediaTV: stepState.mediaTV,
        mediaDVD: stepState.mediaDVD,
        therapyType: stepState.therapyType
    });
    
    
    const imagesUrl = useConfig().imagesUrl;
    const classes = useStyles();
    const {t, i18n} = useTranslation(['translation', 'common']);
    const image1Url = `${imagesUrl}step2-1-1.png`
    const image2Url = `${imagesUrl}step2-1-2.png`

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(formState, 2);
    }

    const handleRadioChange = (state) => {
        setFormState({
        ...formState,
        therapyType: state.target.value
        })
    }

    const stepBackHandler = (event) => {
        event.preventDefault();
        
        onGoBack(formState, 2);

    }

    return (
        <div className={classes.root}>
                <p className="font-medium w-full text-sm mb-4 uppercase text-gray-400"><Trans i18nKey='steps:visitStep.stepTopic'></Trans></p>
                <h2 className="font-medium text-4xl text-gray-700 mb-4"><Trans i18nKey='steps:visitStep.stepGreeting'></Trans></h2>
                <form className="mt-12 flex flex-col" onSubmit={handleSubmit} noValidate>
                    <div className="flex flex-row justify-between">
                        <RadioGroup classes={{root: classes.radioGroup}} className="w-full flex flex-row justify-between" aria-label="quiz" name="quiz" 
                                  value={formState.therapyType}>
                            <div className="w-5/12">
                                <FormControlLabel value="Fasten" onChange={handleRadioChange} control={<RadioWithImage imageUrl={image1Url} label={t('steps:visitStep.pic1Label')} />}/>
                            </div>

                            <div className="w-5/12">
                                <FormControlLabel value="Ernährung" onChange={handleRadioChange} control={<RadioWithImage imageUrl={image2Url} label={t('steps:visitStep.pic2Label')} />}/>
                            </div>
                        </RadioGroup>
                    </div>
                    <p className="font-medium my-6 text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:visitStep.picturesDescription'></Trans></p>
                    <p className="font-medium my-3 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:visitStep.heading2'></Trans></p>
                    <p className="font-medium w-3/4 my-3 text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:visitStep.heading2text'></Trans></p>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formState.mediaTV}
                                    onChange={event => setFormState({...formState, mediaTV: !formState.mediaTV})} 
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={<Trans i18nKey='steps:visitStep.tvLabel'></Trans>}
                        />
                    </div>
                    <div>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formState.mediaDVD}
                                    onChange={event => setFormState({...formState, mediaDVD: !formState.mediaDVD})} 
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={<Trans i18nKey='steps:visitStep.dvdLabel'></Trans>}
                        />
                    </div>
                    <div className="my-6 p-4 border border-blue-100 bg-gray-100 rounded">
                        <h2 className="text-black text-lg"><InfoOutlinedIcon className="text-blue-500" /> <span className="pl-1 text-blue-500"><Trans i18nKey='steps:visitStep.information'></Trans></span></h2>
                        <p className="ml-9"><Trans i18nKey='steps:visitStep.infotext'></Trans></p>
                    </div>
                    <h2 className="font-medium my-6 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:visitStep.heading3'></Trans></h2>
                    <p className="font-medium text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:visitStep.heading3text'></Trans></p>
                    <Grid container xs={12} className='my-12'>
                        <Grid item xs={5}>
                            <RadioGroup aria-label="gender" name="gender1" value={formState.talk} onChange={event=> setFormState({...formState, talk: event.target.value})}>
                                <FormControlLabel value="yes" control={<Radio />} label={<Trans i18nKey='steps:visitStep.yes'></Trans>} />
                                <FormControlLabel value="no" control={<Radio />} label={<Trans i18nKey='steps:visitStep.no'></Trans>} />
                                <FormControlLabel value="maybe" control={<Radio />} label={<Trans i18nKey='steps:visitStep.maybe'></Trans>} />
                            </RadioGroup>
                        </Grid>

                        <Grid item xs={7}>
                        <TextField
                            id="outlined-multiline-static"
                            label={<Trans i18nKey='steps:visitStep.messageLabel'></Trans>}
                            placeholder={t("steps:visitStep.messagePlaceholder")}
                            value={formState.talkDetail}
                            onChange={event=>setFormState({...formState, talkDetail: event.target.value})}
                            multiline
                            rows={7}
                            fullWidth={true}
                            defaultValue="Default Value"
                            variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    
                    <Grid container xs={12} className='my-12'>
                        <Grid item xs={12}>
                            <h2 className="font-medium my-6 text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:visitStep.heading4'></Trans></h2>
                            <p className="font-medium text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:visitStep.heading4text'></Trans></p>
                        </Grid>
                        {/* TODO */}
                        {/* value yet to be decided */}
                        <RadioGroup aria-label="gender" name="gender1" /*value={value} onChange={handleChange}*/>
                            <FormControlLabel value="yes" control={<Radio />} label={<Trans i18nKey='steps:visitStep.yes'></Trans>} />
                            <FormControlLabel value="no" control={<Radio />} label={<Trans i18nKey='steps:visitStep.no'></Trans>} />
                        </RadioGroup>
                    </Grid>
                    <Grid container>
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
                </form>
    </div>
    )
}

export default VisitStep;