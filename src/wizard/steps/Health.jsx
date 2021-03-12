import React, { useRef, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { Filter } from '@material-ui/icons';


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
    
    

    const classes = useStyles();
    const [drugs, addDrugs] = React.useState([{
        index: Math.random(),
        name: "",
        author: "",
        type: "",
        dateOfPublish: "",
        price: ""
    }]);
    const [title, setTitle] = React.useState('mr');
    const [land, setLand] = React.useState('de');
    const {t, i18n} = useTranslation(['translation', 'common']);

    const heightUnits = [{value: 'cm',label: 'cm',}, {value: 'inch',label: 'inch',},{value: 'm',label: 'm',}];
    const weightUnits = [{value: 'g',label: 'g',},{value: 'kg',label: 'kg',},{value: 'pound',label: 'pound',}];
    const medications = [{value: "medicationBloodThinning", label: t("steps:healthStep.forminpu2Label2")},
                            {value: "medicationDiabetes", label: t("steps:healthStep.forminpu2Label3")},
                            {value: "medicationImmuneSuppressive", label: t("steps:healthStep.forminpu2Label4")},
                            {value: "medicationOther", label: t("steps:healthStep.forminpu2Label5")}];
        



    const [resonPrevention, setResonPrevention] = useState(false);
    const [reasonRegeneration, setReasonRegeneration] = useState(false);
    const [reasonWeight, setReasonWeight] = useState(false);
    const [reasonSmoke, setReasonSmoke] = useState(false);
    const [reasonAcute, setReasonAcute] = useState(false);
    const [reasonAcuteDetail, setReasonAcuteDetail] = useState("");
    const [reasonChronic, setReasonChronic] = useState(false);
    const [reasonLocomotive, setReasonLokomotive] = useState(false);
    const [reasonLocomotiveDetail, setReasonLocomotiveDetail] = useState("");
    const [reasonDigestive, setReasonDigestive] = useState(false);
    const [exclusionDiabetes, setExclusionDiabetes] = useState(false);
    const [exclusionCancer, setExclusionCancer] = useState(false);
    const [exclusionDrugs, setExclusionDrugs] = useState(false);
    const [exclusionEatingDis, setExclusionEatingDis] = useState(false);
    const [medicationGeneral, setMedicationGeneral] = useState(false);

    const [disabilityFood, setDisabilityFood] = useState(false);
    const [disabilityFoodDetail, setDisabilityFoodDetail] = useState("");
    const [disabilityMedAllergy, setDisabilityMedAllergy] = useState(false);
    const [disabilityMedAllergyDetail, setDisabilityMedAllergyDetail] = useState("");
    const [disabilityLocomotion, setDisabilityLocomotion] = useState(false);
    const [disabilityLocomotionDetail, setDisabilityLocomotionDetail] = useState("");
    const [disabilityHelp, setDisabilityHelp] = useState(false);
    const [disabilityHelpDetail, setDisabilityHelpDetail] = useState("");

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    
    const formSubmit = form => {
    
        console.log(resonPrevention)
    }

    const addnewdrug = () => {
        const newElement = {}
        console.log("before new drug added", drugs);
        addDrugs(oldArray=> [...oldArray, newElement]);
        console.log("after new drug added", drugs);
    };

    const removedrug = (event) => {        
        const removeEl = event.currentTarget.getAttribute('id');
        console.log("before new drug added", removeEl);
        addDrugs(
                drugs.filter((current, index, arr)=> {
                    console.log("index", index);
                    console.log("current", current);    
                    return index != parseInt(removeEl)                    
                    }
                ))
                
        console.log("after new drug added", drugs);
    };


    return (
        <div className={classes.root}>
            <form action="#" noValidate>
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
                                value={resonPrevention}
                                onChange={()=> setResonPrevention(!resonPrevention)}
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
                                value={reasonRegeneration}
                                onChange={()=> setReasonRegeneration(!reasonRegeneration)}
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
                                value={reasonWeight}
                                onChange={()=> setReasonWeight(!reasonWeight)}
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
                                value={reasonSmoke}
                                onChange={()=> setReasonSmoke(!reasonSmoke)}
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
                                value={reasonAcute}
                                onChange={()=> setReasonAcute(!reasonAcute)}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={<Trans i18nKey='steps:healthStep.h2check5label'></Trans>}
                    />
                </div>
                { 
                    reasonAcute && 
                    (
                    <div>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h2check5label1'></Trans>}
                                placeholder={t("steps:healthStep.h2check5placeholder1")}
                                value={reasonAcuteDetail}
                                onChange={(event)=> setReasonAcuteDetail(event.target.value)}
                                fullWidth={true}
                                variant="outlined"
                                />  
                        </Grid>
                    </div>
                    )
                }
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={reasonChronic}
                                onChange={()=> setReasonChronic(!reasonChronic)}
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
                                value={reasonLocomotive}
                                onChange={()=> setReasonLokomotive(!reasonLocomotive)}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={<Trans i18nKey='steps:healthStep.h2check7label'></Trans>}
                    />
                </div>
                { 
                    reasonLocomotive && 
                    (
                    <div>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h2check5input1'></Trans>}
                                placeholder={t("steps:healthStep.h2check5input1placeholder")}
                                value={reasonLocomotiveDetail}
                                onChange={(event)=> setReasonLocomotiveDetail(event.target.value)}
                                fullWidth={true}
                                variant="outlined"
                                />  
                        </Grid>
                    </div>
                    )
                }
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={reasonDigestive}
                                onChange={()=> setReasonDigestive(!reasonDigestive)}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={<Trans i18nKey='steps:healthStep.h2check8label'></Trans>}
                    />
                </div>
                {/* <div>
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
                </div> */}
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
                                        value={exclusionDiabetes}
                                        onChange={()=> setExclusionDiabetes(!exclusionDiabetes)}
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
                                        value={exclusionCancer}
                                        onChange={()=> setExclusionCancer(!exclusionCancer)}
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
                                        value={exclusionDrugs}
                                        onChange={()=> setExclusionDrugs(!exclusionDrugs)}
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
                                        value={exclusionEatingDis}
                                        onChange={()=> setExclusionEatingDis(!exclusionEatingDis)}
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
                                        value={height}
                                        onChange={(event)=> setHeight(event.target.value)}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item sm={3} xs={6}>
                                    <TextField
                                        className={classes.select}
                                        id="outlined-required"
                                        select
                                        label={<Trans i18nKey='steps:healthStep.unitLabel'></Trans>}
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
                                    value={weight}
                                    onChange={(event)=> setWeight(event.target.value)}
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
                            <RadioGroup aria-label="gender" name="gender1" value={disabilityFood} onChange={()=> setDisabilityFood(!disabilityFood)}>
                                <div>
                                    <FormControlLabel value={false} control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                                </div>
                                <div>                         
                                    <FormControlLabel value={true} control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                                </div>
                            </RadioGroup>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                    id="outlined-multiline-static"
                                    label={<Trans i18nKey='steps:healthStep.h5input1Label'></Trans>}
                                    placeholder={t("steps:healthStep.h5input1Placeholder")}
                                    value={disabilityFoodDetail}
                                    onChange={event=> setDisabilityFoodDetail(event.target.value)}
                                    multiline
                                    disabled
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
                        <RadioGroup aria-label="gender" name="gender1" value={disabilityMedAllergy} onChange={()=> setDisabilityMedAllergy(!disabilityMedAllergy)}>
                            <div>
                                <FormControlLabel value={false} control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                            </div>
                            <div>                         
                                <FormControlLabel value={true} control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                            </div>
                        </RadioGroup>
                        </Grid>
                        <Grid item  sm={6} xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h5input2Label'></Trans>}
                                placeholder={t("steps:healthStep.h5input2Placeholder")}
                                value={disabilityMedAllergyDetail}
                                onChange={event=> setDisabilityMedAllergyDetail(event.target.value)}
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
                            <RadioGroup aria-label="gender" name="gender1" value={disabilityLocomotion} onChange={()=> setDisabilityLocomotion(!disabilityLocomotion)}>
                                <div>
                                    <FormControlLabel value={false} control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                                </div>
                                <div>                         
                                    <FormControlLabel value={true} control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                                </div>
                            </RadioGroup>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                            <TextField
                                    id="outlined-multiline-static"
                                    label={<Trans i18nKey='steps:healthStep.h6input1Label'></Trans>}
                                    placeholder={t("steps:healthStep.h6input1Placeholder")}
                                    value={disabilityLocomotionDetail}
                                    onChange={event=> setDisabilityLocomotionDetail(event.target.value)}
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
                        <RadioGroup aria-label="gender" name="gender1" value={disabilityHelp} onChange={()=> setDisabilityHelp(!disabilityHelp)}>
                            <div>
                                <FormControlLabel value={false} control={<Radio />} label={<Trans i18nKey='steps:healthStep.noLabel'></Trans>}/>
                            </div>
                            <div>                         
                                <FormControlLabel value={true} control={<Radio />} label={<Trans i18nKey='steps:healthStep.yesfollowLabel'></Trans>} />
                            </div>
                        </RadioGroup>
                        </Grid>
                        <Grid item  sm={6} xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h5input2Label'></Trans>}
                                placeholder={t("steps:healthStep.h5input2Placeholder")}
                                value={disabilityHelpDetail}
                                onChange={event=> setDisabilityHelpDetail(event.target.value)}
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
                            <RadioGroup aria-label="gender" name="gender1" value={medicationGeneral} onChange={()=> setMedicationGeneral(!medicationGeneral)}>
                                <FormControlLabel value={false} control={<Radio />} label={<Trans i18nKey='steps:healthStep.heading7check1Label'></Trans>}/>
                                <FormControlLabel value={true} control={<Radio />} label={<Trans i18nKey='steps:healthStep.heading7check2Label'></Trans>}/>
                            </RadioGroup>
                        </Grid>
                        { medicationGeneral &&
                        drugs.map((cur, i) => (
                        <Grid container className="my-6 p-4 border border-blue-300 bg-blue-100 rounded" xs={12}  key={i}>
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
                                            className={classes.select}
                                            id="outlined-multiline-static"
                                            select
                                            label={<Trans i18nKey='steps:healthStep.forminpu2Label'></Trans>}
                                            // value={height}
                                            // onChange={handleChange}
                                            variant="filled"
                                        
                                        >
                                        {medications.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                    </Grid>
                                    <Grid container xs={1} justify="flex-end" alignItems="center">
                                        <DeleteForeverOutlinedIcon id={i}  onClick={removedrug} className="size-lg" />
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
                        ))}

                        <Grid container xs={12} justify="center" alignItems="center">
                            <Button variant="contained" color="primary" onClick={addnewdrug}>
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
                    <Button onClick={formSubmit} variant="contained" size="large" color="primary">
                        <Trans i18nKey='steps:personalInformation.next'></Trans>
                    </Button>
                </Grid>
            </Grid>
            </Grid>
        </form>
    </div>
    )
}

export default HealthStep;