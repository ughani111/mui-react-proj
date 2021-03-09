import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
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

  

function PersonalInformation() {
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
    const [t, i18n] = useTranslation('common');

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
        <div className={classes.root}>{t('common.personalInfo')}
            <Grid container spacing={3}>
                <Grid item className={classes.paper}>
                    <p className="font-medium text-sm mb-4 uppercase text-gray-400">{t('personalInfo')}</p>
                    <h2 className="font-large text-3xl mb-4 text-black-400">Schön, Sie kennen zu lernen</h2>
                </Grid>

                {/* about me section */}
                <Grid item xs={12}>
                     <p className="font-medium text-sm mb-4 uppercase text-blue-500">UBER MICH</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-sm mb-4 italic text-gray-400">Introductiontext whats behind requestion this Information</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                className={classes.select}
                                id="filled-select-currency"
                                select
                                label="Geschlecht*"
                                value={currency}
                                onChange={handleChange}
                            
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
                                id="filled-select-currency"
                                select
                                label="Title*"
                                value={title}
                                onChange={handleTitle}
                        
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
                        id="filled-required"
                        label="Vorname *"
                        placeholder="Ihr Vorname"
                        variant="filled"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="filled-required"
                        label="Nachname *"
                        placeholder="Ihr Nachname"
                        variant="filled"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="filled-required"
                        label="Geburtsdatum *"
                        placeholder="Ihr Geburtsdatum"
                        variant="filled"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="filled-required"
                        label="Geburtsort *"
                        placeholder="Ihr Geburtsort"
                        variant="filled"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="filled-required"
                        label="Beruf"
                        placeholder="Ihr Beruf"
                        variant="filled"
                    />
                    </div>
                </Grid>
                
                {/* KONTACT INFORMATIONEN */}
                <Grid item xs={12}>
                     <p className="font-medium text-sm mb-4 uppercase text-blue-500">KONTAKT INFORMATIONEN</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-sm mb-4 italic text-gray-400">Introductiontext whats behind requestion this Information</p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={9}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="filled-required"
                                    label="Straße *"
                                    placeholder="Straßenname"
                                    variant="filled"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="filled-required"
                                    label="Nr. *"
                                    placeholder="Haus Nr."
                                    variant="filled"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={3}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="filled-required"
                                    label="Postleitzahl *"
                                    placeholder="PLZ"
                                    variant="filled"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <div>
                                <TextField
                                    className={classes.input}
                                    id="filled-required"
                                    label="Wohnort *"
                                    placeholder="Ihr Wohnort"
                                    variant="filled"
                                />
                            </div>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            className={classes.select}
                            id="filled-select-currency"
                            select
                            label="Land *"
                            value={land}
                            onChange={handleLand}
                    
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
                        id="filled-required"
                        label="Nationalität"
                        placeholder="Ihre Nationalität"
                        variant="filled"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="filled-required"
                        label="Email *"
                        placeholder="Ihre Email"
                        variant="filled"
                    />
                    </div>

                    <div>
                    <TextField
                        className={classes.input}
                        id="filled-required"
                        label="Mobiltelefon *"
                        placeholder="Ihre Mobiltelefon"
                        variant="filled"
                    />
                    </div>

                </Grid>
            

            {/* KONTACT INFORMATIONEN */}
            <Grid item xs={12}>
                    <p className="font-medium text-sm mb-4 uppercase text-blue-500">SPRACHEN</p>
            </Grid>
            <Grid item sm={6} xs={12}>
                <p className="font-medium text-sm mb-4 italic text-gray-400">Introductiontext whats behind requestion this Information</p>
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
                            label="Deutsch"
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
                            label="English"
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
                            label="Französisch"
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
                            label="Spanish"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <Button variant="contained" size="large" color="default">
                        Zuruk
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" size="large" color="primary">
                        Weiter
                    </Button>
                </Grid>
            </Grid>
            </Grid>
    </div>
    )
}

export default PersonalInformation;