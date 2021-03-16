import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(4),
    },
  
  }));

function SucessStep({stepState, onSubmit}) {
    const classes = useStyles();
    const {t, i18n} = useTranslation(['translation', 'common']);

    const handleSubmit = (event) => {
        event.preventDefault();        
        //onSubmit({...legalInfo}, 4);
    }
    return (
        <div className={classes.root}>
            <form action="#" onSubmit={handleSubmit} noValidate>
                <p className="font-medium w-full text-sm mb-4 uppercase text-gray-400"><Trans i18nKey='steps:successStep.stepTopic'></Trans></p>
                <p className="font-medium text-4xl text-gray-700 mb-4"><Trans i18nKey='steps:successStep.stepGreeting'></Trans></p>


                <div className="my-6 p-4 border border-blue-100 bg-gray-100 rounded">
                    <h2 className="text-black text-lg"><InfoOutlinedIcon className="text-blue-500" /> <span className="pl-1 text-blue-500"><Trans i18nKey='steps:successStep.heading_information'></Trans></span></h2>
                    <p className="ml-9"><Trans i18nKey='steps:successStep.text_information'></Trans></p>
                </div>

                <div>                   
                    <Grid container className="pt-6">
                        <Grid xs={12} container justify="center">
                            <Button variant="contained" size="large" color="primary" type="submit">
                                <Trans i18nKey='steps:successStep.submitButton'></Trans>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </div>
    )
}

export default SucessStep;