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


  const extractReasons = (stepState) => {
    return { 
        reasonPrevention: stepState.resonPrevention, 
        reasonRegeneration: stepState.reasonRegeneration, 
        reasonWeight: stepState.reasonWeight,
        reasonSmoke: stepState.reasonSmoke,
        reasonAcute: stepState.reasonAcute,
        reasonAcuteDetail: stepState.reasonAcuteDetail,
        reasonChronic: stepState.reasonChronic,
        reasonLocomotive: stepState.reasonLocomotive,
        reasonLocomotiveDetail: stepState.reasonLocomotiveDetail,
        reasonDigestive: stepState.reasonDigestive
    }
   }

   const extractExclusion = (stepState) => {
    return { 
        exclusionDiabetes: stepState.exclusionDiabetes, 
        exclusionCancer: stepState.exclusionCancer, 
        exclusionDrugs: stepState.exclusionDrugs,
        exclusionEatingDis: stepState.exclusionEatingDis
    }
   }

   const extractDisabilities = (stepState) => {
    return { 
        disabilityFood: stepState.disabilityFood, 
        disabilityFoodDetail: stepState.disabilityFoodDetail, 
        disabilityMedAllergy: stepState.disabilityMedAllergy,
        disabilityMedAllergyDetail: stepState.disabilityMedAllergyDetail,
        disabilityLocomotion: stepState.disabilityLocomotion,
        disabilityLocomotionDetail: stepState.disabilityLocomotionDetail,
        disabilityHelp: stepState.disabilityHelp,
        disabilityHelpDetail: stepState.disabilityHelpDetail
    }
   }

   const extractGeneralInfo = (stepState) => {
    return { 
        title: "", 
        land: "", 
        weight: "",
        height: "",
        medicationGeneral: stepState.medicationGeneral,
        medication: stepState.medication
    }
   }


function HealthStep({stepState, onSubmit, onGoBack}) {
    const classes = useStyles();
    const {t, i18n} = useTranslation(['translation', 'common']);

    const heightUnits = [{value: 'cm',label: 'cm',}, {value: 'inch',label: 'inch',},{value: 'm',label: 'm',}];
    const weightUnits = [{value: 'g',label: 'g',},{value: 'kg',label: 'kg',},{value: 'pound',label: 'pound',}];
    const medications = [{value: "medicationBloodThinning", label: t("steps:healthStep.forminpu2Label2")},
                            {value: "medicationDiabetes", label: t("steps:healthStep.forminpu2Label3")},
                            {value: "medicationImmuneSuppressive", label: t("steps:healthStep.forminpu2Label4")},
                            {value: "medicationOther", label: t("steps:healthStep.forminpu2Label5")}];
        


    const [generalInfo, setGeneralInfo] = useState(extractGeneralInfo(stepState));
    const [reasons, setReasons] = useState(extractReasons(stepState));
    const [exclusions, setExclusions] = useState(extractExclusion(stepState));
    const [disabilities, setDisabilities] = useState(extractDisabilities(stepState));

    const addMedication = () => {
        const newElement = {
            index: Math.random(),
            name: "",
            author: "",
            type: "",
            dateOfPublish: "",
            price: ""
        }
        setGeneralInfo(prevState=> ({...prevState, medication: [...prevState.medication, newElement]}));
    };

    const removeMedication = (medicationObj) => {  
        console.log("filter...", medicationObj, generalInfo.medication, generalInfo.medication.filter(item=> item.index !== medicationObj.index))
        setGeneralInfo(prevState=> ({...prevState, medication: prevState.medication.filter(item=> item.index !== medicationObj.index)}));   
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formState = {...disabilities, ...reasons, ...exclusions, ...generalInfo}
        onSubmit(formState, 3);
    }

    const stepBackHandler = (event) => {
        event.preventDefault();
        
        const formState = {...disabilities, ...reasons, ...exclusions, ...generalInfo}
        onGoBack(formState, 3);

    }

    return (
        <div className={classes.root}>
            <form action="#" onSubmit={handleSubmit} noValidate>
            <Grid container spacing={3}>
                <Grid item className={classes.paper}>
                    <p className="font-medium text-md mb-4 uppercase text-gray-400"><Trans i18nKey='steps:healthStep.stepTopic'></Trans></p>
                    <h2 className="font-medium text-4xl text-gray-700 mb-4"><Trans i18nKey='steps:healthStep.stepGreeting'></Trans></h2>
                </Grid>

                {/* about me section */}
                <Grid item xs={12}>
                     <p className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading2'></Trans></p>
                </Grid>
                <Grid item sm={6} xs={12}>
                    <p className="font-medium text-md mb-4 italic text-gray-400"><Trans i18nKey='steps:healthStep.heading2text'></Trans></p>
                </Grid>   
                <Grid item sm={12} xs={12}>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                value={reasons.reasonPrevention}
                                onChange={()=> setReasons({...reasons, reasonPrevention: !reasons.reasonPrevention})}
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
                                value={reasons.reasonRegeneration}
                                onChange={()=> setReasons({...reasons, reasonRegeneration: !reasons.reasonRegeneration})}
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
                                value={reasons.reasonWeight}
                                onChange={()=> setReasons({...reasons, reasonWeight: !reasons.reasonWeight})}
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
                                value={reasons.reasonSmoke}
                                onChange={()=> setReasons({...reasons, reasonSmoke: !reasons.reasonSmoke})}
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
                                value={reasons.reasonAcute}
                                onChange={()=> setReasons({...reasons, reasonAcute: !reasons.reasonAcute})}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={<Trans i18nKey='steps:healthStep.h2check5label'></Trans>}
                    />
                </div>
                { 
                    reasons.reasonAcute && 
                    (
                    <div>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h2check5label1'></Trans>}
                                placeholder={t("steps:healthStep.h2check5placeholder1")}
                                value={reasons.reasonAcuteDetail}
                                onChange={()=> setReasons({...reasons, reasonAcuteDetail: !reasons.reasonAcuteDetail})}
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
                                value={reasons.reasonChronic}
                                onChange={()=> setReasons({...reasons, reasonChronic: !reasons.reasonChronic})}
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
                                value={reasons.reasonLocomotive}
                                onChange={()=> setReasons({...reasons, reasonLocomotive: !reasons.reasonLocomotive})}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label={<Trans i18nKey='steps:healthStep.h2check7label'></Trans>}
                    />
                </div>
                { 
                    reasons.reasonLocomotive && 
                    (
                    <div>
                        <Grid item xs={6}>
                            <TextField
                                id="outlined-multiline-static"
                                label={<Trans i18nKey='steps:healthStep.h2check5input1'></Trans>}
                                placeholder={t("steps:healthStep.h2check5input1placeholder")}
                                value={reasons.reasonLocomotiveDetail}
                                onChange={(event)=> setReasons({...reasons, reasonLocomotiveDetail: event.target.value})}
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
                                value={reasons.reasonDigestive}
                                onChange={()=> setReasons({...reasons, reasonDigestive: !reasons.reasonDigestive})}
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
                        <h2 className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading3'></Trans></h2>
                    </Grid>  
                    <Grid container xs={12}>   
                        <Grid item sm={6}>
                            <p className="font-medium text-md mb-4 italic text-grey-400"><Trans i18nKey='steps:healthStep.heading3text'></Trans></p>
                            <p className="font-medium text-md mb-4 italic text-grey-400"><Trans i18nKey='steps:healthStep.heading3compulsory'></Trans></p>
                        </Grid>
                        <Grid item sm={6}>
                        <div>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={exclusions.exclusionDiabetes}
                                        onChange={()=> setExclusions({...exclusions, exclusionDiabetes: !exclusions.exclusionDiabetes})}
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
                                        value={exclusions.exclusionCancer}
                                        onChange={()=> setExclusions({...exclusions, exclusionCancer: !exclusions.exclusionCancer})}
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
                                        value={exclusions.exclusionDrugs}
                                        onChange={()=> setExclusions({...exclusions, exclusionDrugs: !exclusions.exclusionDrugs})}
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
                                        value={exclusions.exclusionEatingDis}
                                        onChange={()=> setExclusions({...exclusions, exclusionEatingDis: !exclusions.exclusionEatingDis})}
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
                        <h2 className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading4'></Trans></h2>
                    </Grid>
                    <Grid container sm={12}>
                        <Grid item sm={6}>
                            <p className="font-medium text-md mb-4 italic text-grey-400"><Trans i18nKey='steps:healthStep.heading4text'></Trans></p>
                        </Grid>
                        <Grid container sm={6}>
                            <Grid container sm={12}>
                                <Grid item sm={9} xs={6}>
                                    <TextField
                                        className="w-full"
                                        id="outlined-required"
                                        label={<Trans i18nKey='steps:healthStep.bodyheightLabel'></Trans>}
                                        placeholder={t("steps:healthStep.bodyheightPlaceholder")}
                                        value={generalInfo.height}
                                        onChange={(event)=> setGeneralInfo({...generalInfo, height: event.target.value})}
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
                                    value={generalInfo.weight}
                                    onChange={(event)=> setGeneralInfo({...generalInfo, weight: event.target.value})}
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
                        <h2 className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading5'></Trans></h2>
                        <p className="font-medium text-md mb-4 text-grey-400"><Trans i18nKey='steps:healthStep.heading5text1'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item sm={6} xs={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={disabilities.disabilityFood} onChange={()=> setDisabilities({...disabilities, disabilityFood: !disabilities.disabilityFood})}>
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
                                    value={disabilities.disabilityFoodDetail}
                                    onChange={event=> setDisabilities({...disabilities, disabilityFoodDetail: event.target.value})}
                                    multiline
                                    rows={7}
                                    fullWidth={true}
                                    variant="outlined"
                                   
                                    />   
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="font-medium text-md mb-4 text-grey-400"><Trans i18nKey='steps:healthStep.heading5text2'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item  sm={6} xs={12}>
                        <RadioGroup aria-label="gender" name="gender1" value={disabilities.disabilityMedAllergy} onChange={()=> setDisabilities({...disabilities, disabilityMedAllergy: !disabilities.disabilityMedAllergy})}>
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
                                value={disabilities.disabilityMedAllergyDetail}
                                onChange={event=> setDisabilities({...disabilities, disabilityMedAllergyDetail: event.target.value})}
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
                        <h2 className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading6'></Trans></h2>
                        <p className="font-medium text-md mb-4 text-grey-400"><Trans i18nKey='steps:healthStep.heading6text1'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item sm={6} xs={12}>                        
                            <RadioGroup aria-label="gender" name="gender1" value={disabilities.disabilityLocomotion} onChange={()=> setDisabilities({...disabilities, disabilityLocomotion: !disabilities.disabilityLocomotion})}>
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
                                    value={disabilities.disabilityLocomotionDetail}
                                    onChange={event=> setDisabilities({...disabilities, disabilityLocomotionDetail: event.target.value})}
                                    multiline
                                    rows={7}
                                    fullWidth={true}
                                    variant="outlined"
                                    />   
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <p className="font-medium text-md mb-4 text-grey-400"><Trans i18nKey='steps:healthStep.heading5text2'></Trans></p>
                    </Grid>
                    <Grid container xs={12}>
                        <Grid item  sm={6} xs={12}>
                        <RadioGroup aria-label="gender" name="gender1" value={disabilities.disabilityHelp} onChange={()=> setDisabilities({...disabilities, disabilityHelp: !disabilities.disabilityHelp})}>
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
                                value={disabilities.disabilityHelpDetail}
                                onChange={event=> setDisabilities({...disabilities, disabilityHelpDetail: event.target.value})}
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
                            <h2 className="font-medium text-md mb-4 uppercase text-blue-500"><Trans i18nKey='steps:healthStep.heading7'></Trans></h2>
                        </Grid>
                        <Grid item xs={12}> 
                            <p className="font-medium text-md mb-4 text-grey-400"><Trans i18nKey='steps:healthStep.heading7text'></Trans></p>
                        </Grid>
                        <Grid container xs={12}>
                            <RadioGroup aria-label="gender" name="gender1" value={generalInfo.medicationGeneral} onChange={()=> setGeneralInfo({...generalInfo, medicationGeneral: !generalInfo.medicationGeneral})}>
                                <FormControlLabel value={false} control={<Radio />} label={<Trans i18nKey='steps:healthStep.heading7check1Label'></Trans>}/>
                                <FormControlLabel value={true} control={<Radio />} label={<Trans i18nKey='steps:healthStep.heading7check2Label'></Trans>}/>
                            </RadioGroup>
                        </Grid>
                        
                        { generalInfo.medicationGeneral && 
                        generalInfo.medication.map((curr, i) => (                            
                        <Grid container className="my-6 p-4 border border-blue-300 bg-blue-100 rounded" xs={12} key={curr.index}>
                                <Grid container xs={12} spacing={1}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="outlined-multiline-static"
                                            label={<Trans i18nKey='steps:healthStep.forminpu1Label'></Trans>}
                                            placeholder={t("steps:healthStep.forminpu1Placeholder")}
                                            value={curr.name}
                                            // onChange={event=> setDisabilities({...disabilities, disabilityHelpDetail: event.target.value})}
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
                                        {generalInfo.medication.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                            </MenuItem>
                                        ))}
                                        </TextField>
                                    </Grid>
                                    <Grid container xs={1} justify="flex-end" alignItems="center">
                                        <DeleteForeverOutlinedIcon onClick={() => removeMedication(curr)} className="size-lg" />
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
                        {
                            generalInfo.medicationGeneral && 
                            <Grid container xs={12} justify="center" alignItems="center">
                                <Button variant="contained" color="primary" onClick={addMedication}>
                                    <Trans i18nKey='steps:healthStep.formaddbuttontext'></Trans>
                                </Button>
                            </Grid>
                        }
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
            </Grid>
        </form>
    </div>
    )
}

export default HealthStep;