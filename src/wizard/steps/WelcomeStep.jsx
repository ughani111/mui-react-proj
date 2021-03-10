import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import useConfig from '../../hooks';
import { makeStyles } from '@material-ui/core';
import { themeColors } from '../../theme';
import { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
    radioGroup: {
        flexDirection: 'row',
        margin: 0,
    },
    radioButton: {
        marginLeft: -theme.spacing(1),
    },
    submitButton: {
        outline: 'none',
        marginTop: theme.spacing(3),
        backgroundColor: themeColors.gray.fade2,
        color: themeColors.gray.fade3,
        textTransform: 'none'
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

function WelcomeStep({stepState, onSubmit}) {
    const { t } = useTranslation(['common', 'steps']);
    const [formState, setFormState] = useState(stepState);
    const imagesUrl = useConfig().imagesUrl;

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(formState);
    }

    const handleRadioChange = (event) => {
        setFormState((state) => ({
            ...state,
            alreadyVisited: event.target.value === "true"
        }))
    }

    const image1Url = `${imagesUrl}step1-1-1.jpg`
    const image2Url = `${imagesUrl}step1-1-2.jpg`

    const classes = useStyles();

    return (
        <div className="w-full flex flex-col p-12">
            <p className="font-medium text-sm mb-4 uppercase text-gray-400">
                <Trans i18nKey="steps:welcome.stepTopic">Herzlich Wilkommen</Trans>
            </p>
            <p className="font-medium text-4xl text-gray-700 mb-4">
                <Trans i18nKey="steps:welcome.stepGreeting">Lieber Gast</Trans>,
            </p>
            <p className="font-medium text-lg text-gray-500">
                <Trans i18nKey="steps:welcome.stepDescription" />
            </p>

            <form className="mt-12 flex flex-col items-center" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-row justify-between">
                    <RadioGroup classes={{root: classes.radioGroup}} className="w-full flex flex-row justify-between" aria-label="quiz" name="quiz" value={formState.alreadyVisited} onChange={handleRadioChange}>
                        <div className="w-5/12">
                            <FormControlLabel value={false} onChange={handleRadioChange} control={<RadioWithImage imageUrl={image1Url} label={t('steps:welcome.firstTime')} />}/>
                        </div>

                        <div className="w-5/12">
                            <FormControlLabel value={true} onChange={handleRadioChange} control={<RadioWithImage imageUrl={image2Url} label={t('steps:welcome.alreadyVisited')} />}/>
                        </div>
                    </RadioGroup>
                </div>

                <Button type="submit" classes={{root: classes.submitButton}}>
                    {t('common:labels.fillRegistrationForm')}
                </Button>
            </form>
        </div>
    );
}

export default WelcomeStep;
