import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import useConfig from '../../hooks';
import { makeStyles } from '@material-ui/core';
import { themeColors } from '../../theme';
import { useState } from 'react';

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
            <p className="font-medium text-sm mb-4 uppercase text-gray-400">Herzlich Wilkommen</p>
            <p className="font-medium text-4xl text-gray-700 mb-4">
                Lieber Gast,
            </p>
            <p className="font-medium text-lg text-gray-500">
                um Ihren Aufenthalt perfekt auf Ihre Bedürfnisse abzustimmen, sind wir auf Ihre persönlichen Daten
                angewiesen. Wir verwenden diese Informationen unter strengster Vertraulichkeit. Bitte nehmen Sie sich
                dafür bewusst ein paar Minuten Zeit.
            </p>

            <form className="mt-12 flex flex-col items-center" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-row justify-between">
                    <RadioGroup classes={{root: classes.radioGroup}} className="w-full flex flex-row justify-between" aria-label="quiz" name="quiz" value={formState.alreadyVisited} onChange={handleRadioChange}>
                        <div className="w-5/12">
                            <FormControlLabel value={false} onChange={handleRadioChange} control={<RadioWithImage imageUrl={image1Url} label="Ich komme das erste Mal" />}/>
                        </div>

                        <div className="w-5/12">
                            <FormControlLabel value={true} onChange={handleRadioChange} control={<RadioWithImage imageUrl={image2Url} label="Ich war bereits bei Ihnen" />}/>
                        </div>
                    </RadioGroup>
                </div>

                <Button type="submit" classes={{root: classes.submitButton}}>
                    Anmeldeformular ausfüllen
                </Button>
            </form>
        </div>
    );
}

export default WelcomeStep;
