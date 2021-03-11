import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';


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

  

function PersonalInformationStep() {
    const currencies = [
        {
          value: 'USD',
          label: 'dollar',
        },
        {
          value: 'EUR',
          label: 'euro',
        },
        {
          value: 'BTC',
          label: 'bitcoin',
        },
        {
          value: 'JPY',
          label: 'japanese yen',
        },
      ];
    
      const Titles = [
        {
          value: 'mr',
          label: 'mr.',
        },
        {
          value: 'ms',
          label: 'ms.',
        },
        {
          value: 'mrs',
          label: 'mrs.',
        }
      ];
    
      const Lands = [
        {
          value: 'De',
          label: 'de',
        },
        {
          value: 'US',
          label: 'us',
        },
        {
          value: 'SP',
          label: 'sp',
        }
      ];

    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
    const [title, setTitle] = React.useState('mr');
    const [land, setLand] = React.useState('de');
    const {t, i18n} = useTranslation(['translation', 'common']);

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const handleTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleLand = (event) => {
        setLand(event.target.value);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item className={classes.paper}>
                    <p className="font-medium text-sm mb-4 uppercase text-gray-400"><Trans i18nKey='steps:personalInformation.stepTopic'></Trans></p>
                    <h2 className="font-large text-3xl mb-4 text-black-400"><Trans i18nKey='steps:personalInformation.stepGreeting'></Trans></h2>
                </Grid>

                {/* about me section */}
                <Grid item xs={12}>
                     <p className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:personalInformation.aboutme'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-sm mb-4 italic text-gray-400"><Trans i18nKey='steps:personalInformation.aboutmeIntrotext'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.select}
                                id="outlined-required"
                                select
                                label={<Trans i18nKey='steps:personalInformation.dropdown1Label'></Trans>}
                                value={currency}
                                onChange={handleChange}
                                variant="outlined"
                            
                            >
                            {currencies.map((option) => (
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
                                value={title}
                                onChange={handleTitle}
                                variant="outlined"
                        
                            >
                            {Titles.map((option) => (
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
                        label={<Trans i18nKey='steps:personalInformation.firstnameLabel'></Trans>}
                        placeholder={t("steps:personalInformation.firstnamePlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        label={<Trans i18nKey='steps:personalInformation.lastnameLabel'></Trans>}
                        placeholder={t("steps:personalInformation.lastnamePlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        label={<Trans i18nKey='steps:personalInformation.birthdayLabel'></Trans>}
                        placeholder={t("steps:personalInformation.birthdayPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        label={<Trans i18nKey='steps:personalInformation.birthcityLabel'></Trans>}
                        placeholder={t("steps:personalInformation.birthdayPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        label={<Trans i18nKey='steps:personalInformation.workLabel'></Trans>}
                        placeholder={t("steps:personalInformation.workPlaceholder")}
                        variant="outlined"
                    />
                    </div>
                </Grid>
                
                {/* KONTACT INFORMATIONEN */}
                <Grid item xs={12}>
                     <p className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:personalInformation.contactinformation'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-sm mb-4 italic text-gray-400"><Trans i18nKey='steps:personalInformation.contactIntrotext'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="outlined-required"
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
                            select
                            label={<Trans i18nKey='steps:personalInformation.countryLabel'></Trans>}
                            placeholder={t("steps:personalInformation.countryPlaceholder")}
                            value={land}
                            onChange={handleLand}
                            variant="outlined"
                    
                        >
                        {Lands.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Grid>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        label={<Trans i18nKey='steps:personalInformation.nationalityLabel'></Trans>}
                        placeholder={t("steps:personalInformation.nationalityPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        label={<Trans i18nKey='steps:personalInformation.emailLabel'></Trans>}
                        placeholder={t("steps:personalInformation.emailPlaceholder")}
                        variant="outlined"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="outlined-required"
                        label={<Trans i18nKey='steps:personalInformation.mobileLabel'></Trans>}
                        placeholder={t("steps:personalInformation.mobileLabel")}
                        variant="outlined"
                    />
                    </div>

                </Grid>
            

            {/* KONTACT INFORMATIONEN */}
            <Grid item xs={12}>
                    <p className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:personalInformation.languageInformation'></Trans></p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <p className="font-medium text-sm mb-4 italic text-gray-400"><Trans i18nKey='steps:personalInformation.langaugeIntrotext'></Trans></p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Grid container>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange}
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
                                // checked={state.checkedB}
                                // onChange={handleChange}
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
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
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
                                    // checked={state.checkedB}
                                    // onChange={handleChange}
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
                    <Button variant="contained" size="large" color="primary">
                        <Trans i18nKey='steps:personalInformation.next'></Trans>
                    </Button>
                </Grid>
            </Grid>
            </Grid>
    </div>
    )
}

export default PersonalInformationStep;