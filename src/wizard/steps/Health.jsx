import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


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

  

function HealthStep() {
    const heightUnits = [
        {
          value: 'cm',
          label: 'cm',
        },
        {
          value: 'inch',
          label: 'inch',
        },
        {
          value: 'm',
          label: 'm',
        }
      ];
    
    const weightUnits = [
        {
          value: 'g',
          label: 'g',
        },
        {
          value: 'kg',
          label: 'kg',
        },
        {
          value: 'pound',
          label: 'pound',
        }
      ];
    

    const classes = useStyles();
    const [currency, setCurrency] = React.useState('EUR');
    const [title, setTitle] = React.useState('mr');
    const [land, setLand] = React.useState('de');
    const {t, i18n} = useTranslation(['translation', 'common']);

    // const handleChange = (event) => {
    //     setCurrency(event.target.value);
    // };

    // const handleTitle = (event) => {
    //     setTitle(event.target.value);
    // };

    // const handleLand = (event) => {
    //     setLand(event.target.value);
    // };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item className={classes.paper}>
                    <p className="font-medium text-sm mb-4 uppercase text-gray-400"><Trans i18nKey='steps:healthStep.stepTopic'></Trans></p>
                    <h2 className="font-large text-3xl mb-4 text-black-400"><Trans i18nKey='steps:healthStep.stepGreeting'></Trans></h2>
                </Grid>

                {/* about me section */}
                <Grid item xs={12}>
                     <p className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading2'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-sm mb-4 italic text-gray-400"><Trans i18nKey='steps:healthStep.heading2text'></Trans></p>
                </Grid>   
                <Grid item sm={12} xs={12}>
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
                        label={<Trans i18nKey='steps:healthStep.h2check1label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check2label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check3label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check4label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check5label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check6label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check7label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check8label'></Trans>}
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
                        label={<Trans i18nKey='steps:healthStep.h2check9label'></Trans>}
                    />
                </div>
                </Grid>  
                <Grid item xs={12}>
                    <Grid item xs={12}>                        
                        <h2 className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading3'></Trans></h2>
                    </Grid>  
                    <Grid container xs={12}>   
                        <Grid item sm={6}>
                            <p className="font-medium text-sm mb-4 italic text-grey-500"><Trans i18nKey='steps:healthStep.heading3text'></Trans></p>
                            <p className="font-medium text-sm mb-4 italic text-grey-500"><Trans i18nKey='steps:healthStep.heading3compulsory'></Trans></p>
                        </Grid>
                        <Grid item sm={6}>
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
                                label={<Trans i18nKey='steps:healthStep.h3check1label'></Trans>}
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
                                label={<Trans i18nKey='steps:healthStep.h3check2label'></Trans>}
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
                                label={<Trans i18nKey='steps:healthStep.h3check3label'></Trans>}
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
                                label={<Trans i18nKey='steps:healthStep.h3check4label'></Trans>}
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
                                label={<Trans i18nKey='steps:healthStep.h3check5label'></Trans>}
                            />
                        </div>
                    </Grid>
                    </Grid>
                </Grid>

                {/* second page */}
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <h2 className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading4'></Trans></h2>
                    </Grid>
                    <Grid container sm={12}>
                        <Grid item sm={6}>
                            <p className="font-medium text-sm mb-4 italic text-grey-500"><Trans i18nKey='steps:healthStep.heading4text'></Trans></p>
                        </Grid>
                        <Grid container sm={6}>
                            <Grid container sm={12}>
                                <Grid item sm={9} xs={6}>
                                    <TextField
                                        className="w-full"
                                        id="outlined-required"
                                        label={<Trans i18nKey='steps:healthStep.bodyheightLabel'></Trans>}
                                        placeholder={t("steps:healthStep.bodyheightPlaceholder")}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <TextField
                                        className={classes.select}
                                        id="outlined-required"
                                        select
                                        label={<Trans i18nKey='steps:healthStep.unitLabel'></Trans>}
                                        // value={height}
                                        // onChange={handleChange}
                                        variant="outlined"
                                    
                                    >
                                    {heightUnits.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                        </MenuItem>
                                    ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid container sm={12}>
                            <Grid item sm={9} xs={6}>
                                <TextField
                                    className="w-full"
                                    id="outlined-required"
                                    label={<Trans i18nKey='steps:healthStep.bodyweightLabel'></Trans>}
                                    placeholder={t("steps:healthStep.bodyweightPlaceholder")}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item  sm={3} xs={6}>
                                <TextField
                                    className={classes.select}
                                    id="outlined-required"
                                    select
                                    label={<Trans i18nKey='steps:healthStep.unitLabel'></Trans>}
                                    // value={height}
                                    // onChange={handleChange}
                                    variant="outlined"
                                
                                >
                                {weightUnits.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                
                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <h2 className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading5'></Trans></h2>
                        <p className="font-medium text-sm mb-4 text-grey-500"><Trans i18nKey='steps:healthStep.heading5text1'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item sm={6} xs={12}>
                            <div>
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                            </div>
                            <div>                         
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                    id="outlined-multiline-static"
                                    label={<Trans i18nKey='steps:healthStep.h5input1Label'></Trans>}
                                    placeholder={t("steps:healthStep.h5input1Placeholder")}
                                    multiline
                                    rows={7}
                                    fullWidth={true}
                                    variant="outlined"
                                    />   
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="font-medium text-sm mb-4 text-grey-500"><Trans i18nKey='steps:healthStep.heading5text2'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item  sm={6} xs={12}>
                            <div>
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                            </div>
                            <div>                         
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                            </div>
                        </Grid>
                        <Grid item  sm={6} xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h5input2Label'></Trans>}
                                placeholder={t("steps:healthStep.h5input2Placeholder")}
                                multiline
                                rows={7}
                                fullWidth={true}
                                variant="outlined"
                                    />   
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container xs={12}>
                    <Grid item xs={12}>
                        <h2 className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading6'></Trans></h2>
                        <p className="font-medium text-sm mb-4 text-grey-500"><Trans i18nKey='steps:healthStep.heading6text1'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item sm={6} xs={12}>
                            <div>
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                            </div>
                            <div>                         
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                            </div>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                    id="outlined-multiline-static"
                                    label={<Trans i18nKey='steps:healthStep.h6input1Label'></Trans>}
                                    placeholder={t("steps:healthStep.h6input1Placeholder")}
                                    multiline
                                    rows={7}
                                    fullWidth={true}
                                    variant="outlined"
                                    />   
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="font-medium text-sm mb-4 text-grey-500"><Trans i18nKey='steps:healthStep.heading5text2'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item  sm={6} xs={12}>
                            <div>
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                            </div>
                            <div>                         
                                <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                            </div>
                        </Grid>
                        <Grid item  sm={6} xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h5input2Label'></Trans>}
                                placeholder={t("steps:healthStep.h5input2Placeholder")}
                                multiline
                                rows={7}
                                fullWidth={true}
                                variant="outlined"
                                />   
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid item xs={12}>
                        <h2 className="font-medium text-sm mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading7'></Trans></h2>
                    </Grid>
                    <Grid item xs={12}> 
                        <p className="font-medium text-sm mb-4 text-grey-500"><Trans i18nKey='steps:healthStep.heading7text'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.heading7check1Label'></Trans>}/>
                        <FormControlLabel value="female" control={<Radio />} label={<Trans i18nKey='steps:healthStep.heading7check2Label'></Trans>}/>
                    </Grid>
                    <Grid container className="my-6 p-4 border border-blue-300 bg-blue-100 rounded" xs={12}>
                            <Grid container xs={12} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label={<Trans i18nKey='steps:healthStep.forminpu1Label'></Trans>}
                                        placeholder={t("steps:healthStep.forminpu1Placeholder")}
                                        fullWidth={true}
                                        variant="filled"
                                        />  
                                </Grid>
                                <Grid item xs={5}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label={<Trans i18nKey='steps:healthStep.forminpu2Label'></Trans>}
                                        placeholder={t("steps:healthStep.forminpu2Placeholder")}
                                        fullWidth={true}
                                        variant="filled"
                                        />  
                                </Grid>
                                <Grid container xs={1} justify="flex-end" alignItems="center">
                                    <DeleteForeverOutlinedIcon className="size-lg" />
                                </Grid>
                            </Grid>
                            
                            <Grid container xs={12} className="pt-6" spacing={1}>
                                <Grid item sm={3} xs={6}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label={<Trans i18nKey='steps:healthStep.forminpu3Label'></Trans>}
                                        placeholder={t("steps:healthStep.forminpu3Placeholder")}
                                        fullWidth={true}
                                        variant="filled"
                                        />  
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label={<Trans i18nKey='steps:healthStep.forminpu4Label'></Trans>}
                                        placeholder={t("steps:healthStep.forminpu4Placeholder")}
                                        fullWidth={true}
                                        variant="filled"
                                        />  
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label={<Trans i18nKey='steps:healthStep.forminpu5Label'></Trans>}
                                        placeholder={t("steps:healthStep.forminpu5Placeholder")}
                                        fullWidth={true}
                                        variant="filled"
                                        />  
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label={<Trans i18nKey='steps:healthStep.forminpu6Label'></Trans>}
                                        placeholder={t("steps:healthStep.forminpu6Placeholder")}
                                        fullWidth={true}
                                        variant="filled"
                                        />  
                                </Grid>
                            </Grid>
                    </Grid>

                    <Grid container xs={12} justify="center" alignItems="center">
                        <Button variant="contained" color="primary" disableElevation>
                            <Trans i18nKey='steps:healthStep.formaddbuttontext'></Trans>
                        </Button>
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
            </Grid>
    </div>
    )
}

export default HealthStep;