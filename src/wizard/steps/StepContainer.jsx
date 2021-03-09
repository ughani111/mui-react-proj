import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import WelcomeStep from './WelcomeStep';
import PersonalInformation from './PersonalInformation';
import Visits from './Visits';
import Health from './Health';
import Closing from './Closing';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'transparent',
    }
}));

const initalState = {
    0: {
        alreadyVisited: false
    }
}

const steps = [
    {
        label: 'Wilkommen',
        comp: WelcomeStep
    },
    {
        label: 'Persönliche Information',
        comp: PersonalInformation
    },
    {
        label: 'Aufenthalt',
        comp: Visits
    },
    {
        label: 'Gesundheit',
        comp: Health
    },
    {
        label: 'Abschluss',
        comp: Closing
    }
];

const stepConnector = <ChevronRightIcon className="text-blue-500" />;

function StepCustomLabel({label, stepIndex, active, onClick}) {
    const onButtonClick = () => {
        onClick(stepIndex);
    };

    const className = `font-bold text-blue-500 bg-white h-8 px-2 rounded-md border-solid border-blue-500 flex items-center justify-center ${active ? 'border' : 'border-0'}`;

    return (
        <button className={className} onClick={onButtonClick}>
            {label}
        </button>
    );
}

export default function StepContainer() {
    const [stepsState, setStepsState] = useState(initalState);
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

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

    const handleStepSubmit = (stepValue) => {
        setStepsState((state) => ({
           ...state,
           [activeStep]: stepValue
        }));

        gotToStep(activeStep + 1);
    }

    const StepRendererComponent = steps[activeStep].comp;
    const stepProps = { stepState: stepsState[activeStep], onSubmit: handleStepSubmit }

    const classes = useStyles();

    return (
        <div>
            <Stepper classes={classes} activeStep={activeStep} connector={stepConnector}>
                {steps.map(({label, comp}, index) => {
                    return (
                        <Step key={label}>
                            <StepLabel StepIconProps={{label, stepIndex: index, onClick: gotToStep}} StepIconComponent={StepCustomLabel} />
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
