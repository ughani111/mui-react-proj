import React, { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import countries from '../../globals/countries';
import titles from '../../globals/titles';

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
    select: {
      margin: theme.spacing(1),
      width: '100%',
  },
  
  input: {
    margin: theme.spacing(1),
    width: '100%',
    "& .MuiFormLabel-root": {
        fontStyle: "italic",
        fontWeight: "bold"
        }
    },
  
  }));

  const extractPersonalInfo = (stepState) => {
    return { 
        gender: stepState.genders, 
        title: stepState.title, 
        lastName: stepState.lastName,
        firstName: stepState.firstName,
        email: stepState.email,
        birthDate: stepState.birthDate,
        birthPlace: stepState.birthPlace,
        nationality: stepState.nationality,
        job: stepState.job
     } 
   }

   const extractAddressInfo = (stepState) => {
        return { 
            addressPLZ: stepState.addressPLZ, 
            addressResidency: stepState.addressResidency, 
            addressStreetNr: stepState.addressStreetNr,
            addressStreet: stepState.addressStreet,
            addressCountry: stepState.addressCountry,
            contactPhone: stepState.contactPhone,
            contactPhoneAlt: stepState.contactPhoneAlt
        }
    }

    const extractLanguageInfo = (stepState) => {
        return { 
            languageGerman: stepState.languageGerman, 
            languageEnglish: stepState.languageEnglish, 
            languageFrench: stepState.languageFrench,
            languageSpanish: stepState.languageSpanish,
            languageOther: stepState.languageOther
        }
     }

  

function PersonalInformationStep({stepState, onSubmit}) {
    const {t, i18n} = useTranslation(['translation', 'common']);
    
    const [personalInfo, setPersonalInfo] = useState(extractPersonalInfo(stepState));
    const [addressInfo, setAddressInfo] = useState(extractAddressInfo(stepState));
    const [languageInfo, setLanguageInfo] = useState(extractLanguageInfo(stepState));
    const classes = useStyles();

    const genders = [
        { value: 'male', label: t('steps:personalInformation.male')},
        { value: 'female', label: t('steps:personalInformation.female')},
        { value: 'other', label: t('steps:personalInformation.other')}
    ];


    const handleSubmit = (event) => {
        event.preventDefault();

        const formState = { ...personalInfo, ...addressInfo, ...languageInfo }
        onSubmit(formState, 1);
    }

    return (
        <div className={classes.root}>
            <form className="mt-12 flex flex-col items-center" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
                <Grid item className={classes.paper}>
                    <p className="font-medium text-md mb-4 uppercase text-gray-400"><Trans i18nKey='steps:personalInformation.stepTopic'></Trans></p>
                    <h2 className="font-medium text-4xl text-gray-700 mb-4"><Trans i18nKey='steps:personalInformation.stepGreeting'></Trans></h2>
                </Grid>

                {/* about me section */}
                <Grid item xs={12}>
                     <p className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:personalInformation.aboutme'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:personalInformation.aboutmeIntrotext'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.select}
                                id="outlined-required"
                                select
                                label={<Trans i18nKey='steps:personalInformation.dropdown1Label'></Trans>}
                                value={personalInfo.gender}
                                onChange={(event) => setPersonalInfo({...personalInfo,gender: event.target.value})}
                                variant="outlined"
                            
                            >
                            {genders.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.select}
                                id="outlined-required"
                                select
                                label={<Trans i18nKey='steps:personalInformation.dropdown2Label'></Trans>}
                                value={personalInfo.title}
                                onChange={(event) => setPersonalInfo({...personalInfo,title: event.target.value})}
                                variant="outlined"
                        
                            >
                            {titles.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                            </TextField>
                        </Grid>
                    </Grid>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.firstName}
                        onChange={(event) => setPersonalInfo({...personalInfo,firstName: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.firstnameLabel'></Trans>}
                        placeholder={t("steps:personalInformation.firstnamePlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.lastName}
                        onChange={(event) => setPersonalInfo({...personalInfo,lastName: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.lastnameLabel'></Trans>}
                        placeholder={t("steps:personalInformation.lastnamePlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.birthDate}
                        onChange={(event) => setPersonalInfo({...personalInfo,birthDate: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.birthdayLabel'></Trans>}
                        placeholder={t("steps:personalInformation.birthdayPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.birthPlace}
                        onChange={(event) => setPersonalInfo({...personalInfo,birthPlace: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.birthcityLabel'></Trans>}
                        placeholder={t("steps:personalInformation.birthdayPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.job}
                        onChange={(event) => setPersonalInfo({...personalInfo,job: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.workLabel'></Trans>}
                        placeholder={t("steps:personalInformation.workPlaceholder")}
                        variant="outlined"
                    />
                    </div>
                </Grid>
                
                {/* KONTACT INFORMATIONEN */}
                <Grid item xs={12}>
                     <p className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:personalInformation.contactinformation'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:personalInformation.contactIntrotext'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="outlined-required"
                                    value={addressInfo.addressStreet}
                                    onChange={(event) => setAddressInfo({...addressInfo,addressStreet: event.target.value})}
                                    label={<Trans i18nKey='steps:personalInformation.streetLabel'></Trans>}
                                    placeholder={t("steps:personalInformation.streetPlaceholder")}
                                    variant="outlined"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="outlined-required"
                                    value={addressInfo.addressStreetNr}
                                    onChange={(event) => setAddressInfo({...addressInfo,addressStreetNr: event.target.value})}
                                    label={<Trans i18nKey='steps:personalInformation.numberLabel'></Trans>}
                                    placeholder={t("steps:personalInformation.numberPlaceholder")}
                                    variant="outlined"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="outlined-required"
                                    value={addressInfo.addressPLZ}
                                    onChange={(event) => setAddressInfo({...addressInfo,addressPLZ: event.target.value})}
                                    label={<Trans i18nKey='steps:personalInformation.postLabel'></Trans>}
                                    placeholder={t("steps:personalInformation.postPlaceholder")}
                                    variant="outlined"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="outlined-required"
                                    value={addressInfo.addressResidency}
                                    onChange={(event) => setAddressInfo({...addressInfo,addressResidency: event.target.value})}
                                    label={<Trans i18nKey='steps:personalInformation.citylivingLabel'></Trans>}
                                    placeholder={t("steps:personalInformation.citylivingPlaceholder")}
                                    variant="outlined"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            className={classes.select}
                            id="outlined-required"
                            value={addressInfo.addressCountry}
                            onChange={(event) => setAddressInfo({...addressInfo,addressCountry: event.target.value})}
                            select
                            label={<Trans i18nKey='steps:personalInformation.countryLabel'></Trans>}
                            placeholder={t("steps:personalInformation.countryPlaceholder")}
                            variant="outlined"
                    
                        >
                        {countries.map((option, i) => (
                            <MenuItem key={i} value={option.code}>
                            {option.name}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Grid>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.nationality}
                        onChange={(event) => setPersonalInfo({...personalInfo,nationality: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.nationalityLabel'></Trans>}
                        placeholder={t("steps:personalInformation.nationalityPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.email}
                        onChange={(event) => setPersonalInfo({...personalInfo,email: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.emailLabel'></Trans>}
                        placeholder={t("steps:personalInformation.emailPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        value={personalInfo.contactPhone}
                        onChange={(event) => setPersonalInfo({...personalInfo,contactPhone: event.target.value})}
                        label={<Trans i18nKey='steps:personalInformation.mobileLabel'></Trans>}
                        placeholder={t("steps:personalInformation.mobileLabel")}
                        variant="outlined"
                    />
                    </div>

                </Grid>
            

            {/* KONTACT INFORMATIONEN */}
            <Grid item xs={12}>
                    <p className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:personalInformation.languageInformation'></Trans></p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <p className="font-medium text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:personalInformation.languageIntrotext'></Trans></p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Grid container>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={languageInfo.languageGerman}
                                    onChange={(event) => setLanguageInfo({...languageInfo, languageGerman: !languageInfo.languageGerman})}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={<Trans i18nKey='steps:personalInformation.german'></Trans>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={languageInfo.languageEnglish}
                                    onChange={(event) => setLanguageInfo({...languageInfo, languageEnglish: !languageInfo.languageEnglish})}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={<Trans i18nKey='steps:personalInformation.english'></Trans>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={languageInfo.languageFrench}
                                    onChange={(event) => setLanguageInfo({...languageInfo, languageFrench: !languageInfo.languageFrench})}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={<Trans i18nKey='steps:personalInformation.french'></Trans>}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={languageInfo.languageSpanish}
                                    onChange={(event) => setLanguageInfo({...languageInfo, languageSpanish: !languageInfo.languageSpanish})}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label={<Trans i18nKey='steps:personalInformation.spanish'></Trans>}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <Button variant="contained" size="large" color="default">
                        <Trans i18nKey='steps:personalInformation.previous'></Trans>
                    </Button>
                </Grid>
                <Grid xs={6} container justify="flex-end">
                    <Button  type="submit" variant="contained" size="large" color="primary">
                        <Trans i18nKey='steps:personalInformation.next'></Trans>
                    </Button>
                </Grid>
            </Grid>
            </Grid> 
        </form>
    </div>
    )
}

export default PersonalInformationStep;