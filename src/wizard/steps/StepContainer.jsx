import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Check from '@material-ui/icons/Check';

import { makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
    }
}));

const initalState = {
    0: {
        alreadyVisited: false
    },
    1: {
        gender: "",
        title: "",
        lastName: "",
        firstName: "",
        addressPLZ: "",
        addressResidency: "",
        addressStreetNr: "",
        addressStreet: "",
        contactPerson: "",
        contactPhone: "",
        job: "",
        languageGerman: false,
        languageEnglish: false,
        languageFrench: false, 
        languageSpanish: false,
        languageOther: "",
        birthDate: "",
        birthPlace: "",
        nationality: "",
        email: "",
        addressCountry: ""
    },
    2: {
        mediaTV: false,
        mediaDVD: false,
        therapyType: "Fasten",
        talk: "",
        talkDetail: ""
    },
    3: {
        resonPrevention: false,
        reasonRegeneration: false,
        reasonWeight: false,
        reasonSmoke: false,
        reasonAcute: false,
        reasonAcuteDetail: "",
        reasonChronic: false,
        reasonLocomotive: false,
        reasonDigestive: false,
        exclusionDiabetes: false,
        exclusionCancer: false,
        exclusionDrugs: false,
        exclusionEatingDis: false,
        medicationGeneral: false,
        medication: [{
            index: Math.random(),
            name: "",
            author: "",
            type: "",
            dateOfPublish: "",
            price: ""
        }],
        disabilityFood: false,
        disabilityFoodDetail: "",
        disabilityMedAllergy: false,
        disabilityMedAllergyDetail: "",
        disabilityLocomotion: false,
        disabilityLocomotionDetail: "",
        disabilityHelp: false,
        disabilityHelpDetail: "",
        weight: 0,
        height: 0
    },
    4: {
        legalAGB: false,
        legalPrivacy: false,
        legalMarketing: false,
        legalPicture: false
    }
}

const stepConnector = <ChevronRightIcon className="text-blue-500" />;

function StepCustomLabel({label, i18nLabel, stepIndex, active, isDone, onClick}) {
    const { t, i18n } = useTranslation(['common', 'steps']);

    const onButtonClick = () => {
        onClick(stepIndex);
    };

    const className = `font-bold bg-white h-8 px-2 rounded-md border-solid border-blue-500 flex items-center justify-center ${active ? 'border' : 'border-0'} ${(isDone || active) ? 'text-blue-500' : 'text-blue-200'}`;

    return (
        <button className={className} onClick={onButtonClick}>
            {isDone && <Check className="mr-1 text-blue-500" />}
            {t(i18nLabel)}
        </button>
    );
}

export default function StepContainer({ steps, onDone }) {
    
    const {t, i18n} = useTranslation(['common', 'steps']);
    const [stepsState, setStepsState] = useState(initalState);
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [doneState, setDoneState] = React.useState(steps.map(step => false));
    

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const gotToStep = (stepIndex) => {
        setActiveStep(stepIndex);
    }

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleStepSubmit = (stepValue, stepIndex) => {
        setStepsState((state) => ({
           ...state,
           [activeStep]: stepValue
        }));


        console.log(stepsState, stepIndex)

        const updatedArray = [...doneState]        
        updatedArray[stepIndex] = true;
        setDoneState(() => updatedArray)
        gotToStep(activeStep + 1);

        // TODO
        // if(stepValue === lastStep){
        //     onDone()
        // }

        
    }

    const StepRendererComponent = steps[activeStep].comp;
    const stepProps = { stepState: stepsState[activeStep], onSubmit: handleStepSubmit }

    const classes = useStyles();
    return (
        <div>
            <Stepper classes={classes} activeStep={activeStep} connector={stepConnector}>
                {steps.map(({label, i18nLabel, comp}, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel StepIconProps={{label, i18nLabel, stepIndex: index, isDone: doneState[index],  onClick: gotToStep}} StepIconComponent={StepCustomLabel} />
                        </Step>
                    );
                })}
            </Stepper>
            <div className="w-full p-8">
                <div className="bg-white border border-solid border-gray-300 rounded-md">
                    <StepRendererComponent {...stepProps} />
                </div>
            </div>
        </div>
    );
}
